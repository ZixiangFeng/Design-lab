#!/usr/bin/env python3
"""Build small card renditions and separate AVIF/WebP detail covers.

Run after updating content/projects.js: python3 scripts/build_cover_assets.py
The original full-size WebP files remain available; only presentation assets
are encoded here. Hashed URLs can be cached permanently without stale images.
"""
from __future__ import annotations

import base64
from concurrent.futures import ThreadPoolExecutor
import hashlib
import importlib.util
import io
import json
from pathlib import Path
import re
import sys

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "assets/research-center/optimized"
MANIFEST = ROOT / "assets/research-center/cover-manifest.json"
PROFILES = {
    "card": {"widths": [320, 480, 640, 960], "avif": 42, "webp": 66, "default": 480},
    "hero": {"widths": [960, 1280, 1600], "avif": 50, "webp": 78, "default": 1280},
}


def build(source: str) -> tuple[str, dict]:
    path = ROOT / source
    raw = path.read_bytes()
    signature = hashlib.sha256(raw + json.dumps(PROFILES, sort_keys=True).encode()).hexdigest()[:12]
    files = []
    with Image.open(io.BytesIO(raw)) as opened:
        image = ImageOps.exif_transpose(opened).convert("RGB")
        width, height = image.size
        small = image.resize((24, max(1, round(24 * height / width))), Image.Resampling.LANCZOS)
        placeholder = io.BytesIO()
        small.save(placeholder, "WEBP", quality=15)
        color = "#%02x%02x%02x" % image.resize((1, 1)).getpixel((0, 0))
        entry = {"placeholder": "data:image/webp;base64," + base64.b64encode(placeholder.getvalue()).decode(), "color": color}
        for role, profile in PROFILES.items():
            variants = {"avif": [], "webp": []}
            for target in sorted({min(w, width) for w in profile["widths"]}):
                resized = image.resize((target, max(1, round(target * height / width))), Image.Resampling.LANCZOS)
                for fmt in ("avif", "webp"):
                    output = DEST / f"mixed-{path.stem}.{signature}.{role}.{target}w.{fmt}"
                    if not output.exists():
                        resized.save(output, fmt.upper(), quality=profile[fmt])
                    with Image.open(output) as verified:
                        verified.load()
                        assert verified.size == resized.size, output
                    relative = output.relative_to(ROOT).as_posix()
                    variants[fmt].append((relative, target))
                    files.append({"src": relative, "role": role, "format": fmt, "width": target, "height": resized.height, "bytes": output.stat().st_size})
            preferred = min(profile["default"], width)
            default = next((src for src, w in variants["webp"] if w == preferred), variants["webp"][-1][0])
            entry[role] = {
                "src": default,
                "width": preferred,
                "height": max(1, round(preferred * height / width)),
                "webp": ", ".join(f"{src} {w}w" for src, w in variants["webp"]),
                "avif": ", ".join(f"{src} {w}w" for src, w in variants["avif"]),
            }
    return source, {"browser": entry, "files": files}


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)
    text = (ROOT / "content/projects.js").read_text()
    data = json.JSONDecoder().raw_decode(text.split("=", 1)[1].lstrip())[0]
    sources = sorted({p["cover"] for p in data["projects"]})
    with ThreadPoolExecutor(max_workers=4) as pool:
        results = dict(pool.map(build, sources))
    manifest = {"version": 2, "profiles": PROFILES,
                "images": {source: result["browser"] for source, result in results.items()},
                "files": [f for result in results.values() for f in result["files"]]}
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    # A direct visit to the project list should discover its first cover in
    # the document head, before the project-data scripts finish downloading.
    first = results[data["projects"][0]["cover"]]["browser"]["card"]
    preload = {"href": first["avif"].split(", ")[0].split(" ")[0],
               "srcset": first["avif"],
               "sizes": "(max-width:620px) calc(100vw - 44px), (max-width:1099px) calc(50vw - 40px), (max-width:1336px) calc(58.333vw - 67px), 713px"}
    block = '<!-- research-cover-preload:start -->\n<script>if(location.hash==="#page-projects"){document.documentElement.dataset.initialRoute="projects";const p=' + json.dumps(preload, separators=(",", ":")) + ';const l=document.createElement("link");l.rel="preload";l.as="image";l.type="image/avif";l.href=p.href;l.setAttribute("imagesrcset",p.srcset);l.setAttribute("imagesizes",p.sizes);l.setAttribute("fetchpriority","high");document.head.appendChild(l);}</script>\n<!-- research-cover-preload:end -->'
    index = ROOT / "index.html"
    html = index.read_text()
    if '<!-- research-cover-preload:start -->' in html:
        html = re.sub(r'<!-- research-cover-preload:start -->.*?<!-- research-cover-preload:end -->', lambda _: block, html, flags=re.S)
    else:
        html = html.replace('<style>', block + '\n<style>', 1)
    index.write_text(html)
    sys.dont_write_bytecode = True
    spec = importlib.util.spec_from_file_location("site_image_optimizer", ROOT / "scripts/optimize_images.py")
    optimizer = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(optimizer)
    optimizer.write_browser_metadata(json.loads(optimizer.MANIFEST.read_text()))
    print(json.dumps({"covers": len(sources), "renditions": len(manifest["files"]),
                      "cardAvif640Bytes": sum(f["bytes"] for f in manifest["files"] if f["role"] == "card" and f["format"] == "avif" and f["width"] == 640)}))


if __name__ == "__main__":
    main()
