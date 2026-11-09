window.RESEARCH_CENTER = {
  "updated": "2026-11-09",
  "projects": [
    {
      "id": "triadic-embodied-feedback",
      "code": "PROJECT 01",
      "title": "人机陪伴交互的结构化反馈设计策略",
      "en": "Structured Embodied Feedback for Companion Interaction",
      "kind": "research",
      "kindLabel": "理论模型与交互设计",
      "status": "published",
      "statusText": "已发表",
      "period": "2026",
      "summary": "围绕视觉、听觉与行为三个反馈通道，提炼六类交互变量，建立从感知、社会归因到信任判断的 IMO 模型，并提出可执行的验证路线。",
      "lead": "虚拟智能体没有真实身体，却能通过表情、声音与回应节奏形成社会在场感。这项研究关注：如何把这些线索组织成可解释、可测量的反馈结构，让用户理解系统的回应并形成适当的信任。",
      "color": "#cfcbff",
      "meta": [
        {
          "label": "反馈通道",
          "value": "视觉 · 听觉 · 行为"
        },
        {
          "label": "核心变量",
          "value": "6 类具身反馈"
        },
        {
          "label": "成果状态",
          "value": "理论模型已发表 · 实证验证待开展"
        }
      ],
      "tags": [
        "具身认知",
        "IMO",
        "结构化反馈",
        "虚拟智能体",
        "社会临场感"
      ],
      "links": [
        {
          "label": "HCII 2025 / LNCS 16332, 100–121 · 正式论文",
          "url": "https://doi.org/10.1007/978-3-032-12385-5_7"
        }
      ],
      "related": [
        "project-02",
        "project-01",
        "project-03"
      ],
      "sections": [
        {
          "id": "stage-01",
          "title": "研究背景：陪伴智能体如何传递反馈",
          "paragraphs": [
            "研究聚焦能够提供社会性反馈的虚拟类人智能体，讨论没有实体身体时，视觉、声音与交互行为如何共同建立“系统正在理解和回应我”的感知。",
            "以具身认知、媒介等同与社会信任理论为基础，结合文献综合和交互案例分析，把关注点从单一外观或语言风格扩展到多通道反馈的组织方式。"
          ],
          "takeaway": "研究对象是可提供社会性反馈的虚拟智能体。"
        },
        {
          "id": "stage-02",
          "title": "研究内容：三个通道与六类设计变量",
          "paragraphs": [
            "视觉通道包括面部表情丰富度与动作同步性；听觉通道包括韵律温暖度与社会性语言表达；行为通道包括主动回应与轮次协调。",
            "研究为每个变量梳理操作定义、相关心理机制和可用测量方式，建立从具体交互特征到研究指标的对应关系。"
          ],
          "takeaway": "三个通道、六类变量组成可操作的设计空间。",
          "matrix": {
            "headers": [
              "反馈通道",
              "可设计的变量",
              "关注的体验"
            ],
            "rows": [
              [
                "视觉",
                "表情丰富度、动作同步性",
                "表达是否清晰，行动是否协调"
              ],
              [
                "听觉",
                "韵律温暖度、社会性语言",
                "语气与内容如何传达关怀"
              ],
              [
                "行为",
                "主动回应、轮次协调",
                "回应是否及时，节奏是否合适"
              ]
            ]
          }
        },
        {
          "id": "stage-03",
          "title": "研究产出：从反馈感知到信任的模型",
          "paragraphs": [
            "模型用输入—中介—输出（Input–Mediator–Output）组织信任形成过程：用户先感知反馈，再解释系统意图、社会在场与关系意义，最后形成信任、情感联结和继续交互的倾向。",
            "研究提出六项待检验假设，并比较实体机器人、虚拟数字助手和情感支持系统中的实现条件。不同系统需要优先考虑不同反馈变量，而非统一增加拟人化强度。"
          ],
          "takeaway": "主要产出是认知路径、变量定义与场景适配框架；模型中的因果路径仍需实证检验。",
          "flow": [
            "反馈输入：视觉／听觉／行为",
            "用户解释：感知／社会归因",
            "体验结果：信任／情感联结／持续互动"
          ],
          "figures": [
            {
              "src": "assets/research-center/ai/embodied-detail.webp",
              "caption": "三通道反馈的概念表达；变量关系以正文理论模型为准。",
              "kind": "AI 概念视觉"
            }
          ]
        },
        {
          "id": "stage-04",
          "title": "设计含义与验证方案",
          "paragraphs": [
            "论文提出两条互补的后续验证路线：通过 Delphi 专家评估检验变量的相关性与结构一致性；通过交互原型的受控实验比较反馈条件。",
            "拟采用社会临场感、系统信任、情绪投入和交互满意度等指标，并针对表情、语调、主动性、动作同步、社会性措辞和轮次安排建立可操纵条件。",
            "两条路线属于后续验证方案，论文没有报告已完成的 Delphi 调查或行为实验结果。"
          ],
          "takeaway": "下一步是将理论变量转化为可比较的原型条件。"
        }
      ],
      "cover": "assets/research-center/ai/embodied-detail.webp",
      "coverAlt": "人机陪伴交互的结构化反馈设计策略 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "direction": "个性化人智交互用户体验与信任研究",
      "directionId": "direction-embodied-trust",
      "detailCover": "assets/research-center/ai/embodied.webp",
      "detailCoverAlt": "人机陪伴交互的结构化反馈设计策略 · AI 生成的主题场景",
      "topicId": "companion-design-strategy",
      "topicTitle": "人机陪伴交互设计趋势洞察与策略研究"
    },
    {
      "id": "project-01",
      "code": "PROJECT 02",
      "title": "个性化陪伴中的情感沟通与信任",
      "en": "Emotional Communication & Trust in Personalized Companionship",
      "kind": "research",
      "kindLabel": "双实验研究",
      "status": "manuscript",
      "statusText": "研究稿",
      "period": "2026",
      "summary": "在414人的两个独立实验中，比较认知与情感共情、收益与损失框架，研究支持性聊天机器人的语言选择如何联系用户信任与感知回应性。",
      "lead": "个性化陪伴需要理解用户怎样看待关怀、建议与回应。我们通过414人的两个独立实验，研究共情表达、消息框架和依恋差异如何联系用户对智能体的信任。",
      "cover": "assets/research-center/ai/trust-detail.webp",
      "coverAlt": "个性化陪伴中的情感沟通与信任 · AI 概念视觉",
      "meta": [
        {
          "value": "414",
          "label": "最终分析样本"
        },
        {
          "value": "2",
          "label": "独立实验"
        },
        {
          "value": "2×2",
          "label": "每项实验设计"
        }
      ],
      "tags": [
        "Supportive AI",
        "Empathy",
        "Message Framing",
        "Attachment"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "关系修复包含情绪应对、责任承担、边界表达和后续沟通决策。支持性对话智能体通过语言提供帮助时，共情表达和行动后果的表述可能影响用户是否信任其支持。",
            "同样的表达也可能因依恋焦虑、依恋回避等个体差异而被不同地解读。研究因此同时关注沟通条件与用户的支持期待。"
          ],
          "points": [
            "认知共情与情感共情如何影响用户对机器人的回应性与信任评价？",
            "收益和损失框架是否改变用户的信任？",
            "依恋差异与关系修复中的角色，是否对应不同的评价模式？"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/project-01-figure-3.webp",
              "caption": "实验因素、感知回应性、信任与依恋差异的研究框架。",
              "kind": "论文原图"
            }
          ]
        },
        {
          "id": "attachment",
          "title": "依恋理论与个体支持需求",
          "paragraphs": [
            "依恋回避路径突出距离保持、独立与自我调节，依恋焦虑路径突出接近寻求、对支持可得性的敏感及不安全感。图中呈现的是解释支持需求的理论路径。",
            "在本研究中，依恋焦虑与回避作为连续的个体差异变量纳入探索性分析。不能仅凭理论图为用户贴标签，也不能据此固定分配共情方式；实际结果需要结合用户反馈和实验情境解释。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/attachment-model.webp",
              "caption": "依恋回避与依恋焦虑的典型情绪调节路径。用于说明本研究的理论分析依据。",
              "kind": "理论模型"
            }
          ]
        },
        {
          "id": "methods",
          "title": "我们做了什么研究",
          "paragraphs": [
            "两个独立随机实验分别考察冲突中的过错方视角（n=210）和受伤方视角（n=204）。每项实验均采用共情类型×消息框架的2×2组间设计。",
            "参与者通过手机与网页聊天机器人完成多轮交流。对话依次经过情绪支持、问题探索与分析、建议提供三个阶段；各条件的名称、头像与界面保持一致。",
            "在交互后测量对机器人的信任和感知伙伴回应性，并检验依恋焦虑与回避相关的个体差异。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/project-01-figure-1.webp",
              "caption": "论文研究流程图：前测、实验性交互与后测。",
              "kind": "论文原图"
            }
          ]
        },
        {
          "id": "interaction",
          "title": "我们设计了什么",
          "paragraphs": [
            "情绪支持、问题探索与建议提供组成连续的对话过程。实验保持界面一致，在指定阶段调整共情表达与消息框架。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/project-01-figure-2.webp",
              "caption": "四种实验条件的代表性脚本与界面；用于说明操纵方式。",
              "kind": "论文原图"
            }
          ]
        },
        {
          "id": "findings",
          "title": "研究发现与数据",
          "paragraphs": [],
          "points": [
            "情感共情与回应性：两个实验中，情感共情条件均对应更高的感知回应性；在受伤方实验中，该条件还对应更高的整体信任。",
            "框架作用没有统一答案：收益与损失框架没有显示稳健的整体主效应。两个实验间的直接比较，也没有支持按过错方或受伤方角色固定匹配共情策略的规则。",
            "用户差异值得进一步检验：探索性分析发现，依恋回避较高时，情感共情相对于认知共情的信任优势更明显；回应性与信任之间的联系也随依恋差异变化。"
          ],
          "matrix": {
            "headers": [
              "结果指标",
              "实验1 · n=210",
              "实验2 · n=204"
            ],
            "rows": [
              [
                "情感共情对信任的主效应",
                "F(1,203)=2.23；p=.137；HC3 p=.139",
                "F(1,197)=7.17；p=.008；HC3 p=.011"
              ],
              [
                "情感共情对感知回应性的主效应",
                "F(1,203)=5.21；p=.024；ηp²=.025",
                "F(1,197)=7.54；p=.007；ηp²=.037"
              ],
              [
                "结果解读",
                "回应性较高；整体信任差异不显著",
                "回应性与整体信任均较高"
              ]
            ]
          },
          "note": "数据来自研究稿第4节。实验1为过错方视角，实验2为受伤方视角；报告控制协变量的 ANCOVA 结果，HC3 为稳健标准误检验。"
        },
        {
          "id": "implications",
          "title": "设计含义",
          "paragraphs": [
            "在提供建议前，给用户确认和修正系统理解的机会，并将情绪回应、问题澄清与建议提供组织成清楚的对话过程。",
            "将共情语言作为需要结合用户反馈验证的设计变量。除信任评分外，还应评估建议质量、实际依赖和后续关系结果。"
          ]
        },
        {
          "id": "scope",
          "title": "结论与研究范围",
          "paragraphs": [
            "回应性与信任在同一时间点测量，因此间接关联不构成因果中介证据。样本以中国年轻人为主，且属于单次交互；更高信任不能直接解释为建议更准确或真实关系修复成功。"
          ]
        }
      ],
      "links": [
        {
          "label": "情感化个性化智能体 · 实验原型",
          "url": "https://www.hustdesign.top/relationship-chatbot/"
        }
      ],
      "related": [
        "triadic-embodied-feedback",
        "project-02",
        "project-03"
      ],
      "direction": "个性化人智交互用户体验与信任研究",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-embodied-trust",
      "detailCover": "assets/research-center/ai/human-trust.webp",
      "detailCoverAlt": "个性化陪伴中的情感沟通与信任 · AI 生成的主题场景",
      "demos": [
        {
          "title": "情感化个性化智能体 · 网页实验原型",
          "url": "https://www.hustdesign.top/relationship-chatbot/",
          "image": "assets/research-center/evidence/support-webpage.webp",
          "description": "实际网页界面，展示对话支持的入口与交互形式。正式研究请按研究说明参与。"
        }
      ],
      "topicId": "voice-emotion-trust",
      "topicTitle": "人智语音交互中的情感与信任研究"
    },
    {
      "id": "project-02",
      "code": "PROJECT 03",
      "title": "人机陪伴交互的个性化趋势与设计策略",
      "en": "Personalization Trends & Design Strategies for Human–AI Companionship",
      "kind": "research",
      "kindLabel": "系统综述与研究规划",
      "status": "ongoing",
      "statusText": "综述与方案设计",
      "period": "2026",
      "summary": "整合30项实证研究，梳理系统自适应与用户定制的信任路径，并据此组织语言、化身和支持任务的后续研究问题。",
      "lead": "个性化并不只意味着智能体更像用户。这个项目把已有文献中的设计变量、用户控制方式与信任证据放在一起，进一步界定哪些社会线索值得在具体任务中检验。",
      "cover": "assets/research-center/ai/human-personalized.webp",
      "meta": [
        {
          "label": "证据基础",
          "value": "30 项纳入研究"
        },
        {
          "label": "检索范围",
          "value": "4 个数据库"
        },
        {
          "label": "当前状态",
          "value": "综述研究稿 · 后续方案设计"
        }
      ],
      "tags": [
        "Personalization",
        "Attachment",
        "Avatar",
        "信任"
      ],
      "sections": [
        {
          "id": "stage-01",
          "title": "研究背景与问题",
          "paragraphs": [
            "具身智能体通过虚拟角色或物理形态进入教育、健康、商业服务、社会支持和协作任务。外观、语言、行为和记忆能力的个性化设计，可能改变用户对系统能力与关系的判断。",
            "既有研究分散在不同智能体类型、应用场景和信任量表中。缺少整合视角时，容易把“更像用户”“更熟悉”或“更可定制”直接当作信任提升策略。",
            "哪些应用场景正在研究个性化具身智能体的信任？",
            "系统驱动的适应与用户控制的定制，通过哪些用户感知与信任产生联系？",
            "主观信任与实际依赖行为是否反映相同的设计效果？"
          ]
        },
        {
          "id": "stage-02",
          "title": "我们做了什么：系统检索与主题编码",
          "paragraphs": [
            "依据PRISMA 2020组织检索、筛选和纳入流程，检索Web of Science、ACM Digital Library、IEEE Xplore和Scopus。纳入时间范围为2006年1月1日至2026年6月15日的英文期刊或会议实证论文。",
            "初始检索获得854条记录，最终纳入30项研究。团队对研究情境、个性化因素、信任测量与主要发现进行主题编码，并使用VOSviewer整理关键词共现和时间趋势。"
          ],
          "takeaway": "从854条检索记录中最终纳入30项研究。",
          "figures": [
            {
              "src": "assets/research-center/evidence/project-04-figure-2.webp",
              "caption": "从854条检索记录到30项纳入研究的筛选流程。",
              "kind": "论文原图"
            },
            {
              "src": "assets/research-center/evidence/project-04-figure-3.webp",
              "caption": "纳入研究的发表时间分布，呈现该综述样本的趋势。",
              "kind": "论文原图"
            }
          ]
        },
        {
          "id": "stage-03",
          "title": "研究发现：个性化如何联系体验与信任",
          "paragraphs": [
            "两类个性化控制方式：系统驱动的个性化包括关系连续性、用户状态与情境适应，以及相似性匹配；用户控制的个性化主要涉及智能体身份和交互风格的自主定制。",
            "信任形成路径随情境变化：任务导向情境更关注能力、可靠性与任务适配；关系导向情境更关注持续回应、社会连接与关系连续性。综述整理出能力感知、主观相似性、人格相似性和心理所有权等可能路径。",
            "信任与行为需要分别观察：用户报告的信任与委托资源、采纳建议等行为并不总是同步变化。个性化程度、角色期待和交互边界共同影响最终效果。",
            "这是一项主题综合与文献可视化研究，提出的路径框架尚未被整体实证验证。现有证据多来自短期交互，不能据此确认长期因果关系或判断某一条路径最有效。"
          ],
          "takeaway": "任务情境、关系连续性和用户控制权共同影响个性化的作用。",
          "figures": [
            {
              "src": "assets/research-center/evidence/project-04-figure-1.webp",
              "caption": "系统适应与用户定制的个性化路径综合框架。",
              "kind": "论文原图"
            }
          ]
        },
        {
          "id": "stage-04",
          "title": "设计策略与结论",
          "paragraphs": [
            "先明确智能体承担的任务与社会角色，再选择需要适应的设计变量；个性化应与实际能力、用户预期和情境边界保持一致。",
            "让用户理解个性化依据，并保有调整与控制空间；评估时结合主观信任和实际依赖行为。",
            "个性化语言与拟人化化身如何共同影响对 AI 能力和关怀的评价？",
            "情感支持与信息支持任务是否需要不同的社会线索？",
            "认知信任、情感信任与依恋体验之间有哪些值得进一步检验的联系？",
            "围绕语言线索、化身与支持任务整理可比较的交互条件，以用户的信任和关系体验为主要观察对象。相关系统综述为变量选择和测量提供证据基础。",
            "目前为研究方案设计阶段。研究关注的关系与作用路径仍需通过实证研究检验。"
          ],
          "takeaway": "后续工作聚焦语言、化身与支持任务的组合，尚无新增实验结论。"
        }
      ],
      "related": [
        "triadic-embodied-feedback",
        "project-01",
        "project-03"
      ],
      "direction": "个性化人智交互用户体验与信任研究",
      "aliases": [
        "project-04"
      ],
      "links": [],
      "coverAlt": "人机陪伴交互的个性化趋势与设计策略 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-embodied-trust",
      "detailCover": "assets/research-center/ai/personalized-detail.webp",
      "detailCoverAlt": "人机陪伴交互的个性化趋势与设计策略 · AI 生成的主题场景",
      "topicId": "companion-design-strategy",
      "topicTitle": "人机陪伴交互设计趋势洞察与策略研究"
    },
    {
      "id": "project-03",
      "code": "PROJECT 04",
      "title": "小屿：情感表达与持续陪伴交互",
      "en": "Affective Expression & Trust in Ongoing AI Companionship",
      "kind": "research",
      "kindLabel": "交互原型与纵向研究",
      "status": "prototype",
      "statusText": "原型迭代",
      "period": "2026",
      "summary": "让聊天机器人在真实对话情境中理解个人表情的用法，比较通用表达、个人复用与视觉趋异策略下的持续交互体验。",
      "lead": "同一张表情包可以是玩笑、安慰，也可以是在回避一个难以表达的话题。小屿关注个人表达的具体情境，研究 AI 如何通过持续互动理解这些差异。",
      "symbol": ":)",
      "color": "#cfcbff",
      "meta": [
        {
          "label": "研究计划",
          "value": "28 天纵向交互"
        },
        {
          "label": "测量节点",
          "value": "第 7、14、28 天"
        },
        {
          "label": "交互形式",
          "value": "文字、Emoji 与静态表情"
        }
      ],
      "tags": [
        "Emoji",
        "Meme",
        "个性化",
        "长期信任",
        "陪伴"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "表情的含义与说话者、前后文和关系历史有关。把图片直接映射为固定情绪，可能忽略反讽、个人习惯与具体处境。"
          ]
        },
        {
          "id": "design",
          "title": "我们设计了什么",
          "paragraphs": [],
          "points": [
            "以连续聊天时间线组织陪伴体验，支持文字、Emoji 和个人表情图库。",
            "只有表情在真实对话中被使用后，才结合上下文记录可能的含义；允许后续自然语言纠正理解。",
            "一般生活记忆与表情使用记忆分开组织，便于研究两者在持续互动中的作用。"
          ]
        },
        {
          "id": "methods",
          "title": "我们做了什么研究",
          "paragraphs": [
            "当前计划比较纯文字回复、默认通用表情、个人表情复用，以及语义合适但视觉形式不同的表情策略。各条件共享文字支持风格，重点观察表情策略差异。",
            "研究计划为 28 天，结合阶段问卷与交互记录观察信任及持续使用变化。研究方案与原型正在迭代，尚不将预期效果表述为实验发现。"
          ]
        },
        {
          "id": "outcomes",
          "title": "研究发现与成果",
          "paragraphs": [
            "已形成网页聊天原型、个人图库、基于情境的表情学习机制与研究管理流程。现阶段的设计重点是保持表达连贯、允许纠正误解，并记录实际交互依据。"
          ]
        },
        {
          "id": "scope",
          "title": "设计含义与研究范围",
          "paragraphs": [
            "这一原型为情感与信任研究提供持续交流的载体，先考察文字和表情中的个人语义。语音语调与轮次节奏的扩展需要另外定义操纵条件与评价指标。",
            "对个人含义的自动理解仍属于推断，不能等同于用户确认。持续陪伴的信任变化与真实关系效果需要通过纵向研究验证。"
          ]
        }
      ],
      "links": [
        {
          "label": "小屿交互原型",
          "url": "https://www.hustdesign.top/xiaoyu/"
        }
      ],
      "related": [
        "triadic-embodied-feedback",
        "project-02",
        "project-01"
      ],
      "direction": "个性化人智交互用户体验与信任研究",
      "cover": "assets/research-center/ai/xiaoyu-detail.webp",
      "coverAlt": "小屿：情感表达与持续陪伴交互 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-embodied-trust",
      "detailCover": "assets/research-center/ai/human-xiaoyu.webp",
      "detailCoverAlt": "小屿：情感表达与持续陪伴交互 · AI 生成的主题场景",
      "demos": [
        {
          "title": "小屿 · 个性化陪伴网页原型",
          "url": "https://www.hustdesign.top/xiaoyu/",
          "image": "assets/research-center/evidence/xiaoyu-webpage.webp",
          "description": "实际网页首页。支持文字、个人表情与持续对话；聊天体验需研究者分配的账号。"
        }
      ],
      "topicId": "voice-emotion-trust",
      "topicTitle": "人智语音交互中的情感与信任研究"
    },
    {
      "id": "project-05",
      "code": "PROJECT 05",
      "title": "车载语音的长短，如何影响驾驶表现",
      "en": "Can being spatially gifted make you tired? Effects of in-vehicle voice assistant speech length and drivers' spatial ability",
      "kind": "research",
      "kindLabel": "驾驶模拟实验",
      "status": "published",
      "statusText": "已发表",
      "period": "2026",
      "summary": "通过57人驾驶模拟实验，比较短、中、长语音指令在五类道路任务中的效果，分析空间能力、主观负荷与任务完成时间之间的关系。",
      "lead": "语音提示需要在信息充分与注意负担之间取得平衡。本研究把指令长度、驾驶情境和用户空间能力共同纳入评估，为智能座舱的信息表达提供实证依据。",
      "cover": "assets/research-center/ai/human-mobility.webp",
      "coverAlt": "车载语音的长短，如何影响驾驶表现 · AI 概念视觉",
      "meta": [
        {
          "value": "57",
          "label": "参与者"
        },
        {
          "value": "5",
          "label": "驾驶任务"
        },
        {
          "value": "3",
          "label": "语音长度条件"
        }
      ],
      "tags": [
        "Intelligent Cockpit",
        "Voice Interaction",
        "Spatial Ability",
        "Human Factors"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "车载语音能够减少触屏操作，但持续的听觉信息也会占用驾驶所需的注意与工作记忆。不同道路情境和不同驾驶者，可能需要不同的信息详细程度。"
          ],
          "points": [
            "语音指令长度对不同驾驶任务的完成时间与主观负荷有何影响？",
            "空间能力不同的驾驶者，是否对相同长度的语音作出不同反应？",
            "感知负荷能否解释语音长度与驾驶表现之间的统计联系？"
          ]
        },
        {
          "id": "methods",
          "title": "我们做了什么研究",
          "paragraphs": [
            "使用2×3组间设计：依据SBSOD量表测量的空间能力形成相对高、低两组，并在组内分配短、中、长语音条件。空间能力作为测得的个体差异纳入分析。",
            "57名参与者在驾驶模拟平台中完成直行、进出隧道、路口、人行横道和左右转弯五类任务。记录任务完成时间，并用Raw NASA-TLX评估主观负荷。",
            "三种语音脚本的平均时长约为1.57秒、3.40秒和7.30秒；保持普通话女声等呈现条件一致，比较不同信息长度。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/project-05-figure-1.webp",
              "caption": "驾驶模拟实验的五类道路任务。",
              "kind": "论文原图"
            },
            {
              "src": "assets/research-center/evidence/project-05-figure-2.webp",
              "caption": "从空间能力测量到驾驶表现与负荷评估的实验流程。",
              "kind": "论文原图"
            }
          ]
        },
        {
          "id": "findings",
          "title": "研究发现与数据",
          "paragraphs": [],
          "points": [
            "效果与道路任务相关：路口任务中，短语音条件的完成时间低于长语音条件；整体任务时间和主观负荷也显示了语音长度差异。",
            "空间能力差异影响提示适配：人行横道任务出现空间能力与语音长度的交互：低空间能力组在短语音条件下完成最快，高空间能力组在中等长度条件下完成最快。",
            "负荷提供解释线索：分析支持感知负荷连接语音长度与任务时间的统计间接路径；空间能力对该间接路径的调节证据尚不确定。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/project-05-figure-3.webp",
              "caption": "人行横道任务中，语音长度与空间能力的交互模式；纵轴为任务完成时间（秒）。",
              "kind": "论文原图"
            }
          ]
        },
        {
          "id": "implications",
          "title": "设计含义",
          "paragraphs": [
            "根据道路任务和信息需求调整提示详细程度，避免在复杂决策节点加入不必要的冗长语句。",
            "把用户差异纳入语音评估，同时验证任务时间、主观负荷和更直接的驾驶安全指标。"
          ]
        },
        {
          "id": "scope",
          "title": "结论与研究范围",
          "paragraphs": [
            "样本来自57名大学生，研究使用模拟驾驶且以完成时间为主要表现指标。研究对真实道路安全的适用性仍需进一步检验，空间能力对间接路径的调节证据尚不确定。"
          ]
        }
      ],
      "links": [
        {
          "label": "Transportation Research Part F: Traffic Psychology and Behaviour · 正式论文",
          "url": "https://doi.org/10.1016/j.trf.2026.103642"
        }
      ],
      "related": [
        "peephole-wayfinding"
      ],
      "direction": "智能座舱与空间认知",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-mobility",
      "detailCover": "assets/research-center/ai/mobility-detail.webp",
      "detailCoverAlt": "车载语音的长短，如何影响驾驶表现 · AI 生成的主题场景"
    },
    {
      "id": "privacy-in-motion",
      "code": "PROJECT 06",
      "title": "智能家居的隐私协商与家庭协同",
      "en": "Smart Home Privacy, Family Coordination & Design Translation",
      "kind": "research",
      "kindLabel": "系列研究与设计转化",
      "status": "ongoing",
      "statusText": "系列成果",
      "period": "2025–2026",
      "summary": "汇集家庭设备协作、家庭隐私、动态隐私管理三项研究，并连接 SafeSync 设计原型，呈现从使用情境到交互策略的研究脉络。",
      "lead": "家庭中的智能系统同时连接人、设备和数据。我们从家庭成员如何共同使用设备出发，分析隐私如何被理解和协商，再把研究关注的问题转化为可体验的隐私控制设计。",
      "cover": "assets/research-center/ai/human-home.webp",
      "symbol": "DESIGN",
      "color": "#cfcbff",
      "meta": [
        {
          "label": "项目构成",
          "value": "3 项研究 + 1 项设计原型"
        },
        {
          "label": "研究方法",
          "value": "多案例访谈 · 14天日记研究"
        },
        {
          "label": "工作跨度",
          "value": "2025–2026"
        }
      ],
      "tags": [
        "研究｜AIoT 与隐私",
        "Privacy in Motion: Attitudes and Strategies for Navigating the Smart Home Privacy Paradox",
        "智能家居中的动态隐私协商"
      ],
      "sections": [
        {
          "id": "stage-01",
          "title": "研究背景与方法：家庭如何协同使用设备",
          "paragraphs": [
            "家庭中的智能系统同时服务多位成员，学习、信息同步和任务分配共同影响体验。研究将家庭而非孤立个体作为分析单元。",
            "通过11个家庭、20次深度访谈开展多案例研究，结合分布式认知与主题分析考察家庭共同使用设备的过程。",
            "归纳体验式学习不足、信息同步低效和协作机制不友好三类主要障碍。",
            "提出差异化学习支持、信息流改善与家庭协作机制等设计机会。",
            "推动智能家居从单用户控制界面转向能支持多成员协商和共同使用的系统。"
          ],
          "takeaway": "发现学习支持、信息同步与协作机制中的三类障碍。",
          "links": [
            {
              "label": "Springer 正式论文 · pp.364–382",
              "url": "https://link.springer.com/chapter/10.1007/978-3-032-12392-3_24"
            }
          ]
        },
        {
          "id": "stage-02",
          "title": "研究发现：共同生活中的隐私边界",
          "paragraphs": [
            "家庭成员对设备、数据与权限的理解不同，个人层面的隐私设置难以覆盖共同生活中的协作和冲突。",
            "在中国家庭情境中，通过11户家庭、20次深度访谈，分析数据与权限理解差异如何影响家庭互动。",
            "归纳数据主权、用户心理、系统配置与家庭协作四个隐私关注维度。",
            "提出可选择的数据存储方式、可信互动机制和智能家居维护服务等设计方向。",
            "把家庭关系与协作边界纳入智能家居隐私设计，为共享空间中的权限和服务配置提供依据。"
          ],
          "takeaway": "归纳数据主权、用户心理、系统配置和家庭协作四个维度。"
        },
        {
          "id": "stage-03",
          "title": "研究发现：隐私策略如何随情境变化",
          "paragraphs": [
            "智能家居用户常在便利与隐私保护之间反复权衡。研究关注这种权衡如何随家庭情境与设备使用过程变化，而不把隐私态度理解为固定偏好。",
            "采用 Contextmapping 情境映射、14天日记研究和回顾式半结构访谈，从隐私悖论与分布式认知视角分析日常管理过程。",
            "建立以情境、应对策略与隐私结果相联系的过程框架。",
            "揭示日常隐私管理具有动态性与情境依赖，用户会通过不同策略回应便利和保护之间的张力。",
            "为智能家居提供随情境调整的数据控制、清晰反馈和长期隐私管理支持的设计依据。"
          ],
          "takeaway": "隐私管理随情境与使用过程变化，需要持续的反馈和控制支持。",
          "links": [
            {
              "label": "正式发表 · IJHCS 210, 103774",
              "url": "https://doi.org/10.1016/j.ijhcs.2026.103774"
            }
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/privacy-in-motion-1.webp",
              "caption": "14天日记与回顾访谈的研究流程。",
              "kind": "论文原图"
            },
            {
              "src": "assets/research-center/evidence/privacy-in-motion-2.webp",
              "caption": "情境、应对策略与隐私结果的过程框架。",
              "kind": "论文原图"
            }
          ]
        },
        {
          "id": "stage-04",
          "title": "我们设计了什么：SafeSync 隐私交互原型",
          "paragraphs": [
            "面对越来越复杂的设备联动和数据流，用户往往难以判断哪些信息正在被收集、传递和保留。SafeSync 探索面向 2030 年的日常隐私管理体验。",
            "设计过程包括智能家居用户研究、隐私过程模型、体验式未来情境、Figma界面原型，以及用于展览反馈的Arduino互动房屋模型。",
            "设计设备连接状态、指令历史、隐私提示与数据删除等交互模块。",
            "将 AI 语音助手与可解释的隐私控制结合，并以实体模型展示设备组合与隐私风险反馈。",
            "毕业设计原型面向 2030 年的使用情境，呈现隐私管理的设计探索。"
          ],
          "takeaway": "形成设备连接、指令历史、隐私提示与数据清理等模块，面向2030年情境展开探索。",
          "figures": [
            {
              "src": "assets/research-center/evidence/safesync-1.webp",
              "caption": "SafeSync 的 AI 隐私助手概念界面。",
              "kind": "设计原型"
            },
            {
              "src": "assets/research-center/evidence/safesync-2.webp",
              "caption": "设备连接状态与指令历史。",
              "kind": "设计原型"
            },
            {
              "src": "assets/research-center/evidence/safesync-3.webp",
              "caption": "隐私提示与数据清理。",
              "kind": "设计原型"
            }
          ]
        }
      ],
      "links": [
        {
          "label": "正式发表 · IJHCS 210, 103774",
          "url": "https://doi.org/10.1016/j.ijhcs.2026.103774"
        },
        {
          "label": "Springer 正式论文 · pp.364–382",
          "url": "https://link.springer.com/chapter/10.1007/978-3-032-12392-3_24"
        }
      ],
      "related": [
        "family-cai-education",
        "smartaste",
        "triadic-embodied-feedback"
      ],
      "direction": "智能家居隐私与家庭互动",
      "aliases": [
        "family-smart-home",
        "family-privacy",
        "safesync"
      ],
      "coverAlt": "智能家居的隐私协商与家庭协同 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-home",
      "detailCover": "assets/research-center/ai/home-detail.webp",
      "detailCoverAlt": "智能家居的隐私协商与家庭协同 · AI 生成的主题场景"
    },
    {
      "id": "ai-co-speculation",
      "code": "PROJECT 07",
      "title": "AI 与思辨设计的协作摩擦",
      "en": "Speculative Design Meets AI: Exploring Creative Dynamics Through Co-speculative Workshops",
      "kind": "research",
      "kindLabel": "研究｜人机共创与设计未来",
      "status": "published",
      "statusText": "已发表",
      "period": "2026",
      "summary": "识别概念意图与视觉实现脱节、低效交互带来的认知自主性削弱，以及生成不稳定导致的设计推进受阻。 为 AI 参与创意设计流程提供依据，支持设计师在共创中保留批判判断与过程控制。",
      "lead": "生成式 AI 能帮助设计师构建未来情境，但概念表达、交互效率与输出稳定性之间存在摩擦。",
      "cover": "assets/research-center/ai/futures-detail.webp",
      "symbol": "CO / AI",
      "color": "#edd7ba",
      "meta": [
        {
          "label": "年份",
          "value": "2026"
        },
        {
          "label": "领域",
          "value": "人机共创与设计未来"
        },
        {
          "label": "状态",
          "value": "已发表 · HCII 2025 / LNCS 16346"
        }
      ],
      "tags": [
        "研究｜人机共创与设计未来",
        "Speculative Design Meets AI: Exploring Creative Dynamics Through Co-speculative Workshops",
        "AI 与思辨设计的协作摩擦"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "生成式 AI 能帮助设计师构建未来情境，但概念表达、交互效率与输出稳定性之间存在摩擦。"
          ]
        },
        {
          "id": "process",
          "title": "研究与设计方法",
          "points": [
            "系列共同思辨工作坊",
            "开放式问卷",
            "设计过程中的人机协作分析"
          ],
          "figures": [
            {
              "src": "assets/research-center/ai/futures-detail.webp",
              "caption": "人机共创的 AI 概念视觉；工作坊发现见下文。",
              "kind": "AI 概念视觉"
            }
          ]
        },
        {
          "id": "outcomes",
          "title": "研究发现与成果",
          "points": [
            "识别概念意图与视觉实现脱节、低效交互带来的认知自主性削弱，以及生成不稳定导致的设计推进受阻。",
            "提出记录协作摩擦、明确设计师主导角色和增加可解释反馈等改进方向。"
          ],
          "matrix": {
            "headers": [
              "观察到的协作摩擦",
              "设计含义"
            ],
            "rows": [
              [
                "概念意图与视觉实现脱节",
                "保留设计意图与修改记录"
              ],
              [
                "交互低效影响认知自主性",
                "让设计师持续参与判断与决策"
              ],
              [
                "生成输出不稳定",
                "通过反馈与版本比较支持迭代"
              ]
            ]
          }
        },
        {
          "id": "contribution",
          "title": "设计含义与结论",
          "paragraphs": [
            "为 AI 参与创意设计流程提供依据，支持设计师在共创中保留批判判断与过程控制。"
          ]
        }
      ],
      "links": [
        {
          "label": "Springer 正式论文 · pp.91–102",
          "url": "https://link.springer.com/chapter/10.1007/978-3-032-13187-4_7"
        }
      ],
      "related": [
        "bizika",
        "wudu-service",
        "neurobridge"
      ],
      "direction": "人机共创与设计未来学",
      "coverAlt": "AI 与思辨设计的协作摩擦 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-futures",
      "detailCover": "assets/research-center/ai/human-futures.webp",
      "detailCoverAlt": "AI 与思辨设计的协作摩擦 · AI 生成的主题场景"
    },
    {
      "id": "adhd-inclusive",
      "code": "PROJECT 08",
      "title": "面向 ADHD 成人的认知支持设计",
      "en": "Application Study of ADHD Design Based on Kano-QFD-Z-Pareto Methods",
      "kind": "research",
      "kindLabel": "研究与设计｜包容性设计",
      "status": "published",
      "statusText": "已发表",
      "period": "2025",
      "summary": "整理 17 项核心用户需求，筛选 7 项优先设计特征。 展示如何把真实功能需求系统转化为设计优先级，减少以缺陷补偿为唯一目标的设计取向。",
      "lead": "现有辅助设计较多关注矫正儿童行为，研究将视角转向 ADHD 成人的日常功能、创意记录和社会参与需求。",
      "cover": "assets/research-center/ai/inclusive-detail.webp",
      "symbol": "DESIGN",
      "color": "#d6d5e8",
      "meta": [
        {
          "label": "年份",
          "value": "2025"
        },
        {
          "label": "领域",
          "value": "包容性设计"
        },
        {
          "label": "状态",
          "value": "已发表 · IASDR 2025"
        }
      ],
      "tags": [
        "研究与设计｜包容性设计",
        "Application Study of ADHD Design Based on Kano-QFD-Z-Pareto Methods",
        "面向 ADHD 成人的认知支持设计"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "现有辅助设计较多关注矫正儿童行为，研究将视角转向 ADHD 成人的日常功能、创意记录和社会参与需求。"
          ]
        },
        {
          "id": "process",
          "title": "研究与设计方法",
          "points": [
            "神经多样性视角",
            "Kano 需求分类与 QFD 设计转化",
            "Z 分数标准化及 Pareto 优先级分析"
          ]
        },
        {
          "id": "outcomes",
          "title": "研究发现与成果",
          "points": [
            "整理 17 项核心用户需求，筛选 7 项优先设计特征。",
            "形成触发语音转写、旋转触觉交互与 AI 任务整理相结合的戒指型设备和应用界面概念。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/adhd-inclusive-1.webp",
              "caption": "戒指型可穿戴设备设计概念",
              "kind": "研究图示"
            },
            {
              "src": "assets/research-center/evidence/adhd-inclusive-2.webp",
              "caption": "日程与创意记录界面",
              "kind": "研究图示"
            },
            {
              "src": "assets/research-center/evidence/adhd-inclusive-3.webp",
              "caption": "设备与应用的设计示例",
              "kind": "研究图示"
            }
          ]
        },
        {
          "id": "contribution",
          "title": "设计含义与结论",
          "paragraphs": [
            "展示如何把真实功能需求系统转化为设计优先级，减少以缺陷补偿为唯一目标的设计取向。"
          ]
        },
        {
          "id": "stage",
          "title": "当前进展与研究范围",
          "paragraphs": [
            "该成果包括论文与设计概念，尚未作为临床干预进行验证。"
          ]
        }
      ],
      "links": [
        {
          "label": "正式会议论文 · DOI",
          "url": "https://doi.org/10.21606/iasdr.2025.210"
        },
        {
          "label": "DRS 官方论文记录",
          "url": "https://dl.designresearchsociety.org/iasdr/iasdr2025/fullpapers/58/"
        }
      ],
      "related": [
        "ar-science-books",
        "family-cai-education",
        "smartaste"
      ],
      "direction": "包容性服务与学习体验",
      "coverAlt": "面向 ADHD 成人的认知支持设计 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-inclusive",
      "detailCover": "assets/research-center/ai/human-inclusive.webp",
      "detailCoverAlt": "面向 ADHD 成人的认知支持设计 · AI 生成的主题场景"
    },
    {
      "id": "ar-science-books",
      "code": "PROJECT 09",
      "title": "儿童 AR 科普绘本的需求与设计优先级",
      "en": "From User Requirements to Design Priorities for Children’s AR Popular Science Picture Books",
      "kind": "research",
      "kindLabel": "研究｜教育与空间交互",
      "status": "manuscript",
      "statusText": "研究稿",
      "period": "2026",
      "summary": "将知识理解、语音叙述、模型交互与表达形式等用户需求映射为设计要素。 为 AR 科普绘本提供可追溯的需求到设计转化路径，帮助设计者平衡知识表达和互动体验。",
      "lead": "AR 能把抽象科学知识转化为可操作的空间内容，但如何从儿童真实需求系统推导设计策略仍需明确。",
      "cover": "assets/research-center/ai/human-ar-learning.webp",
      "symbol": "DESIGN",
      "color": "#cfcbff",
      "meta": [
        {
          "label": "年份",
          "value": "2026"
        },
        {
          "label": "领域",
          "value": "教育与空间交互"
        },
        {
          "label": "状态",
          "value": "研究稿件 / 返修阶段"
        }
      ],
      "tags": [
        "研究｜教育与空间交互",
        "From User Requirements to Design Priorities for Children’s AR Popular Science Picture Books",
        "儿童 AR 科普绘本的需求与设计优先级"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "AR 能把抽象科学知识转化为可操作的空间内容，但如何从儿童真实需求系统推导设计策略仍需明确。"
          ]
        },
        {
          "id": "process",
          "title": "研究与设计方法",
          "points": [
            "具身社会临场感理论",
            "用户需求层级化",
            "AHP 权重分析与 QFD 质量屋"
          ]
        },
        {
          "id": "outcomes",
          "title": "研究发现与成果",
          "points": [
            "将知识理解、语音叙述、模型交互与表达形式等用户需求映射为设计要素。",
            "形成儿童友好、科学准确、图文协调、趣味性与动态交互五个策略维度。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/ar-science-books-1.webp",
              "caption": "AHP–QFD 研究与设计转化流程",
              "kind": "研究图示"
            },
            {
              "src": "assets/research-center/evidence/ar-science-books-2.webp",
              "caption": "用户需求层级",
              "kind": "研究图示"
            },
            {
              "src": "assets/research-center/evidence/ar-science-books-3.webp",
              "caption": "具身社会临场感与设计要素关系",
              "kind": "研究图示"
            }
          ]
        },
        {
          "id": "contribution",
          "title": "设计含义与结论",
          "paragraphs": [
            "为 AR 科普绘本提供可追溯的需求到设计转化路径，帮助设计者平衡知识表达和互动体验。"
          ]
        },
        {
          "id": "stage",
          "title": "当前进展与研究范围",
          "paragraphs": [
            "目前以研究稿和设计策略成果呈现。"
          ]
        }
      ],
      "links": [],
      "related": [
        "adhd-inclusive",
        "family-cai-education",
        "smartaste"
      ],
      "direction": "包容性服务与学习体验",
      "coverAlt": "儿童 AR 科普绘本的需求与设计优先级 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-inclusive",
      "detailCover": "assets/research-center/ai/ar-learning-detail.webp",
      "detailCoverAlt": "儿童 AR 科普绘本的需求与设计优先级 · AI 生成的主题场景"
    },
    {
      "id": "peephole-wayfinding",
      "code": "PROJECT 10",
      "title": "小屏移动地图的透明度与寻路认知",
      "en": "Enhancing Mobile Wayfinding with a Peephole Interface: The Effect of the Number of Objects and Transparency of Overview Map Design on User Performance and Workload",
      "kind": "research",
      "kindLabel": "研究｜空间认知与界面",
      "status": "manuscript",
      "statusText": "研究稿",
      "period": "2025",
      "summary": "结果表明地图表现效果随任务类型而变化，透明度、对象数量与工作负荷需要共同考虑。 为空间信息有限的小屏界面提供任务导向设计依据，避免用单一透明度方案覆盖所有寻路目标。",
      "lead": "移动屏幕难以同时呈现完整地图和局部细节。研究考察概览地图的透明度与对象数量如何影响动态窥孔界面的寻路表现。",
      "cover": "assets/research-center/ai/wayfinding-detail.webp",
      "symbol": "MAP",
      "color": "#d6e96a",
      "meta": [
        {
          "label": "年份",
          "value": "2025"
        },
        {
          "label": "领域",
          "value": "空间认知与界面"
        },
        {
          "label": "状态",
          "value": "研究稿件 / 投稿材料"
        }
      ],
      "tags": [
        "研究｜空间认知与界面",
        "Enhancing Mobile Wayfinding with a Peephole Interface: The Effect of the Number of Objects and Transparency of Overview Map Design on User Performance and Workload",
        "小屏移动地图的透明度与寻路认知"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "移动屏幕难以同时呈现完整地图和局部细节。研究考察概览地图的透明度与对象数量如何影响动态窥孔界面的寻路表现。"
          ]
        },
        {
          "id": "process",
          "title": "研究与设计方法",
          "points": [
            "66 名成人参与者",
            "2 × 3 组间实验",
            "0%、100% 透明度与 0、14、28 个对象",
            "四项寻路任务与 NASA-TLX"
          ]
        },
        {
          "id": "outcomes",
          "title": "研究发现与成果",
          "points": [
            "结果表明地图表现效果随任务类型而变化，透明度、对象数量与工作负荷需要共同考虑。",
            "14 个对象的透明概览条件在部分任务中体现出效率与负荷优势；不透明概览在距离估计任务中具有优势。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/peephole-wayfinding-1.webp",
              "caption": "六种实验条件：背景透明度与环境对象数量的组合",
              "kind": "研究图示"
            },
            {
              "src": "assets/research-center/evidence/peephole-wayfinding-2.webp",
              "caption": "不同实验条件下的距离与方向估计误差",
              "kind": "研究图示"
            }
          ]
        },
        {
          "id": "contribution",
          "title": "设计含义与结论",
          "paragraphs": [
            "为空间信息有限的小屏界面提供任务导向设计依据，避免用单一透明度方案覆盖所有寻路目标。"
          ]
        },
        {
          "id": "stage",
          "title": "当前进展与研究范围",
          "paragraphs": [
            "目前以研究稿呈现；实验结果对应所测试的任务与界面条件。"
          ]
        }
      ],
      "links": [],
      "related": [
        "project-05"
      ],
      "direction": "智能座舱与空间认知",
      "coverAlt": "小屏移动地图的透明度与寻路认知 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-mobility",
      "detailCover": "assets/research-center/ai/wayfinding.webp",
      "detailCoverAlt": "小屏移动地图的透明度与寻路认知 · AI 生成的主题场景"
    },
    {
      "id": "family-cai-education",
      "code": "PROJECT 11",
      "title": "家庭教育中的对话式 AI 互动障碍",
      "en": "Exploring Barriers in Family Interactions with Conversation AI Tools in K-12 Education: An Ecological Systems Perspective",
      "kind": "research",
      "kindLabel": "研究｜教育 AI 与家庭系统",
      "status": "accepted",
      "statusText": "会议接收",
      "period": "2026",
      "summary": "归纳个性化学习路径受阻、家校协作薄弱、AI 与家庭生态兼容不足及社会资源差异四类问题。 把教育 AI 的设计对象从单一学习界面扩大到家庭、学校与社会之间的协作关系。",
      "lead": "教育 AI 进入家庭后，其使用体验不仅取决于孩子与工具，也受家校协作、教育制度和社会文化环境影响。",
      "cover": "assets/research-center/ai/human-family-ai.webp",
      "symbol": "DESIGN",
      "color": "#c3d8da",
      "meta": [
        {
          "label": "年份",
          "value": "2026"
        },
        {
          "label": "领域",
          "value": "教育 AI 与家庭系统"
        },
        {
          "label": "状态",
          "value": "会议接收 · ICHMI 2026"
        }
      ],
      "tags": [
        "研究｜教育 AI 与家庭系统",
        "Exploring Barriers in Family Interactions with Conversation AI Tools in K-12 Education: An Ecological Systems Perspective",
        "家庭教育中的对话式 AI 互动障碍"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "教育 AI 进入家庭后，其使用体验不仅取决于孩子与工具，也受家校协作、教育制度和社会文化环境影响。"
          ]
        },
        {
          "id": "process",
          "title": "研究与设计方法",
          "points": [
            "生态系统理论视角",
            "13 个家庭中的 27 次访谈",
            "主题分析"
          ]
        },
        {
          "id": "outcomes",
          "title": "研究发现与成果",
          "points": [
            "归纳个性化学习路径受阻、家校协作薄弱、AI 与家庭生态兼容不足及社会资源差异四类问题。",
            "提出跨平台互动、多样化教学设计以及教师参与 AI 系统开发的方向。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/family-cai-education-1.webp",
              "caption": "家庭教育 AI 的生态系统层级",
              "kind": "研究图示"
            }
          ]
        },
        {
          "id": "contribution",
          "title": "设计含义与结论",
          "paragraphs": [
            "把教育 AI 的设计对象从单一学习界面扩大到家庭、学校与社会之间的协作关系。"
          ]
        },
        {
          "id": "stage",
          "title": "当前进展与研究范围",
          "paragraphs": [
            "论文已获 ICHMI 2026 接收。"
          ]
        }
      ],
      "links": [],
      "related": [
        "adhd-inclusive",
        "ar-science-books",
        "smartaste"
      ],
      "direction": "包容性服务与学习体验",
      "coverAlt": "家庭教育中的对话式 AI 互动障碍 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-inclusive",
      "detailCover": "assets/research-center/ai/family-ai-detail.webp",
      "detailCoverAlt": "家庭教育中的对话式 AI 互动障碍 · AI 生成的主题场景"
    },
    {
      "id": "smartaste",
      "code": "PROJECT 12",
      "title": "Smataste 个性化职场餐饮服务",
      "en": "Smataste — Redefining Workplace Food Experiences",
      "kind": "design",
      "kindLabel": "设计｜AI 服务与可持续体验",
      "status": "design",
      "statusText": "设计原型",
      "period": "2025",
      "summary": "构建个人饮食偏好、AI 点餐推荐与用餐反馈的用户端流程。 探索 AI 如何在个性化体验、运营协同与可持续餐饮之间建立联系。",
      "lead": "年轻职场人对健康、口味、效率和社交体验的需求并不一致，传统食堂也面临供需匹配和食物浪费问题。",
      "cover": "assets/research-center/ai/smartaste-detail.webp",
      "symbol": "DESIGN",
      "color": "#d6d5e8",
      "meta": [
        {
          "label": "年份",
          "value": "2025"
        },
        {
          "label": "领域",
          "value": "AI 服务与可持续体验"
        },
        {
          "label": "状态",
          "value": "团队设计项目 / 概念原型"
        }
      ],
      "tags": [
        "设计｜AI 服务与可持续体验",
        "Smataste — Redefining Workplace Food Experiences",
        "Smataste 个性化职场餐饮服务"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "年轻职场人对健康、口味、效率和社交体验的需求并不一致，传统食堂也面临供需匹配和食物浪费问题。"
          ]
        },
        {
          "id": "process",
          "title": "研究与设计方法",
          "points": [
            "职场餐饮服务研究",
            "用户与厨房供应链双侧服务设计",
            "AI 对话式点餐与饮食偏好建模",
            "界面原型与服务流程设计"
          ]
        },
        {
          "id": "outcomes",
          "title": "研究发现与成果",
          "points": [
            "构建个人饮食偏好、AI 点餐推荐与用餐反馈的用户端流程。",
            "提出连接消费者、厨房与采购端的需求洞察与库存预测服务概念。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/smartaste-1.webp",
              "caption": "饮食偏好与健康目标设定界面",
              "kind": "设计原型"
            }
          ]
        },
        {
          "id": "contribution",
          "title": "设计含义与结论",
          "paragraphs": [
            "探索 AI 如何在个性化体验、运营协同与可持续餐饮之间建立联系。"
          ]
        },
        {
          "id": "stage",
          "title": "当前进展与研究范围",
          "paragraphs": [
            "项目呈现服务概念与交互原型，运营改善与满意度目标仍需进一步验证。"
          ]
        }
      ],
      "links": [],
      "related": [
        "adhd-inclusive",
        "ar-science-books",
        "family-cai-education"
      ],
      "direction": "包容性服务与学习体验",
      "coverAlt": "Smataste 个性化职场餐饮服务 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-inclusive",
      "detailCover": "assets/research-center/ai/smartaste.webp",
      "detailCoverAlt": "Smataste 个性化职场餐饮服务 · AI 生成的主题场景"
    },
    {
      "id": "bizika",
      "code": "PROJECT 13",
      "title": "Bìzīkǎ 西兰卡普艺术音箱",
      "en": "Bìzīkǎ — Xilankapu-inspired Sculptural Speaker",
      "kind": "design",
      "kindLabel": "设计｜文化与日常产品",
      "status": "design",
      "statusText": "概念设计",
      "period": "2026",
      "summary": "完成具有 S 形扭转与镂空结构的音箱概念，将金属与织物组织为同一产品语言。 探索非遗文化在高频使用的生活产品中的当代表达，而不只停留在图案装饰层面。",
      "lead": "探索让传统织锦从展示性装饰进入日常使用场景，将西兰卡普的纹样、织造逻辑与声音媒介结合。",
      "cover": "assets/research-center/ai/bizika-detail.webp",
      "symbol": "DESIGN",
      "color": "#d6e96a",
      "meta": [
        {
          "label": "年份",
          "value": "2026"
        },
        {
          "label": "领域",
          "value": "文化与日常产品"
        },
        {
          "label": "状态",
          "value": "课程设计 / 概念方案"
        }
      ],
      "tags": [
        "设计｜文化与日常产品",
        "Bìzīkǎ — Xilankapu-inspired Sculptural Speaker",
        "Bìzīkǎ 西兰卡普艺术音箱"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "探索让传统织锦从展示性装饰进入日常使用场景，将西兰卡普的纹样、织造逻辑与声音媒介结合。"
          ]
        },
        {
          "id": "process",
          "title": "研究与设计方法",
          "points": [
            "文化意象与纹样研究",
            "产品造型推演",
            "CMF 与材质对比",
            "用户画像及使用场景设计"
          ]
        },
        {
          "id": "outcomes",
          "title": "研究发现与成果",
          "points": [
            "完成具有 S 形扭转与镂空结构的音箱概念，将金属与织物组织为同一产品语言。",
            "形成草图、方案推演、场景效果、使用图及爆炸图。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/bizika-1.webp",
              "caption": "艺术音箱居家场景效果",
              "kind": "设计原型"
            },
            {
              "src": "assets/research-center/evidence/bizika-2.webp",
              "caption": "文化意象与产品形态推演",
              "kind": "设计原型"
            },
            {
              "src": "assets/research-center/evidence/bizika-3.webp",
              "caption": "结构爆炸图概念",
              "kind": "设计原型"
            }
          ]
        },
        {
          "id": "contribution",
          "title": "设计含义与结论",
          "paragraphs": [
            "探索非遗文化在高频使用的生活产品中的当代表达，而不只停留在图案装饰层面。"
          ]
        },
        {
          "id": "stage",
          "title": "当前进展与研究范围",
          "paragraphs": [
            "项目为文化产品概念设计，呈现造型、材质与结构探索。"
          ]
        }
      ],
      "links": [],
      "related": [
        "ai-co-speculation",
        "wudu-service",
        "neurobridge"
      ],
      "direction": "人机共创与设计未来学",
      "coverAlt": "Bìzīkǎ 西兰卡普艺术音箱 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-futures",
      "detailCover": "assets/research-center/ai/bizika.webp",
      "detailCoverAlt": "Bìzīkǎ 西兰卡普艺术音箱 · AI 生成的主题场景"
    },
    {
      "id": "wudu-service",
      "code": "PROJECT 14",
      "title": "嘉鱼呜嘟的严肃游戏化传习服务",
      "en": "Social Presence-driven Serious Game Service Design for Heritage Instruments",
      "kind": "research",
      "kindLabel": "研究与设计｜文化遗产与 AI 服务",
      "status": "design",
      "statusText": "概念研究",
      "period": "2026",
      "summary": "构建身份真实、回应明确与任务协作三项关系原则。 将数字互动与传承人知识、同伴协作和线下学习连接，强调文化内容的来源与持续校准。",
      "lead": "非遗乐器的数字体验常止于短时观看，难以连接制作、演奏和持续传习关系。",
      "cover": "assets/research-center/ai/wudu-detail.webp",
      "symbol": "DESIGN",
      "color": "#c3d8da",
      "meta": [
        {
          "label": "年份",
          "value": "2026"
        },
        {
          "label": "领域",
          "value": "文化遗产与 AI 服务"
        },
        {
          "label": "状态",
          "value": "理论框架与概念研究"
        }
      ],
      "tags": [
        "研究与设计｜文化遗产与 AI 服务",
        "Social Presence-driven Serious Game Service Design for Heritage Instruments",
        "嘉鱼呜嘟的严肃游戏化传习服务"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "非遗乐器的数字体验常止于短时观看，难以连接制作、演奏和持续传习关系。"
          ]
        },
        {
          "id": "process",
          "title": "研究与设计方法",
          "points": [
            "社会临场感理论",
            "九个数字文化遗产游戏案例比较",
            "制作、吹奏、曲目和社交触点分析",
            "知识资产、Agent 服务与传承人校验机制设计"
          ]
        },
        {
          "id": "outcomes",
          "title": "研究发现与成果",
          "points": [
            "构建身份真实、回应明确与任务协作三项关系原则。",
            "提出由互动范式、AI 工程层和真实传习服务构成的设计框架。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/wudu-service-1.webp",
              "caption": "研究与设计框架构建路径",
              "kind": "研究图示"
            },
            {
              "src": "assets/research-center/evidence/wudu-service-2.webp",
              "caption": "社会临场感、AI 工程层与服务触点框架",
              "kind": "研究图示"
            }
          ]
        },
        {
          "id": "contribution",
          "title": "设计含义与结论",
          "paragraphs": [
            "将数字互动与传承人知识、同伴协作和线下学习连接，强调文化内容的来源与持续校准。"
          ]
        },
        {
          "id": "stage",
          "title": "当前进展与研究范围",
          "paragraphs": [
            "当前产出为理论与设计框架，后续需要通过访谈、原型体验和使用记录检验。"
          ]
        }
      ],
      "links": [],
      "related": [
        "ai-co-speculation",
        "bizika",
        "neurobridge"
      ],
      "direction": "人机共创与设计未来学",
      "coverAlt": "嘉鱼呜嘟的严肃游戏化传习服务 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-futures",
      "detailCover": "assets/research-center/ai/wudu.webp",
      "detailCoverAlt": "嘉鱼呜嘟的严肃游戏化传习服务 · AI 生成的主题场景"
    },
    {
      "id": "soma",
      "code": "PROJECT 15",
      "title": "SOMA 软体机器人健康监测概念",
      "en": "SOMA — Design-led Robotics",
      "kind": "design",
      "kindLabel": "设计｜软体机器人与健康体验",
      "status": "design",
      "statusText": "设计原型",
      "period": "2025",
      "summary": "完成软体结构的初始模具、制作探索与概念展示。 把材料探索、制造过程与可穿戴体验结合，作为设计驱动机器人研究的实践案例。",
      "lead": "项目探索柔性材料和可穿戴形态在胸部健康监测情境中的体验可能性，关注舒适性与产品交互。",
      "cover": "assets/research-center/ai/soma.webp",
      "symbol": "DESIGN",
      "color": "#edd7ba",
      "meta": [
        {
          "label": "年份",
          "value": "2025"
        },
        {
          "label": "领域",
          "value": "软体机器人与健康体验"
        },
        {
          "label": "状态",
          "value": "团队设计实践 / 物理原型"
        }
      ],
      "tags": [
        "设计｜软体机器人与健康体验",
        "SOMA — Design-led Robotics",
        "SOMA 软体机器人健康监测概念"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "项目探索柔性材料和可穿戴形态在胸部健康监测情境中的体验可能性，关注舒适性与产品交互。"
          ]
        },
        {
          "id": "process",
          "title": "研究与设计方法",
          "points": [
            "软体机器人材料研究",
            "Eco-Flex 0030 材料实验",
            "Rhino 模具建模与 3D 打印",
            "原型制作与演示"
          ]
        },
        {
          "id": "outcomes",
          "title": "研究发现与成果",
          "points": [
            "完成软体结构的初始模具、制作探索与概念展示。",
            "形成设备概念、交互仪表盘和展示视频材料。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/soma-1.webp",
              "caption": "软体机器人概念与制作展示",
              "kind": "设计原型"
            }
          ]
        },
        {
          "id": "contribution",
          "title": "设计含义与结论",
          "paragraphs": [
            "把材料探索、制造过程与可穿戴体验结合，作为设计驱动机器人研究的实践案例。"
          ]
        },
        {
          "id": "stage",
          "title": "当前进展与研究范围",
          "paragraphs": [
            "本项目为课程原型与材料实验，尚未开展临床验证。"
          ]
        }
      ],
      "links": [],
      "related": [
        "adhd-inclusive",
        "ar-science-books",
        "family-cai-education"
      ],
      "direction": "包容性服务与学习体验",
      "coverAlt": "SOMA 软体机器人健康监测概念 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-inclusive",
      "detailCover": "assets/research-center/ai/inclusive-detail.webp",
      "detailCoverAlt": "SOMA 软体机器人健康监测概念 · AI 生成的主题场景"
    },
    {
      "id": "neurobridge",
      "code": "PROJECT 16",
      "title": "NeuroBridge 数字鸿沟的思辨设计",
      "en": "NeuroBridge — Digital Inclusion & Disability",
      "kind": "design",
      "kindLabel": "设计｜设计未来与社会议题",
      "status": "design",
      "statusText": "概念设计",
      "period": "2025",
      "summary": "完成知识输入型辅助设备概念与 NeuroBridge 未来服务品牌。 把“谁能跟上技术”转化为可见、可讨论的设计问题，促使公众反思被技术制造的新排斥。",
      "lead": "当社会工作与公共服务越来越依赖数字能力，无法跟上技术变化的人可能被进一步排除。项目构建一个需要购买知识以融入社会的未来情境。",
      "cover": "assets/research-center/ai/neurobridge-detail.webp",
      "symbol": "DESIGN",
      "color": "#d6d5e8",
      "meta": [
        {
          "label": "年份",
          "value": "2025"
        },
        {
          "label": "领域",
          "value": "设计未来与社会议题"
        },
        {
          "label": "状态",
          "value": "团队设计实践 / 思辨设计"
        }
      ],
      "tags": [
        "设计｜设计未来与社会议题",
        "NeuroBridge — Digital Inclusion & Disability",
        "NeuroBridge 数字鸿沟的思辨设计"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "当社会工作与公共服务越来越依赖数字能力，无法跟上技术变化的人可能被进一步排除。项目构建一个需要购买知识以融入社会的未来情境。"
          ]
        },
        {
          "id": "process",
          "title": "研究与设计方法",
          "points": [
            "数字鸿沟研究与情境分析",
            "思辨设计与未来情境构建",
            "品牌与服务系统设计",
            "可穿戴概念建模、3D 打印和短片"
          ]
        },
        {
          "id": "outcomes",
          "title": "研究发现与成果",
          "points": [
            "完成知识输入型辅助设备概念与 NeuroBridge 未来服务品牌。",
            "通过渲染、实体模型及叙事短片引发对技术依赖、能力边界与社会包容的讨论。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/neurobridge-1.webp",
              "caption": "NeuroBridge 概念设备结构",
              "kind": "设计原型"
            },
            {
              "src": "assets/research-center/evidence/neurobridge-2.webp",
              "caption": "未来品牌与服务视觉",
              "kind": "设计原型"
            },
            {
              "src": "assets/research-center/evidence/neurobridge-3.webp",
              "caption": "服务利益相关者关系",
              "kind": "设计原型"
            }
          ]
        },
        {
          "id": "contribution",
          "title": "设计含义与结论",
          "paragraphs": [
            "把“谁能跟上技术”转化为可见、可讨论的设计问题，促使公众反思被技术制造的新排斥。"
          ]
        },
        {
          "id": "stage",
          "title": "当前进展与研究范围",
          "paragraphs": [
            "项目中的知识输入设备与服务属于思辨情境，用于讨论数字排斥、技术依赖和社会包容。"
          ]
        }
      ],
      "links": [],
      "related": [
        "ai-co-speculation",
        "bizika",
        "wudu-service"
      ],
      "direction": "人机共创与设计未来学",
      "coverAlt": "NeuroBridge 数字鸿沟的思辨设计 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-futures",
      "detailCover": "assets/research-center/ai/neurobridge.webp",
      "detailCoverAlt": "NeuroBridge 数字鸿沟的思辨设计 · AI 生成的主题场景"
    },
    {
      "id": "more-than-human",
      "code": "PROJECT 17",
      "title": "从犬类气味理解人宠共处",
      "en": "More Than Human — Scent-based Pet Interaction",
      "kind": "design",
      "kindLabel": "设计｜多物种与设计未来",
      "status": "design",
      "statusText": "概念设计",
      "period": "2025",
      "summary": "完成分析人类行为如何影响犬类气味的研究图。 把动物的感知与社会性纳入产品设计，促使设计者反思以人类偏好主导的照护方式。",
      "lead": "人类对宠物清洁、香味和装饰的偏好可能改变犬类基于气味的交流。项目尝试从动物感知出发重新理解照护。",
      "cover": "assets/research-center/ai/more-than-human-detail.webp",
      "symbol": "DESIGN",
      "color": "#cfcbff",
      "meta": [
        {
          "label": "年份",
          "value": "2025"
        },
        {
          "label": "领域",
          "value": "多物种与设计未来"
        },
        {
          "label": "状态",
          "value": "团队设计实践 / 概念与模型"
        }
      ],
      "tags": [
        "设计｜多物种与设计未来",
        "More Than Human — Scent-based Pet Interaction",
        "从犬类气味理解人宠共处"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "人类对宠物清洁、香味和装饰的偏好可能改变犬类基于气味的交流。项目尝试从动物感知出发重新理解照护。"
          ]
        },
        {
          "id": "process",
          "title": "研究与设计方法",
          "points": [
            "More-than-human 设计视角",
            "趋势与情境研究",
            "思辨概念推演",
            "项圈建模、渲染和 3D 打印"
          ]
        },
        {
          "id": "outcomes",
          "title": "研究发现与成果",
          "points": [
            "完成分析人类行为如何影响犬类气味的研究图。",
            "形成气味分析项圈概念与模型，探索宠物和主人之间的信息沟通。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/more-than-human-1.webp",
              "caption": "人类行为、犬类气味与社交关系研究图",
              "kind": "设计原型"
            }
          ]
        },
        {
          "id": "contribution",
          "title": "设计含义与结论",
          "paragraphs": [
            "把动物的感知与社会性纳入产品设计，促使设计者反思以人类偏好主导的照护方式。"
          ]
        },
        {
          "id": "stage",
          "title": "当前进展与研究范围",
          "paragraphs": [
            "气味分析项圈为概念与模型，传感能力及真实使用效果尚需验证。"
          ]
        }
      ],
      "links": [],
      "related": [
        "ai-co-speculation",
        "bizika",
        "wudu-service"
      ],
      "direction": "人机共创与设计未来学",
      "coverAlt": "从犬类气味理解人宠共处 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "coverPosition": "center",
      "directionId": "direction-futures",
      "detailCover": "assets/research-center/ai/human-more-than-human.webp",
      "detailCoverAlt": "从犬类气味理解人宠共处 · AI 生成的主题场景"
    },
    {
      "id": "agent-design-teaching",
      "code": "PROJECT 18",
      "title": "面向智能体设计的实验教学探索",
      "en": "Research-led Teaching for Human–AI Interaction Design",
      "kind": "design",
      "kindLabel": "教学方式探索",
      "status": "ongoing",
      "statusText": "教学方案设计",
      "period": "2026–2027",
      "summary": "将信任研究转化为4学时实验教学，连接设计变量、开发任务书、可运行原型与数据解释，探索设计师持续参与的人智交互教学方式。",
      "lead": "如何让设计学生把关于智能体的想法转化为可运行、可比较、可评价的交互？本项目围绕情感化个性化智能体，将研究方法组织成设计、原型、实验与迭代相连的教学活动。",
      "cover": "assets/research-center/ai/human-futures.webp",
      "detailCover": "assets/research-center/ai/futures-detail.webp",
      "coverCredit": "AI 概念视觉",
      "coverAlt": "设计团队在工作室协作的 AI 概念场景",
      "color": "#d8e969",
      "meta": [
        {
          "label": "教学结构",
          "value": "4学时 × 45分钟"
        },
        {
          "label": "计划试点",
          "value": "40人 · 2027年"
        },
        {
          "label": "当前产出",
          "value": "教学方案与实验框架"
        }
      ],
      "tags": [
        "设计教育",
        "教学探索",
        "Design in the Loop",
        "智能体",
        "设计未来学"
      ],
      "directionId": "direction-futures",
      "direction": "人机共创与设计未来学",
      "related": [
        "project-01",
        "ai-co-speculation",
        "project-05"
      ],
      "links": [],
      "sections": [
        {
          "id": "background",
          "title": "教学背景与问题",
          "paragraphs": [
            "智能体设计同时涉及角色、语言、记忆、交互边界与工程实现。设计构想落地和设计效果验证，构成当前教学的两个关键问题。",
            "本探索将设计、工程与心理研究连接起来，让学生从用户体验出发定义变量，并用可运行原型和数据证据检查自己的设计判断。"
          ]
        },
        {
          "id": "design",
          "title": "我们设计了什么教学方式",
          "paragraphs": [
            "以 Design in the Loop 组织教学：设计师持续定义、审查和决策，连接 UX 设计稿、开发任务书、AI 辅助开发、在线原型、数据记录与设计优化。",
            "教学任务以人格特征和支持行为为可设计因素，观察感知回应性、情绪体验、能力与自主感，并分别评价信任、建议采纳和持续使用。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/teaching-4.webp",
              "caption": "科研经验转化为设计任务与迭代流程。",
              "kind": "教学方案原图"
            },
            {
              "src": "assets/research-center/evidence/teaching-5.webp",
              "caption": "人格、支持行为、用户心理与信任采纳的实验设计框架。",
              "kind": "教学方案原图"
            }
          ]
        },
        {
          "id": "methods",
          "title": "课堂如何开展",
          "paragraphs": [
            "四个学时分别组织问题界定、任务书与原型实现、数据记录与模拟实验、小组分析与设计迭代。每学时45分钟，共180分钟。",
            "课前准备生活情境、设计因素库与开发模板；课堂中形成变量指标表、原型、模拟实验数据和迭代方案。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/teaching-6.webp",
              "caption": "4学时实验教学的任务、方法与预期课堂产出。",
              "kind": "教学方案原图"
            }
          ]
        },
        {
          "id": "outcomes",
          "title": "已有产出与正在进行的工作",
          "paragraphs": [
            "目前已形成教学方案、核心实验框架和资源开发计划。预计组织教学指导书、情境案例与因素库、开发模板、部署与记录套件、模拟实验材料及试点报告六类资源。",
            "2027年计划开展40人教学试点。这里的4学时、40人均为方案安排，目前没有已完成试点的学习效果数据。"
          ]
        },
        {
          "id": "conclusion",
          "title": "设计含义与评价重点",
          "paragraphs": [
            "教学探索的重点是使学生能够把设计想法转化为操作性变量，辨别用户主观反馈与行为证据，并根据证据修订设计。",
            "后续通过试讲记录、课堂互评、原型版本对比与迭代报告评估教学方式，而不将方案完成等同于教学成效已经得到验证。"
          ]
        }
      ]
    }
  ],
  "directions": [
    {
      "id": "direction-embodied-trust",
      "title": "个性化人智交互用户体验与信任研究",
      "en": "User Experience & Trust in Personalized Human–AI Interaction",
      "summary": "围绕个性化陪伴、情感沟通与具身反馈，研究人如何理解智能体的回应、形成信任，并在持续交互中保有选择与控制。",
      "lead": "我们从陪伴交互的设计趋势与策略、人智语音交互中的情感与信任两个主题展开，结合理论建模、系统综述、用户实验与可运行原型，研究个性化人智交互的体验与信任。",
      "keywords": [
        "个性化体验",
        "人机陪伴",
        "情感交互",
        "信任校准"
      ],
      "cover": "assets/research-center/ai/embodied.webp",
      "coverAlt": "个性化人智交互用户体验与信任研究 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "color": "#cfcbff",
      "statusText": "重点研究方向",
      "featured": true,
      "kindLabel": "Research Focus",
      "meta": [
        {
          "label": "研究主题",
          "value": "陪伴设计策略 · 情感与信任"
        },
        {
          "label": "已有工作",
          "value": "理论模型 · 30项研究综述 · 414人双实验"
        },
        {
          "label": "正在进行",
          "value": "持续陪伴原型 · 跨通道反馈与信任校准"
        }
      ],
      "links": [
        {
          "label": "三通道具身反馈模型 · HCII / LNCS 正式论文",
          "url": "https://doi.org/10.1007/978-3-032-12385-5_7"
        }
      ],
      "related": [
        "triadic-embodied-feedback",
        "project-02",
        "project-01",
        "project-03"
      ],
      "sections": [
        {
          "id": "stage-01",
          "title": "人机陪伴交互设计趋势洞察与策略研究",
          "paragraphs": [
            "从社会线索与具身反馈模型出发，梳理陪伴智能体如何通过表情、声音和回应节奏形成关系体验；结合30项实证研究的系统综述，比较系统适应、用户定制与信任评价。"
          ],
          "links": [
            {
              "label": "进入陪伴设计策略研究",
              "url": "#companion-design-strategy"
            }
          ]
        },
        {
          "id": "stage-03",
          "title": "人智语音交互中的情感与信任研究",
          "paragraphs": [
            "以共情沟通实验、依恋理论模型和持续陪伴原型为基础，关注情感表达、回应方式和个体差异如何联系信任。已有双实验提供文本沟通证据，小屿提供文字与表情的交互载体，声音韵律与轮次反馈属于正在拓展的研究内容。"
          ],
          "links": [
            {
              "label": "进入情感与信任研究",
              "url": "#voice-emotion-trust"
            }
          ]
        },
        {
          "id": "stage-05",
          "title": "正在进行的研究：跨通道协同与信任校准",
          "paragraphs": [
            "围绕表情、语调、主动性与轮次节奏组织可比较的反馈条件，研究不同线索的一致与冲突如何影响用户理解。",
            "当前重点是原型与研究方案的迭代，区分社会临场感、主观信任、实际依赖与系统表现；尚不报告新的实验效果。"
          ],
          "figures": [
            {
              "src": "assets/research-center/ai/embodied-detail.webp",
              "caption": "跨通道反馈的 AI 概念视觉，用于呈现研究主题。",
              "kind": "AI 概念视觉"
            }
          ]
        }
      ],
      "code": "DIRECTION 01",
      "sectionAliases": {
        "stage-02": "stage-01",
        "stage-04": "stage-03"
      },
      "exploreGroups": [
        {
          "title": "人机陪伴交互设计趋势洞察与策略研究",
          "url": "#companion-design-strategy",
          "items": [
            "triadic-embodied-feedback",
            "project-02"
          ]
        },
        {
          "title": "人智语音交互中的情感与信任研究",
          "url": "#voice-emotion-trust",
          "items": [
            "project-01",
            "project-03"
          ]
        },
        {
          "title": "正在进行的研究",
          "items": [
            {
              "title": "跨通道协同与信任校准",
              "statusText": "正在进行 · 原型与研究方案",
              "cover": "assets/research-center/ai/embodied-detail.webp",
              "id": "direction-embodied-trust-stage-05"
            }
          ]
        }
      ],
      "detailCover": "assets/research-center/ai/human-personalized.webp"
    },
    {
      "id": "direction-trust",
      "code": "DIRECTION 02",
      "title": "人机信任与情感化个性化智能体",
      "en": "Human–AI Trust & Affective Personalized Agents",
      "summary": "研究情感化表达、个性化线索与持续互动如何影响用户对智能体的判断，关注信任、实际依赖与关系体验。",
      "lead": "面向日常陪伴与情感交流，研究个性化线索、共情表达和持续互动如何塑造用户体验与信任。将用户的依恋差异、表达习惯和控制需求纳入智能体设计。",
      "symbol": "TRUST",
      "cover": "assets/research-center/ai/human-personalized.webp",
      "keywords": [
        "共情沟通",
        "个性化",
        "长期交互",
        "信任测量"
      ],
      "color": "#cfcbff",
      "statusText": "研究方向",
      "kindLabel": "Research Focus",
      "meta": [
        {
          "label": "相关项目",
          "value": "3 个"
        },
        {
          "label": "研究视角",
          "value": "共情沟通与个性化"
        },
        {
          "label": "实践连接",
          "value": "长期交互与信任测量"
        }
      ],
      "sections": [
        {
          "id": "questions",
          "title": "研究问题",
          "paragraphs": [
            "智能体如何理解个体的支持需求，怎样让回应可理解、可修正，并让用户形成与系统能力相称的信任？"
          ]
        },
        {
          "id": "emotion",
          "title": "情感表达、依恋与持续互动",
          "paragraphs": [
            "共情实验提供沟通方式与信任的关系证据，依恋模型解释个体支持期待，小屿原型将个人语义和记忆带入持续交互。"
          ],
          "links": [
            {
              "label": "人智语音交互中的情感与信任研究",
              "url": "#voice-emotion-trust"
            }
          ]
        }
      ],
      "related": [
        "project-01",
        "project-02",
        "project-03"
      ],
      "coverAlt": "人机信任与情感化个性化智能体 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "detailCover": "assets/research-center/ai/human-trust.webp",
      "exploreGroups": [
        {
          "title": "情感化个性化智能体的研究与原型",
          "items": [
            "project-01",
            "project-02",
            "project-03"
          ]
        }
      ]
    },
    {
      "id": "direction-mobility",
      "code": "DIRECTION 03",
      "title": "智能座舱与空间认知",
      "en": "Intelligent Mobility & Spatial Cognition",
      "summary": "从语音信息与小屏地图入手，考察任务复杂度、空间能力与认知负荷，为情境适配的交互设计提供依据。",
      "lead": "从语音信息与小屏地图入手，考察任务复杂度、空间能力与认知负荷，为情境适配的交互设计提供依据。",
      "symbol": "MOVE",
      "cover": "assets/research-center/ai/human-mobility.webp",
      "keywords": [
        "车载语音",
        "空间能力",
        "寻路",
        "认知负荷"
      ],
      "color": "#d6e96a",
      "statusText": "研究方向",
      "kindLabel": "Research Focus",
      "meta": [
        {
          "label": "相关项目",
          "value": "2 个"
        },
        {
          "label": "研究视角",
          "value": "车载语音与空间能力"
        },
        {
          "label": "实践连接",
          "value": "寻路与认知负荷"
        }
      ],
      "sections": [
        {
          "id": "questions",
          "title": "关注的问题",
          "points": [
            "驾驶语音的信息量如何随任务变化？",
            "小屏中的概览与局部细节应如何协调？",
            "如何使界面适应不同空间能力的用户？"
          ]
        },
        {
          "id": "study-1",
          "title": "车载语音的长短，如何影响驾驶表现",
          "paragraphs": [
            "语音提示需要在信息充分与注意负担之间取得平衡。本研究把指令长度、驾驶情境和用户空间能力共同纳入评估，为智能座舱的信息表达提供实证依据。",
            "使用2×3组间设计：依据SBSOD量表测量的空间能力形成相对高、低两组，并在组内分配短、中、长语音条件。空间能力作为测得的个体差异纳入分析。",
            "57名参与者在驾驶模拟平台中完成直行、进出隧道、路口、人行横道和左右转弯五类任务。记录任务完成时间，并用Raw NASA-TLX评估主观负荷。",
            "三种语音脚本的平均时长约为1.57秒、3.40秒和7.30秒；保持普通话女声等呈现条件一致，比较不同信息长度。",
            "效果与道路任务相关：路口任务中，短语音条件的完成时间低于长语音条件；整体任务时间和主观负荷也显示了语音长度差异。",
            "空间能力差异影响提示适配：人行横道任务出现空间能力与语音长度的交互：低空间能力组在短语音条件下完成最快，高空间能力组在中等长度条件下完成最快。",
            "负荷提供解释线索：分析支持感知负荷连接语音长度与任务时间的统计间接路径；空间能力对该间接路径的调节证据尚不确定。"
          ],
          "links": [
            {
              "label": "查看完整研究与阶段进展",
              "url": "#project-05"
            }
          ]
        },
        {
          "id": "study-2",
          "title": "小屏移动地图的透明度与寻路认知",
          "paragraphs": [
            "移动屏幕难以同时呈现完整地图和局部细节。研究考察概览地图的透明度与对象数量如何影响动态窥孔界面的寻路表现。",
            "66 名成人参与者",
            "2 × 3 组间实验",
            "0%、100% 透明度与 0、14、28 个对象",
            "四项寻路任务与 NASA-TLX",
            "结果表明地图表现效果随任务类型而变化，透明度、对象数量与工作负荷需要共同考虑。",
            "14 个对象的透明概览条件在部分任务中体现出效率与负荷优势；不透明概览在距离估计任务中具有优势。"
          ],
          "links": [
            {
              "label": "查看完整研究与阶段进展",
              "url": "#peephole-wayfinding"
            }
          ]
        }
      ],
      "related": [
        "project-05",
        "peephole-wayfinding"
      ],
      "coverAlt": "智能座舱与空间认知 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "exploreGroups": [
        {
          "title": "相关研究与设计项目",
          "items": [
            "project-05",
            "peephole-wayfinding"
          ]
        }
      ],
      "detailCover": "assets/research-center/ai/mobility-detail.webp"
    },
    {
      "id": "direction-home",
      "code": "DIRECTION 04",
      "title": "智能家居隐私与家庭互动",
      "en": "Smart Homes, Privacy & Family Interaction",
      "summary": "围绕家庭设备协作、隐私边界与日常策略的变化开展系列研究，并通过 SafeSync 原型探索隐私控制的交互方式。",
      "lead": "把家庭作为共同生活与协商的系统，研究隐私、设备协作和用户控制，并将研究发现转化为可体验的隐私管理设计。",
      "symbol": "HOME",
      "cover": "assets/research-center/ai/human-home.webp",
      "keywords": [
        "AIoT",
        "隐私协商",
        "分布式认知",
        "用户控制"
      ],
      "color": "#c3d8da",
      "statusText": "研究方向",
      "kindLabel": "Research Focus",
      "meta": [
        {
          "label": "系列工作",
          "value": "3 项研究 + SafeSync 原型"
        },
        {
          "label": "研究视角",
          "value": "AIoT与隐私协商"
        },
        {
          "label": "实践连接",
          "value": "分布式认知与用户控制"
        }
      ],
      "sections": [
        {
          "id": "questions",
          "title": "关注的问题",
          "points": [
            "隐私选择如何随家庭情境与使用过程变化？",
            "多个家庭成员如何学习、分享信息并共同使用设备？",
            "如何让数据流、权限和控制结果更容易理解？"
          ]
        },
        {
          "id": "study-1",
          "title": "智能家居的隐私协商与家庭协同",
          "paragraphs": [
            "汇集家庭设备协作、家庭隐私、动态隐私管理三项研究，并连接 SafeSync 设计原型，呈现从使用情境到交互策略的研究脉络。",
            "发现学习支持、信息同步与协作机制中的三类障碍。",
            "归纳数据主权、用户心理、系统配置和家庭协作四个维度。",
            "隐私管理随情境与使用过程变化，需要持续的反馈和控制支持。",
            "形成设备连接、指令历史、隐私提示与数据清理等模块，面向2030年情境展开探索。"
          ],
          "links": [
            {
              "label": "查看完整研究与阶段进展",
              "url": "#privacy-in-motion"
            }
          ]
        }
      ],
      "related": [
        "privacy-in-motion"
      ],
      "coverAlt": "智能家居隐私与家庭互动 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "exploreGroups": [
        {
          "title": "相关研究与设计项目",
          "items": [
            "privacy-in-motion"
          ]
        }
      ],
      "detailCover": "assets/research-center/ai/home-detail.webp"
    },
    {
      "id": "direction-inclusive",
      "code": "DIRECTION 05",
      "title": "包容性服务与学习体验",
      "en": "Inclusive Services & Learning Experiences",
      "summary": "关注不同认知特点、年龄与生活情境中的体验差异，从需求分析出发设计可理解、可参与的产品和服务。",
      "lead": "关注不同认知特点、年龄与生活情境中的体验差异，从需求分析出发设计可理解、可参与的产品和服务。",
      "symbol": "CARE",
      "cover": "assets/research-center/ai/human-inclusive.webp",
      "keywords": [
        "神经多样性",
        "教育 AI",
        "AR 学习",
        "服务设计"
      ],
      "color": "#edd7ba",
      "statusText": "研究方向",
      "kindLabel": "Research Focus",
      "meta": [
        {
          "label": "相关项目",
          "value": "5 个"
        },
        {
          "label": "研究视角",
          "value": "神经多样性与教育 AI"
        },
        {
          "label": "实践连接",
          "value": "AR 学习与服务设计"
        }
      ],
      "sections": [
        {
          "id": "questions",
          "title": "关注的问题",
          "points": [
            "如何将不同用户的功能需求转化为设计优先级？",
            "教育 AI 如何支持家庭与学校共同参与？",
            "数字服务如何连接个人体验与更广泛的支持系统？"
          ]
        },
        {
          "id": "study-1",
          "title": "面向 ADHD 成人的认知支持设计",
          "paragraphs": [
            "现有辅助设计较多关注矫正儿童行为，研究将视角转向 ADHD 成人的日常功能、创意记录和社会参与需求。",
            "神经多样性视角",
            "Kano 需求分类与 QFD 设计转化",
            "Z 分数标准化及 Pareto 优先级分析",
            "整理 17 项核心用户需求，筛选 7 项优先设计特征。",
            "形成触发语音转写、旋转触觉交互与 AI 任务整理相结合的戒指型设备和应用界面概念。"
          ],
          "links": [
            {
              "label": "查看完整研究与阶段进展",
              "url": "#adhd-inclusive"
            }
          ]
        },
        {
          "id": "study-2",
          "title": "儿童 AR 科普绘本的需求与设计优先级",
          "paragraphs": [
            "AR 能把抽象科学知识转化为可操作的空间内容，但如何从儿童真实需求系统推导设计策略仍需明确。",
            "具身社会临场感理论",
            "用户需求层级化",
            "AHP 权重分析与 QFD 质量屋",
            "将知识理解、语音叙述、模型交互与表达形式等用户需求映射为设计要素。",
            "形成儿童友好、科学准确、图文协调、趣味性与动态交互五个策略维度。"
          ],
          "links": [
            {
              "label": "查看完整研究与阶段进展",
              "url": "#ar-science-books"
            }
          ]
        },
        {
          "id": "study-3",
          "title": "家庭教育中的对话式 AI 互动障碍",
          "paragraphs": [
            "教育 AI 进入家庭后，其使用体验不仅取决于孩子与工具，也受家校协作、教育制度和社会文化环境影响。",
            "生态系统理论视角",
            "13 个家庭中的 27 次访谈",
            "主题分析",
            "归纳个性化学习路径受阻、家校协作薄弱、AI 与家庭生态兼容不足及社会资源差异四类问题。",
            "提出跨平台互动、多样化教学设计以及教师参与 AI 系统开发的方向。"
          ],
          "links": [
            {
              "label": "查看完整研究与阶段进展",
              "url": "#family-cai-education"
            }
          ]
        },
        {
          "id": "study-4",
          "title": "Smataste 个性化职场餐饮服务",
          "paragraphs": [
            "年轻职场人对健康、口味、效率和社交体验的需求并不一致，传统食堂也面临供需匹配和食物浪费问题。",
            "职场餐饮服务研究",
            "用户与厨房供应链双侧服务设计",
            "AI 对话式点餐与饮食偏好建模",
            "界面原型与服务流程设计",
            "构建个人饮食偏好、AI 点餐推荐与用餐反馈的用户端流程。",
            "提出连接消费者、厨房与采购端的需求洞察与库存预测服务概念。"
          ],
          "links": [
            {
              "label": "查看完整研究与阶段进展",
              "url": "#smartaste"
            }
          ]
        },
        {
          "id": "study-5",
          "title": "SOMA 软体机器人健康监测概念",
          "paragraphs": [
            "项目探索柔性材料和可穿戴形态在胸部健康监测情境中的体验可能性，关注舒适性与产品交互。",
            "软体机器人材料研究",
            "Eco-Flex 0030 材料实验",
            "Rhino 模具建模与 3D 打印",
            "原型制作与演示",
            "完成软体结构的初始模具、制作探索与概念展示。",
            "形成设备概念、交互仪表盘和展示视频材料。"
          ],
          "links": [
            {
              "label": "查看完整研究与阶段进展",
              "url": "#soma"
            }
          ]
        }
      ],
      "related": [
        "adhd-inclusive",
        "ar-science-books",
        "family-cai-education",
        "smartaste",
        "soma"
      ],
      "coverAlt": "包容性服务与学习体验 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "exploreGroups": [
        {
          "title": "相关研究与设计项目",
          "items": [
            "adhd-inclusive",
            "ar-science-books",
            "family-cai-education",
            "smartaste",
            "soma"
          ]
        }
      ],
      "detailCover": "assets/research-center/ai/inclusive-detail.webp"
    },
    {
      "id": "direction-futures",
      "code": "DIRECTION 06",
      "title": "人机共创与设计未来学",
      "en": "Human–AI Co-creation & Design Futures",
      "summary": "通过思辨设计、文化研究与教学方式探索，研究人如何参与技术未来的构想、制作与判断。",
      "lead": "以思辨设计、文化研究与产品原型探索技术在日常生活中的角色，关注设计者的判断、社会包容和多物种体验。",
      "symbol": "MAKE",
      "cover": "assets/research-center/ai/human-futures.webp",
      "keywords": [
        "人机共创",
        "设计未来学",
        "教学探索",
        "文化传习"
      ],
      "color": "#d6d5e8",
      "statusText": "研究方向",
      "kindLabel": "Research Focus",
      "meta": [
        {
          "label": "相关项目",
          "value": "5 个"
        },
        {
          "label": "研究视角",
          "value": "人机共创与非遗传习"
        },
        {
          "label": "实践连接",
          "value": "动态界面与思辨设计"
        }
      ],
      "sections": [
        {
          "id": "questions",
          "title": "关注的问题",
          "points": [
            "AI 参与创作时，设计者如何保持过程控制与批判判断？",
            "文化知识如何进入产品、服务与持续学习体验？",
            "新技术会为谁带来便利，又可能排除谁？"
          ]
        },
        {
          "id": "teaching",
          "title": "教学方式探索：从研究到可运行原型",
          "paragraphs": [
            "将信任研究转化为4学时实验教学，连接设计变量、开发任务书、可运行原型与数据解释，探索设计师持续参与的人智交互教学方式。"
          ],
          "links": [
            {
              "label": "查看教学探索案例",
              "url": "#agent-design-teaching"
            }
          ]
        },
        {
          "id": "study-1",
          "title": "AI 与思辨设计的协作摩擦",
          "paragraphs": [
            "生成式 AI 能帮助设计师构建未来情境，但概念表达、交互效率与输出稳定性之间存在摩擦。",
            "系列共同思辨工作坊",
            "开放式问卷",
            "设计过程中的人机协作分析",
            "识别概念意图与视觉实现脱节、低效交互带来的认知自主性削弱，以及生成不稳定导致的设计推进受阻。",
            "提出记录协作摩擦、明确设计师主导角色和增加可解释反馈等改进方向。"
          ],
          "links": [
            {
              "label": "查看完整研究与阶段进展",
              "url": "#ai-co-speculation"
            }
          ]
        },
        {
          "id": "study-2",
          "title": "Bìzīkǎ 西兰卡普艺术音箱",
          "paragraphs": [
            "探索让传统织锦从展示性装饰进入日常使用场景，将西兰卡普的纹样、织造逻辑与声音媒介结合。",
            "文化意象与纹样研究",
            "产品造型推演",
            "CMF 与材质对比",
            "用户画像及使用场景设计",
            "完成具有 S 形扭转与镂空结构的音箱概念，将金属与织物组织为同一产品语言。",
            "形成草图、方案推演、场景效果、使用图及爆炸图。"
          ],
          "links": [
            {
              "label": "查看完整研究与阶段进展",
              "url": "#bizika"
            }
          ]
        },
        {
          "id": "study-3",
          "title": "嘉鱼呜嘟的严肃游戏化传习服务",
          "paragraphs": [
            "非遗乐器的数字体验常止于短时观看，难以连接制作、演奏和持续传习关系。",
            "社会临场感理论",
            "九个数字文化遗产游戏案例比较",
            "制作、吹奏、曲目和社交触点分析",
            "知识资产、Agent 服务与传承人校验机制设计",
            "构建身份真实、回应明确与任务协作三项关系原则。",
            "提出由互动范式、AI 工程层和真实传习服务构成的设计框架。"
          ],
          "links": [
            {
              "label": "查看完整研究与阶段进展",
              "url": "#wudu-service"
            }
          ]
        },
        {
          "id": "study-4",
          "title": "NeuroBridge 数字鸿沟的思辨设计",
          "paragraphs": [
            "当社会工作与公共服务越来越依赖数字能力，无法跟上技术变化的人可能被进一步排除。项目构建一个需要购买知识以融入社会的未来情境。",
            "数字鸿沟研究与情境分析",
            "思辨设计与未来情境构建",
            "品牌与服务系统设计",
            "可穿戴概念建模、3D 打印和短片",
            "完成知识输入型辅助设备概念与 NeuroBridge 未来服务品牌。",
            "通过渲染、实体模型及叙事短片引发对技术依赖、能力边界与社会包容的讨论。"
          ],
          "links": [
            {
              "label": "查看完整研究与阶段进展",
              "url": "#neurobridge"
            }
          ]
        },
        {
          "id": "study-5",
          "title": "从犬类气味理解人宠共处",
          "paragraphs": [
            "人类对宠物清洁、香味和装饰的偏好可能改变犬类基于气味的交流。项目尝试从动物感知出发重新理解照护。",
            "More-than-human 设计视角",
            "趋势与情境研究",
            "思辨概念推演",
            "项圈建模、渲染和 3D 打印",
            "完成分析人类行为如何影响犬类气味的研究图。",
            "形成气味分析项圈概念与模型，探索宠物和主人之间的信息沟通。"
          ],
          "links": [
            {
              "label": "查看完整研究与阶段进展",
              "url": "#more-than-human"
            }
          ]
        }
      ],
      "related": [
        "agent-design-teaching",
        "ai-co-speculation",
        "bizika",
        "wudu-service",
        "neurobridge",
        "more-than-human"
      ],
      "coverAlt": "人机共创与设计未来学 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "exploreGroups": [
        {
          "title": "相关研究与设计项目",
          "items": [
            "agent-design-teaching",
            "ai-co-speculation",
            "bizika",
            "wudu-service",
            "neurobridge",
            "more-than-human"
          ]
        }
      ],
      "detailCover": "assets/research-center/ai/futures-detail.webp"
    }
  ],
  "aliases": {
    "project-04": "project-02-stage-02",
    "family-smart-home": "privacy-in-motion-stage-01",
    "family-privacy": "privacy-in-motion-stage-02",
    "safesync": "privacy-in-motion-stage-04"
  },
  "removedRoutes": [
    "dreame-interface"
  ],
  "topics": [
    {
      "id": "companion-design-strategy",
      "title": "人机陪伴交互设计趋势洞察与策略研究",
      "en": "Trends & Strategies for Human–AI Companion Interaction",
      "summary": "以反馈模型和系统综述连接陪伴交互的设计趋势、用户体验与信任。",
      "lead": "从“智能体如何回应”到“个性化为何产生作用”，我们综合结构化反馈模型与已有实证证据，形成面向人机陪伴的设计变量与评价策略。",
      "keywords": [
        "个性化体验",
        "人机陪伴",
        "情感交互",
        "信任校准"
      ],
      "cover": "assets/research-center/ai/personalized-detail.webp",
      "coverAlt": "人机陪伴交互设计趋势洞察与策略研究 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "color": "#cfcbff",
      "statusText": "研究主题",
      "featured": false,
      "kindLabel": "Research Focus",
      "meta": [
        {
          "label": "理论模型",
          "value": "3通道 · 6类反馈变量"
        },
        {
          "label": "系统综述",
          "value": "854条记录 · 30项研究"
        },
        {
          "label": "研究产出",
          "value": "变量框架 · 证据综合 · 设计策略"
        }
      ],
      "links": [],
      "related": [
        "triadic-embodied-feedback",
        "project-02"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景",
          "paragraphs": [
            "陪伴智能体通过外观、语言、行为与记忆建立连续互动。设计需要理解哪些线索有意义，以及它们在何种情境下联系信任。"
          ]
        },
        {
          "id": "work",
          "title": "我们做了什么",
          "paragraphs": [
            "建立视觉、听觉与行为三通道的反馈变量框架，并提出输入—中介—输出路径；另以系统检索与主题编码综合30项具身智能体个性化研究。"
          ]
        },
        {
          "id": "findings",
          "title": "研究发现与设计含义",
          "paragraphs": [
            "综述显示，任务情境更关注能力与可靠性，关系情境更关注社会连接和连续回应。用户定制与系统自动适应具有不同的控制方式，需要分别评估。",
            "设计策略是先明确任务与关系角色，再选择反馈变量，并同时测量主观信任和实际依赖。模型提供可检验路径，不能替代跨通道的因果验证。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/project-04-figure-1.webp",
              "caption": "个性化路径的证据综合框架。",
              "kind": "论文原图"
            }
          ]
        }
      ],
      "code": "RESEARCH THEME 01",
      "sectionAliases": {},
      "exploreGroups": [
        {
          "title": "模型、证据与设计策略",
          "items": [
            "triadic-embodied-feedback",
            "project-02"
          ]
        }
      ],
      "detailCover": "assets/research-center/ai/human-personalized.webp"
    },
    {
      "id": "voice-emotion-trust",
      "title": "人智语音交互中的情感与信任研究",
      "en": "Emotion & Trust in Human–AI Voice Interaction",
      "summary": "连接共情表达、依恋差异与持续交互，探索情感与信任的形成。",
      "lead": "围绕人智语音交互中的情感与信任，整合已有共情沟通实验、依恋理论模型与个性化陪伴原型，推进从语言内容到声音、节奏和多模态反馈的研究。",
      "keywords": [
        "个性化体验",
        "人机陪伴",
        "情感交互",
        "信任校准"
      ],
      "cover": "assets/research-center/ai/trust-detail.webp",
      "coverAlt": "人智语音交互中的情感与信任研究 · AI 概念视觉",
      "coverCredit": "AI 概念视觉",
      "color": "#cfcbff",
      "statusText": "研究主题",
      "featured": false,
      "kindLabel": "Research Focus",
      "meta": [
        {
          "label": "实验基础",
          "value": "414人 · 两项文本交互实验"
        },
        {
          "label": "理论依据",
          "value": "依恋焦虑与依恋回避"
        },
        {
          "label": "正在进行",
          "value": "持续陪伴与跨通道反馈研究"
        }
      ],
      "links": [],
      "related": [
        "project-01",
        "project-03",
        "project-05"
      ],
      "sections": [
        {
          "id": "background",
          "title": "研究背景与问题",
          "paragraphs": [
            "用户会从表达内容、语气与回应节奏判断智能体是否理解自己。不同的支持期待与交互历史，可能使相同反馈带来不同体验。"
          ]
        },
        {
          "id": "attachment",
          "title": "依恋理论与个体支持需求",
          "paragraphs": [
            "依恋回避路径突出距离保持、独立与自我调节，依恋焦虑路径突出接近寻求、对支持可得性的敏感及不安全感。图中呈现的是解释支持需求的理论路径。",
            "在本研究中，依恋焦虑与回避作为连续的个体差异变量纳入探索性分析。不能仅凭理论图为用户贴标签，也不能据此固定分配共情方式；实际结果需要结合用户反馈和实验情境解释。"
          ],
          "figures": [
            {
              "src": "assets/research-center/evidence/attachment-model.webp",
              "caption": "依恋回避与依恋焦虑的典型情绪调节路径。用于说明本研究的理论分析依据。",
              "kind": "理论模型"
            }
          ]
        },
        {
          "id": "work",
          "title": "我们做了什么研究",
          "paragraphs": [
            "已完成两个独立的2×2文本交流实验，分别分析210名与204名参与者；比较认知／情感共情、收益／损失消息框架，并检验依恋差异。",
            "小屿原型支持个人表情、情境记忆与语义纠正，正在组织28天纵向研究方案。车载语音研究另外提供信息长度、空间能力与认知负荷的证据。"
          ]
        },
        {
          "id": "findings",
          "title": "已有发现与含义",
          "paragraphs": [
            "两个实验中，情感共情均对应更高感知回应性；其中受伤方实验还出现更高整体信任。依恋相关分析提示用户差异需要结合情境解释，不能据此固定匹配表达风格。",
            "现有实验来自文本交流，不能直接证明韵律、音色或语音轮次的效果。声音线索的作用需要在对应原型中独立检验。"
          ]
        },
        {
          "id": "ongoing",
          "title": "正在进行的研究",
          "paragraphs": [
            "结合共情内容、韵律温暖度、轮次协调和表达连续性，细化情感化个性化智能体的研究条件；区分被理解感、信任评分与实际依赖。"
          ],
          "links": [
            {
              "label": "查看共情实验数据与原型",
              "url": "#project-01"
            },
            {
              "label": "查看小屿网页原型",
              "url": "#project-03-demo"
            }
          ]
        }
      ],
      "code": "RESEARCH THEME 02",
      "sectionAliases": {},
      "exploreGroups": [
        {
          "title": "情感沟通与持续陪伴",
          "items": [
            "project-01",
            "project-03"
          ]
        }
      ],
      "detailCover": "assets/research-center/ai/human-trust.webp"
    }
  ],
  "imageSizes": {
    "assets/research-center/ai/ar-learning-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/bizika-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/bizika.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/embodied-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/embodied.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/family-ai-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/futures-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/home-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/human-ar-learning.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/human-family-ai.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/human-futures.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/human-home.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/human-inclusive.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/human-mobility.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/human-more-than-human.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/human-personalized.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/human-trust.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/human-xiaoyu.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/inclusive-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/mobility-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/more-than-human-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/neurobridge-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/neurobridge.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/personalized-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/smartaste-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/smartaste.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/soma.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/trust-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/wayfinding-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/wayfinding.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/wudu-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/wudu.webp": [
      1672,
      941
    ],
    "assets/research-center/ai/xiaoyu-detail.webp": [
      1672,
      941
    ],
    "assets/research-center/evidence/adhd-inclusive-1.webp": [
      1800,
      1013
    ],
    "assets/research-center/evidence/adhd-inclusive-2.webp": [
      1800,
      1013
    ],
    "assets/research-center/evidence/adhd-inclusive-3.webp": [
      1800,
      1013
    ],
    "assets/research-center/evidence/ar-science-books-1.webp": [
      1269,
      951
    ],
    "assets/research-center/evidence/ar-science-books-2.webp": [
      1062,
      888
    ],
    "assets/research-center/evidence/ar-science-books-3.webp": [
      1268,
      622
    ],
    "assets/research-center/evidence/attachment-model.webp": [
      2144,
      1642
    ],
    "assets/research-center/evidence/bizika-1.webp": [
      595,
      842
    ],
    "assets/research-center/evidence/bizika-2.webp": [
      1280,
      720
    ],
    "assets/research-center/evidence/bizika-3.webp": [
      1280,
      1707
    ],
    "assets/research-center/evidence/family-cai-education-1.webp": [
      639,
      639
    ],
    "assets/research-center/evidence/more-than-human-1.webp": [
      1189,
      841
    ],
    "assets/research-center/evidence/neurobridge-1.webp": [
      1920,
      1080
    ],
    "assets/research-center/evidence/neurobridge-2.webp": [
      1920,
      1080
    ],
    "assets/research-center/evidence/neurobridge-3.webp": [
      1920,
      1080
    ],
    "assets/research-center/evidence/peephole-wayfinding-1.webp": [
      2144,
      1344
    ],
    "assets/research-center/evidence/peephole-wayfinding-2.webp": [
      2160,
      786
    ],
    "assets/research-center/evidence/privacy-in-motion-1.webp": [
      1326,
      561
    ],
    "assets/research-center/evidence/privacy-in-motion-2.webp": [
      1818,
      1800
    ],
    "assets/research-center/evidence/project-01-figure-1.webp": [
      2006,
      1300
    ],
    "assets/research-center/evidence/project-01-figure-2.webp": [
      1089,
      1800
    ],
    "assets/research-center/evidence/project-01-figure-3.webp": [
      1271,
      595
    ],
    "assets/research-center/evidence/project-04-figure-1.webp": [
      1818,
      1800
    ],
    "assets/research-center/evidence/project-04-figure-2.webp": [
      714,
      1034
    ],
    "assets/research-center/evidence/project-04-figure-3.webp": [
      1269,
      627
    ],
    "assets/research-center/evidence/project-05-figure-1.webp": [
      2200,
      370
    ],
    "assets/research-center/evidence/project-05-figure-2.webp": [
      2200,
      915
    ],
    "assets/research-center/evidence/project-05-figure-3.webp": [
      1136,
      711
    ],
    "assets/research-center/evidence/safesync-1.webp": [
      1380,
      776
    ],
    "assets/research-center/evidence/safesync-2.webp": [
      1380,
      776
    ],
    "assets/research-center/evidence/safesync-3.webp": [
      1380,
      776
    ],
    "assets/research-center/evidence/smartaste-1.webp": [
      1800,
      1013
    ],
    "assets/research-center/evidence/soma-1.webp": [
      1800,
      1013
    ],
    "assets/research-center/evidence/support-webpage.webp": [
      2000,
      1115
    ],
    "assets/research-center/evidence/teaching-4.webp": [
      2560,
      1440
    ],
    "assets/research-center/evidence/teaching-5.webp": [
      2560,
      1440
    ],
    "assets/research-center/evidence/teaching-6.webp": [
      2560,
      1440
    ],
    "assets/research-center/evidence/wudu-service-1.webp": [
      1998,
      1800
    ],
    "assets/research-center/evidence/wudu-service-2.webp": [
      1129,
      1800
    ],
    "assets/research-center/evidence/xiaoyu-webpage.webp": [
      2000,
      1115
    ]
  }
};
