#!/usr/bin/env python3
"""Build responsive WebP previews without changing any source photograph.

Requires Pillow (``python3 -m pip install Pillow``). Run from any directory:
    python3 scripts/optimize_images.py

Only raster images referenced by the site's HTML, CSS, and project data are
included. Existing manifest entries let a later run resolve generated image
references back to originals. Original paper figures remain available through
``originalSrc``; high-quality previews should not replace full-size downloads.
Generated URLs include the original bytes and encoder settings in their hash.
"""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor
import hashlib
import io
import json
from pathlib import Path
import re
import statistics

from PIL import Image, ImageOps, features


ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "assets/research-center/image-manifest.json"
OUTPUT_DIR = ROOT / "assets/research-center/optimized"
SOURCE_DOCUMENTS = (
    "index.html",
    "assets/research-center/center.js",
    "assets/research-center/center.css",
    "content/projects.js",
    "service-design-engineering/index.html",
)
IMAGE_REFERENCE = re.compile(
    r'''["'(\s]([^\s"'()<>]+\.(?:png|jpe?g|webp))(?:["')\s]|$)''', re.I
)
SETTINGS = {
    "version": 1,
    "photoWidths": [480, 960, 1600],
    "evidenceWidths": [480, 960, 1200, 1600],
    "photoQuality": 80,
    "evidenceQuality": 92,
    "method": 6,
    "resampling": "LANCZOS",
    "webpVersion": features.version("webp"),
}


def references() -> list[str]:
    """Resolve paths relative to their HTML document, including reruns."""
    old = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {}
    originals = {}
    for original, entry in old.items():
        originals[entry["src"]] = original
        for variant in entry["srcset"]:
            originals[variant["src"]] = original
    found = set()
    for name in SOURCE_DOCUMENTS:
        source = ROOT / name
        if not source.exists():
            continue
        for match in IMAGE_REFERENCE.finditer(source.read_text()):
            raw = match.group(1)
            if raw.startswith(("https:", "http:", "data:", "//")):
                continue
            # JavaScript strings are browser URLs, relative to the root page.
            base = ROOT / "service-design-engineering" if name.startswith(
                "service-design-engineering/"
            ) else ROOT
            candidate = (base / raw.lstrip("/")).resolve()
            try:
                relative = candidate.relative_to(ROOT).as_posix()
            except ValueError:
                continue
            original = originals.get(relative, relative)
            if (ROOT / original).is_file():
                found.add(original)
    return sorted(found)


def verify_image(path: Path, expected_size: tuple[int, int]) -> None:
    with Image.open(path) as check:
        check.load()
        if check.size != expected_size:
            raise ValueError(f"Invalid dimensions for {path}: {check.size}")


def build_one(original: str) -> tuple[str, dict]:
    source = ROOT / original
    source_bytes = source.read_bytes()
    kind = "evidence" if "/evidence/" in original else "photo"
    widths = SETTINGS["evidenceWidths" if kind == "evidence" else "photoWidths"]
    quality = SETTINGS["evidenceQuality" if kind == "evidence" else "photoQuality"]
    signature = hashlib.sha256(
        original.encode() + b"\0" + source_bytes + json.dumps(
            SETTINGS, sort_keys=True
        ).encode()
    ).hexdigest()[:12]
    stem = re.sub(r"[^a-zA-Z0-9_-]", "-", source.stem)
    with Image.open(io.BytesIO(source_bytes)) as opened:
        opened.load()
        image = ImageOps.exif_transpose(opened)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA" if "transparency" in image.info else "RGB")
        original_width, original_height = image.size
        # Include native size when the original lies between our breakpoints.
        targets = sorted({min(width, original_width) for width in widths})
        variants = []
        for width in targets:
            height = max(1, round(original_height * width / original_width))
            output = OUTPUT_DIR / f"{stem}.{signature}.{width}w.webp"
            if not output.exists():
                resized = image if width == original_width else image.resize(
                    (width, height), Image.Resampling.LANCZOS
                )
                encoded = io.BytesIO()
                resized.save(encoded, "WEBP", quality=quality, method=SETTINGS["method"])
                output_bytes = encoded.getvalue()
                # An already-efficient native WebP needs no additional lossy pass.
                if (
                    width == original_width
                    and source.suffix.lower() == ".webp"
                    and len(source_bytes) <= len(output_bytes)
                    and opened.size == image.size
                ):
                    output_bytes = source_bytes
                output.write_bytes(output_bytes)
            verify_image(output, (width, height))
            variants.append({
                "src": output.relative_to(ROOT).as_posix(),
                "width": width,
                "height": height,
                "bytes": output.stat().st_size,
            })
        preferred = min(1600 if kind == "evidence" else 960, original_width)
        default = next(v for v in variants if v["width"] == preferred)
        # A highly optimized paper graphic can become larger after resampling.
        # Keep its text-friendly quality and use the 1200px preview by default;
        # the 1600px candidate and full-resolution source remain available.
        if kind == "evidence" and default["bytes"] > len(source_bytes):
            smaller = [v for v in variants if 1200 <= v["width"] < preferred]
            if smaller:
                default = smaller[-1]
        return original, {
            "src": default["src"],
            "width": default["width"],
            "height": default["height"],
            "bytes": default["bytes"],
            "srcset": variants,
            "kind": kind,
            "originalSrc": original,
            "originalWidth": original_width,
            "originalHeight": original_height,
            "originalBytes": len(source_bytes),
        }


def distribution(values: list[int]) -> dict:
    return {
        "count": len(values),
        "totalBytes": sum(values),
        "minBytes": min(values) if values else 0,
        "medianBytes": round(statistics.median(values)) if values else 0,
        "maxBytes": max(values) if values else 0,
    }


def build_report(manifest: dict) -> dict:
    originals = sum(entry["originalBytes"] for entry in manifest.values())
    defaults = sum(entry["bytes"] for entry in manifest.values())
    photos = [e for e in manifest.values() if e["kind"] == "photo"]
    evidence = [e for e in manifest.values() if e["kind"] == "evidence"]
    # One chosen resource per source, not the combined size of all variants.
    card_480 = [e["srcset"][0]["bytes"] for e in photos]
    card_960 = [e["bytes"] for e in photos]
    hero_1600 = [e["srcset"][-1]["bytes"] for e in photos]
    project_photos = [
        e for original, e in manifest.items() if "/research-center/ai/" in original
    ]
    return {
        "sourceCount": len(manifest),
        "variantCount": sum(len(e["srcset"]) for e in manifest.values()),
        "originalBytes": originals,
        "defaultPreviewBytes": defaults,
        "defaultPreviewSavingsBytes": originals - defaults,
        "defaultPreviewSavingsPercent": round((1 - defaults / originals) * 100, 2),
        "allVariantBytesOnDisk": sum(
            v["bytes"] for e in manifest.values() for v in e["srcset"]
        ),
        "card480": distribution(card_480),
        "card960": distribution(card_960),
        "hero1600": distribution(hero_1600),
        "researchCards480": distribution([e["srcset"][0]["bytes"] for e in project_photos]),
        "researchCards960": distribution([e["bytes"] for e in project_photos]),
        "researchHeroes1600": distribution([e["srcset"][-1]["bytes"] for e in project_photos]),
        "evidencePreviewUpTo1600": distribution([e["bytes"] for e in evidence]),
        "settings": SETTINGS,
        "validation": "Every generated file fully decoded and dimensions verified.",
        "note": "Originals are preserved. Default savings compares one preview per source; browsers load a single matching srcset candidate, not all variants.",
        "images": manifest,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--report", type=Path, default=Path("/tmp/research-image-optimization-report.json"))
    parser.add_argument("--workers", type=int, default=4)
    args = parser.parse_args()
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    previous = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {}
    sources = references()
    if not sources:
        raise SystemExit("No referenced images found; refusing to write an empty manifest.")
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        manifest = dict(pool.map(build_one, sources))
    # Keep static src/srcset URLs valid if an encoder version changes the hash.
    replacements = {}
    for original, old in previous.items():
        if original in manifest:
            current = {v["width"]: v["src"] for v in manifest[original]["srcset"]}
            replacements.update({v["src"]: current[v["width"]] for v in old["srcset"] if v["width"] in current})
    for name in ("index.html", "service-design-engineering/index.html"):
        page = ROOT / name
        html = page.read_text()
        for old, new in replacements.items():
            html = html.replace(old, new)
        page.write_text(html)
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    # Keep browser metadata compact; full provenance stays in the JSON manifest.
    browser = {key: {"src": entry["src"], "width": entry["width"],
                     "height": entry["height"],
                     "srcset": ", ".join(f'{v["src"]} {v["width"]}w' for v in entry["srcset"])}
               for key, entry in manifest.items()}
    (ROOT / "assets/research-center/image-sources.js").write_text(
        "window.RESEARCH_IMAGES=" + json.dumps(browser, ensure_ascii=False, separators=(",", ":")) + ";\n")
    report = build_report(manifest)
    args.report.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({k: v for k, v in report.items() if k != "images"}, indent=2))


if __name__ == "__main__":
    main()
