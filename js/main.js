/* ============================================
   乐诚智悦 - 网站交互脚本 V2
   LeCheng ZhiYue Consulting
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // Course Data - Complete details for all courses
    // ============================================
    var courseData = {
        "新手管理成长训练营·从专业到管理转身": {
            badge: "basic",
            label: "基层管理",
            desc: "从业务骨干到管理者的完整转身：管理角色认知、管理思维、目标设定与教练式沟通。",
            duration: "4-8小时",
            size: "30人以内",
            target: "新晋/预备管理者",
            method: "工作坊 + 案例研讨 + 角色扮演",
            objectives: [
                "理解管理与被管理的本质差异，完成角色认知转变",
                "识别常见管理误区，建立正确的管理心智模式",
                "掌握教练式沟通方法，有效进行员工辅导与反馈",
                "学会目标设定与任务分配的核心技巧"
            ],
            topics: ["管理定义与角色", "从业务骨干到管理者的N项转变", "管理误区解析", "目标思维及练习", "教练式沟通", "任务分配", "绩效反馈", "90天转身行动计划"],
            outcomes: [
                "完成从\"做事\"到\"带人\"的思维转变",
                "掌握至少3种教练式沟通工具",
                "制定个人90天管理转身行动计划"
            ]
        },
        "结构性思维·高效表达与问题解决": {
            badge: "basic",
            label: "基层管理",
            desc: "金字塔原理与MECE工具，提升汇报呈现、逻辑表达与结构化问题分析能力。",
            duration: "4-8小时",
            size: "30人以内",
            target: "需提升结构化思维的各级管理者",
            method: "案例教学 + 实操练习 + 小组研讨",
            objectives: [
                "掌握金字塔原理的核心原则与构建方法",
                "提升汇报与沟通的逻辑性与说服力",
                "学会结构化分析问题的思考框架",
                "能够快速清晰表达核心观点"
            ],
            topics: ["结构化思维四特点", "MECE工具", "高效汇报流程与标准", "年终汇报设计", "问题解决三步法", "界定问题-SCQ", "拆解与分析问题", "团队实战练习"],
            outcomes: [
                "建立结构化思维方式，工作汇报更清晰有力",
                "掌握问题分析的系统方法",
                "提升跨部门沟通效率"
            ]
        },
        "管理者的时间管理": {
            badge: "basic",
            label: "基层管理",
            desc: "突破\"忙碌但低效\"的困境，掌握时间矩阵与要事优先方法，提升个人与团队效能。",
            duration: "4-8小时",
            size: "30人以内",
            target: "各级管理者及高潜人才",
            method: "实操工作坊 + 工具演练 + 复盘",
            objectives: [
                "建立正确的时间管理理念，区分紧急与重要",
                "掌握时间管理四象限法并应用于日常工作",
                "学会要事优先的决策方法",
                "建立有效的复盘与计划机制"
            ],
            topics: ["时间能否被管理", "关注圈与影响圈", "领导梯队转型三角模型", "管理者时间自测", "时间都去哪了", "时间矩阵与发力点", "要事第一计划表", "时间记录回顾法"],
            outcomes: [
                "建立个性化时间管理体系",
                "每周释放3-5小时高效工作时间",
                "团队整体产出效率可量化提升"
            ]
        },
        "管理者沟通与信任": {
            badge: "basic",
            label: "基层管理",
            desc: "理解职场沟通本质，掌握共情式聆听、提问与反馈技巧，建立基于信任的上下级关系。",
            duration: "4-8小时",
            size: "25人以内",
            target: "期望提升沟通影响力的管理者",
            method: "体验式学习 + 情景模拟 + 反馈练习",
            objectives: [
                "理解沟通的本质——信任的构建与维护",
                "掌握共情式聆听与提问的技巧",
                "学会与不同风格的下属有效沟通",
                "建立信任公式并应用于管理实践"
            ],
            topics: ["沟通漏斗与障碍", "乔哈里之窗", "信任公式解析", "沟通三步骤", "LEAP模型应用", "开放式与封闭式提问", "情景式领导力", "GROWS教练模型练习"],
            outcomes: [
                "团队信任度提升，沟通成本显著降低",
                "掌握4种以上实用沟通工具",
                "能够自信处理工作中的困难对话"
            ]
        },
        "高效会议管理": {
            badge: "basic",
            label: "基层管理",
            desc: "从会议策划到执行跟进的全流程方法，让每一分钟会议时间都产生价值。",
            duration: "4-8小时",
            size: "30人以内",
            target: "需频繁组织会议的各级管理者",
            method: "工作坊 + 模拟演练 + 工具实操",
            objectives: [
                "掌握高效会议的要素与设计方法",
                "学习引导式会议的核心技巧",
                "建立会议跟进行动闭环机制",
                "显著降低会议的隐性成本"
            ],
            topics: ["会议定义与本质", "负向会议特点及成本", "高效会议要素", "管理者会议力罗盘", "精力分配原则", "会议前/中/后管理", "引导式会议技巧", "行动跟进机制"],
            outcomes: [
                "会议效率提升50%以上",
                "建立团队高效会议文化",
                "掌握引导式会议主持技巧"
            ]
        },
        "目标管理·拥抱OKR": {
            badge: "mid",
            label: "中层管理",
            desc: "从生命平衡轮到战略地图，系统掌握OKR目标分解与过程追踪，实现团队目标对齐。",
            duration: "4-8小时",
            size: "25人以内",
            target: "部门负责人、团队Leader",
            method: "理论 + 实操工作坊 + 案例研讨",
            objectives: [
                "理解OKR的本质与核心价值",
                "掌握OKR制定与分解的方法论",
                "学会从战略地图到个人目标的对齐",
                "建立目标驱动的过程追踪机制"
            ],
            topics: ["生命平衡轮", "GROW模型", "目标管理本质", "PDCA目标与计划", "战略制定与战略地图", "平衡计分卡", "OKR由来与定义", "OKR流程与KPI的区别"],
            outcomes: [
                "完成一份高质量团队OKR方案",
                "建立目标追踪与复盘机制",
                "团队目标共识度大幅提升"
            ]
        },
        "管理者社交风格·识己解彼": {
            badge: "mid",
            label: "中层管理",
            desc: "识别四大社交风格，读懂不同同事的沟通偏好，制定属于自己的沟通说明书。",
            duration: "4-8小时",
            size: "25人以内",
            target: "需提升跨部门协作影响力的管理者",
            method: "测评 + 体验工作坊 + 角色扮演",
            objectives: [
                "识别自己和他人的社交风格特征",
                "学习适应不同风格的有效沟通策略",
                "提升跨部门协作与横向影响力",
                "建立基于信任的协作关系"
            ],
            topics: ["职场沟通本质", "社交风格定义与模型", "四大风格识别", "如何与不同风格的人相处", "制定沟通策略", "我的沟通说明书", "跨部门协作", "利益相关者管理"],
            outcomes: [
                "精准识别个人社交风格图谱",
                "掌握适应4种风格的方法策略",
                "制定个人沟通说明书并落地"
            ]
        },
        "管理者影响力 Influence Edge": {
            badge: "mid",
            label: "中层管理",
            desc: "从职位权力到个人影响力，掌握无授权领导力与向上管理的关键策略。",
            duration: "4-8小时",
            size: "25人以内",
            target: "中层管理者、项目负责人",
            method: "工作坊 + 情景演练 + 案例复盘",
            objectives: [
                "理解影响力的多元来源，减少对职位权力的依赖",
                "掌握无授权情境下的推动与共识技巧",
                "提升向上管理与跨层级沟通能力",
                "建立个人影响力提升计划"
            ],
            topics: ["影响力的来源", "影响风格识别", "无授权领导力", "向上管理策略", "关键利益相关者", "推动变革与共识", "影响困难对话", "个人影响力行动计划"],
            outcomes: [
                "建立个人影响力提升路径",
                "掌握3种以上影响策略",
                "关键协作关系显著改善"
            ]
        },
        "优势团队激活工作坊": {
            badge: "mid",
            label: "中层管理",
            desc: "基于Gallup克利夫顿优势识别器，用优势视角激活团队潜能，打造互补型高绩效团队。",
            duration: "4-8小时",
            size: "20人以内",
            target: "希望打造高绩效团队的管理者",
            method: "Gallup测评 + 体验式工作坊 + 团队教练",
            objectives: [
                "了解自身及团队成员的优势才干",
                "掌握基于优势的管理与沟通方法",
                "学习构建优势互补的高效团队",
                "制定团队优势发展行动计划"
            ],
            topics: ["34项才干概览", "个人优势识别", "团队优势组合", "优势与协作", "优势与绩效", "优势沟通语言", "团队优势地图", "优势发展行动计划"],
            outcomes: [
                "每位成员获得个人优势识别报告",
                "团队建立\"优势语言\"沟通体系",
                "团队敬业度与协作效率显著提升"
            ]
        },
        "绩效管理与平衡计分卡": {
            badge: "mid",
            label: "中层管理",
            desc: "从战略到执行的绩效体系设计，掌握平衡计分卡与绩效面谈方法，驱动组织目标达成。",
            duration: "4-8小时",
            size: "25人以内",
            target: "中高层管理者、HR管理者",
            method: "战略研讨会 + 案例实操 + 工具演练",
            objectives: [
                "理解绩效管理的完整闭环体系",
                "掌握平衡计分卡的四个维度设计方法",
                "学会制定科学的绩效指标与目标",
                "掌握绩效面谈与辅导的关键技巧"
            ],
            topics: ["绩效管理框架", "战略绩效落地路径", "KPI设计", "平衡计分卡四维度", "战略地图", "目标分解", "绩效考核标准设计", "绩效面谈与改进计划"],
            outcomes: [
                "完成部门级平衡计分卡草案",
                "掌握绩效面谈的教练式方法",
                "建立科学的绩效评估体系"
            ]
        },
        "跨部门沟通与横向领导力": {
            badge: "mid",
            label: "中层管理",
            desc: "打破部门墙，掌握横向协作与冲突化解方法，在没有直接管辖权的情况下推动事情前进。",
            duration: "4-8小时",
            size: "25人以内",
            target: "需跨部门协作的管理者与骨干",
            method: "工作坊 + 情景模拟 + 共创研讨",
            objectives: [
                "识别跨部门协作的主要障碍与根因",
                "掌握横向领导力的核心原则与方法",
                "学会化解部门冲突与达成共识",
                "建立可持续的跨部门协作机制"
            ],
            topics: ["部门墙的成因", "横向领导力原则", "跨部门沟通策略", "冲突识别与化解", "利益与立场分析", "共识达成方法", "协作机制设计", "协作行动计划"],
            outcomes: [
                "掌握跨部门推动事情的实用方法",
                "关键横向关系明显改善",
                "形成可落地的协作机制"
            ]
        },
        "技能矩阵与IDP个人发展计划工作坊": {
            badge: "talent",
            label: "人才发展",
            desc: "从岗位能力到个人发展，掌握技能矩阵搭建与IDP三步法，让能力培养真正落地。",
            duration: "4-8小时",
            size: "25人以内",
            target: "管理者、HR及人才发展负责人",
            method: "实操工作坊 + 现场演练 + 表单工具",
            objectives: [
                "理解企业能力培养体系的常见问题与破解思路",
                "掌握技能矩阵的定义与现场操作方法",
                "学会人才盘点的基本流程",
                "掌握IDP个人发展计划的三步法"
            ],
            topics: ["能力培养体系\"八大碗\"", "从人到人才的桥梁", "技能矩阵定义与演示", "岗位能力技能矩阵填写", "人才盘点方法", "IDP三步法", "个人发展行动计划", "课后跟踪机制"],
            outcomes: [
                "完成本岗位技能矩阵草案",
                "产出个人IDP行动计划",
                "建立能力培养的落地抓手"
            ]
        },
        "高效新人带教（OJT）实训工作坊": {
            badge: "talent",
            label: "人才发展",
            desc: "从\"分任务\"到\"传经验\"，用3张表+PDCA+5动作带队法，把带教变成可复制的标准动作。",
            duration: "4-8小时",
            size: "20人以内",
            target: "带教导师、一线管理者",
            method: "实训工作坊 + 工具卡 + 现场演练",
            objectives: [
                "理解带教的核心理念与常见误区",
                "掌握3张表（入职适配/带教考核/转正评估）的用法",
                "掌握5动作带队法：讲任务-讲标准-跟过程-做反馈-留经验",
                "现场产出一套完整的OJT带教计划"
            ],
            topics: ["带教痛点与根因", "3张表全景", "PDCA每日循环", "讲任务-5W1H", "讲标准-三阶标准", "跟过程-检查节奏", "做反馈-SBI模型", "留经验-一案一卡"],
            outcomes: [
                "带走一套可执行的OJT带教计划",
                "掌握每日/每周带教工具",
                "形成经验沉淀与SOP机制"
            ]
        },
        "人才梯队与继任计划工作坊": {
            badge: "talent",
            label: "人才发展",
            desc: "用七维领导力与人才九宫格校准人才，搭建继任梯队与B角机制，让关键岗位不缺人。",
            duration: "4-8小时/期，可分期交付",
            size: "管理层团队",
            target: "高管团队、人才委员会、HR负责人",
            method: "校准工作坊 + 九宫格演练 + 案例研讨",
            objectives: [
                "理解企业领导力DNA与关键人才画像",
                "掌握七维领导力评测与校准方法",
                "学会用九宫格做人才盘点与策略制定",
                "搭建关键岗位继任梯队与B角机制"
            ],
            topics: ["企业领导力DNA", "七维领导力深度解读", "领导力评测与校准", "人才九宫格课堂演练", "人才盘点结果解读", "关键岗位继任地图", "后备人员（B角）管理", "继任者发展计划"],
            outcomes: [
                "产出关键岗位继任梯队地图",
                "明确高潜与关键人才的培养策略",
                "建立B角与继任管理机制"
            ]
        },
        "高效选人：结构化面试与选人用人": {
            badge: "talent",
            label: "人才发展",
            desc: "面向一线管理者与业务面试官，掌握结构化面试与行为面试法，选对人、少踩坑。",
            duration: "4-8小时",
            size: "25人以内",
            target: "业务面试官、一线管理者",
            method: "工作坊 + 面试演练 + 案例复盘",
            objectives: [
                "理解选人失误的代价与常见误区",
                "掌握人才画像与岗位胜任要素的提炼方法",
                "学会结构化面试与行为面试（STAR）技巧",
                "提升面试评估与决策的准确性"
            ],
            topics: ["选人失误的成本", "人才画像设计", "胜任力要素提炼", "结构化面试设计", "行为面试STAR法", "提问与追问技巧", "面试中的判断偏差", "面试评估与决策"],
            outcomes: [
                "掌握一套结构化面试工具",
                "完成目标岗位面试题库草案",
                "显著提升面试判断准确度"
            ]
        },
        "培训体系搭建与内训师（TTT）培养": {
            badge: "talent",
            label: "人才发展",
            desc: "从课程清单到讲师队伍，搭建可持续运转的企业培训体系与内训师机制。",
            duration: "4-8小时/期，可分期交付",
            size: "HR团队 + 内训师",
            target: "HR负责人、内训师队伍",
            method: "体系共创 + 讲师实训 + 试讲点评",
            objectives: [
                "掌握企业培训体系的搭建逻辑与年度规划方法",
                "学会内部课程的开发与迭代流程",
                "掌握讲师授课技巧与课堂引导能力",
                "建立内训师选拔、认证与激励机制"
            ],
            topics: ["培训体系框架", "需求调研与课程清单", "年度培训计划排期", "课程开发方法", "讲师授课技巧", "课堂引导与互动", "试讲与点评反馈", "内训师认证与激励"],
            outcomes: [
                "产出企业年度培训体系框架",
                "内训师完成试讲并获得反馈",
                "建立可持续的培训运营机制"
            ]
        },
        "职级体系与任职资格设计": {
            badge: "talent",
            label: "人才发展",
            desc: "梳理岗位序列与职级通道，设计任职资格标准，让\"人往哪里成长\"有据可依。",
            duration: "4-8小时/期，可分期交付",
            size: "管理层 + HR项目组",
            target: "企业高管、HR负责人",
            method: "项目式共创 + 岗位分析 + 评审校准",
            objectives: [
                "理解职级体系的整体框架与设计原则",
                "掌握岗位序列划分与职级通道设计方法",
                "学会任职资格标准的提炼与分级描述",
                "建立职级评审与晋升管理机制"
            ],
            topics: ["职级体系整体框架", "岗位序列划分", "职级通道设计（管理/专业双通道）", "任职资格标准提炼", "分级行为描述", "职级评审流程", "晋升与调薪联动", "体系落地与沟通"],
            outcomes: [
                "产出企业职级体系框架草案",
                "明确各序列任职资格标准",
                "建立职级评审与晋升机制"
            ]
        },
        "从管理者到教练": {
            badge: "senior",
            label: "高层领导",
            desc: "从管控到赋能，掌握教练式领导力与GROW模型，用提问激发员工内驱力。",
            duration: "4-8小时",
            size: "20人以内",
            target: "中高层管理者、团队负责人",
            method: "教练演示 + 实操练习 + 小组教练",
            objectives: [
                "理解教练式管理与传统管理的本质区别",
                "掌握GROW教练模型的完整流程",
                "学会用教练式提问激发员工内驱力",
                "掌握IDP个人发展计划辅导方法"
            ],
            topics: ["教练的定义与传统指导的区别", "教练思维与五项原则", "GROW模型完整流程", "教练式提问技巧", "积极聆听与反馈", "员工教练与Q12", "IDP辅导全流程", "小组教练实战练习"],
            outcomes: [
                "完成完整的教练式对话练习",
                "掌握员工IDP辅导全流程",
                "团队自驱力与责任感显著提升"
            ]
        },
        "高管领导力修炼": {
            badge: "senior",
            label: "高层领导",
            desc: "面向高管的深度领导力发展，聚焦战略视野、组织洞察与领导力突破。",
            duration: "4-8小时",
            size: "1对1 / 小班制",
            target: "企业高管、事业部负责人",
            method: "1对1教练 + 案例研讨 + 行动学习",
            objectives: [
                "提升战略思维与商业洞察力",
                "深化组织诊断与系统思考能力",
                "突破个人领导力瓶颈与盲区",
                "构建引领组织转型的变革领导力"
            ],
            topics: ["战略思维框架", "商业洞察与判断", "组织诊断方法", "系统思考", "影响力与决策", "高管团队协作", "变革领导力", "个人领导力发展计划"],
            outcomes: [
                "完成个人领导力360度评估与发展计划",
                "突破1-2个关键领导力瓶颈",
                "建立高管同伴学习社群"
            ]
        },
        "组织文化与变革": {
            badge: "senior",
            label: "高层领导",
            desc: "诊断组织文化现状，搭建价值观行为体系，引领文化转型与组织变革落地。",
            duration: "4-8小时/期，可分期交付",
            size: "管理层团队",
            target: "企业高管、HR负责人",
            method: "诊断工作坊 + 战略研讨 + 行动学习",
            objectives: [
                "掌握组织文化诊断的模型与方法",
                "搭建企业价值观与行为定义体系",
                "理解变革管理的关键步骤",
                "设计文化变革的落地路径"
            ],
            topics: ["组织文化诊断模型", "文化现状与期望差距", "价值观提炼与行为定义", "文化传播与落地", "变革管理八步骤", "变革中的沟通", "组织健康评估", "文化固化机制"],
            outcomes: [
                "完成组织文化现状诊断",
                "产出价值观行为定义体系",
                "制定文化变革落地路线图"
            ]
        },
        "战略解码与战略共识工作坊": {
            badge: "senior",
            label: "高层领导",
            desc: "从\"五看三定\"到战略地图，让高管团队对齐战略、拆解目标、共担结果。",
            duration: "4-8小时/期，可分期交付",
            size: "高管团队",
            target: "企业高管、事业部负责人",
            method: "战略共创 + 引导式研讨 + 行动承诺",
            objectives: [
                "掌握战略洞察与战略制定的基本框架",
                "带领团队形成对战略方向的共识",
                "把战略拆解为可执行的目标与举措",
                "建立战略落地的责任与追踪机制"
            ],
            topics: ["战略洞察\"五看\"", "战略制定\"三定\"", "业务领先模型BLM", "战略地图与平衡计分卡", "战略解码到部门与个人", "关键举措与里程碑", "资源与风险分析", "行动承诺与追踪"],
            outcomes: [
                "产出一份团队战略共识成果",
                "形成战略解码到部门的路径",
                "明确责任人与里程碑"
            ]
        }
    };

    // ============================================
    // Course Card Click - Open Modal
    // ============================================
    var courseCards = document.querySelectorAll('.course-card');
    var modal = document.getElementById('courseModal');

    courseCards.forEach(function(card) {
        card.addEventListener('click', function() {
            var titleEl = this.querySelector('.course-content h3');
            if (!titleEl) return;
            var title = titleEl.textContent.trim();
            var data = courseData[title];
            if (data) {
                openModal(title, data);
            }
        });
    });

    // ============================================
    // Modal Controls
    // ============================================
    var modalCloseBtn = document.querySelector('.modal-close');
    var modalOverlay = document.querySelector('.modal-overlay');

    function openModal(title, data) {
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalDesc').textContent = data.desc;
        document.getElementById('modalDuration').textContent = data.duration;
        document.getElementById('modalSize').textContent = data.size;
        document.getElementById('modalTarget').textContent = data.target;
        document.getElementById('modalMethod').textContent = data.method;

        var badge = document.getElementById('modalBadge');
        badge.textContent = data.label;
        badge.className = 'modal-hero-badge ' + data.badge;

        // Objectives
        var objList = document.getElementById('modalObjectives');
        objList.innerHTML = '';
        data.objectives.forEach(function(item) {
            var li = document.createElement('li');
            li.textContent = item;
            objList.appendChild(li);
        });

        // Topics
        var topicsWrap = document.getElementById('modalTopics');
        topicsWrap.innerHTML = '';
        data.topics.forEach(function(topic) {
            var span = document.createElement('span');
            span.textContent = topic;
            topicsWrap.appendChild(span);
        });

        // Outcomes
        var outList = document.getElementById('modalOutcomes');
        outList.innerHTML = '';
        data.outcomes.forEach(function(item) {
            var li = document.createElement('li');
            li.textContent = item;
            outList.appendChild(li);
        });

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    window.closeModal = function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // ============================================
    // Navigation
    // ============================================
    var navbar = document.getElementById('navbar');
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');
    var navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNavLink();
    });

    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    function updateActiveNavLink() {
        var sections = document.querySelectorAll('section[id]');
        var scrollPos = window.scrollY + 100;
        sections.forEach(function(section) {
            var top = section.offsetTop;
            var bottom = top + section.offsetHeight;
            var id = section.getAttribute('id');
            navLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ============================================
    // Stats Counter
    // ============================================
    function animateCounters() {
        var statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(function(el) {
            var target = parseInt(el.getAttribute('data-target'));
            if (isNaN(target)) return;
            var current = 0;
            var increment = Math.ceil(target / 40);
            var timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                el.textContent = current;
            }, 40);
        });
    }

    var statsSection = document.querySelector('.stats');
    var counterTriggered = false;

    function checkStatsVisibility() {
        if (counterTriggered) return;
        if (!statsSection) return;
        var rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            counterTriggered = true;
            animateCounters();
        }
    }

    window.addEventListener('scroll', checkStatsVisibility);
    checkStatsVisibility();

    // ============================================
    // Course Tabs
    // ============================================
    var tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            tabBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');

            var filter = btn.getAttribute('data-tab');

            courseCards.forEach(function(card) {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    card.style.display = card.getAttribute('data-level') === filter ? 'block' : 'none';
                }
            });
        });
    });

    // ============================================
    // Testimonial Carousel
    // ============================================
    var track = document.getElementById('testimonialTrack');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    var dotsContainer = document.getElementById('carouselDots');

    if (track && prevBtn && nextBtn) {
        var slides = track.querySelectorAll('.testimonial-card');
        var currentSlide = 0;
        var totalSlides = slides.length;

        for (var i = 0; i < totalSlides; i++) {
            var dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('data-index', i);
            dot.addEventListener('click', function() {
                goToSlide(parseInt(this.getAttribute('data-index')));
            });
            dotsContainer.appendChild(dot);
        }

        var dots = dotsContainer.querySelectorAll('.dot');

        function goToSlide(index) {
            currentSlide = index;
            track.style.transform = 'translateX(-' + (index * 100) + '%)';
            dots.forEach(function(d) { d.classList.remove('active'); });
            dots[index].classList.add('active');
        }

        prevBtn.addEventListener('click', function() {
            var index = currentSlide - 1;
            if (index < 0) index = totalSlides - 1;
            goToSlide(index);
        });

        nextBtn.addEventListener('click', function() {
            var index = currentSlide + 1;
            if (index >= totalSlides) index = 0;
            goToSlide(index);
        });

        var autoplayInterval = setInterval(function() {
            var index = currentSlide + 1;
            if (index >= totalSlides) index = 0;
            goToSlide(index);
        }, 5000);

        var carousel = document.querySelector('.testimonial-carousel');
        carousel.addEventListener('mouseenter', function() {
            clearInterval(autoplayInterval);
        });
        carousel.addEventListener('mouseleave', function() {
            autoplayInterval = setInterval(function() {
                var index = currentSlide + 1;
                if (index >= totalSlides) index = 0;
                goToSlide(index);
            }, 5000);
        });
    }

    // ============================================
    // Contact Form
    // ============================================
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var submitBtn = contactForm.querySelector('.btn-submit');
            var originalText = submitBtn.textContent;
            submitBtn.textContent = '发送中...';
            submitBtn.disabled = true;

            setTimeout(function() {
                submitBtn.textContent = '✓ 已发送';
                submitBtn.style.background = '#4a8c3f';
                setTimeout(function() {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    contactForm.reset();
                }, 3000);
            }, 1500);
        });
    }

    // ============================================
    // Scroll Animation
    // ============================================
    var animateElements = document.querySelectorAll(
        '.service-card, .course-card, .step, .about-content, .contact-content, .contact-info'
    );

    animateElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    function checkVisibility() {
        animateElements.forEach(function(el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    // ============================================
    // Smooth scroll for anchor links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});
