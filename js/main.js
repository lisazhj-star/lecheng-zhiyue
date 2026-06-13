/* ============================================
   乐诚智悦 - 网站交互脚本 V2
   LeCheng ZhiYue Consulting
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // Course Data - Complete details for all courses
    // ============================================
    var courseData = {
        '新手管理成长训练营': {
            badge: 'basic',
            label: '基层管理',
            desc: '从专业到管理的全面转身，理解管理本质，建立管理思维框架，掌握教练式沟通技巧。多位企业管理者验证的经典实战课程。',
            duration: '2天集中工作坊',
            size: '30人以内',
            target: '新晋/预备管理者',
            method: '工作坊 + 案例研讨 + 角色扮演',
            objectives: [
                '理解管理与被管理的本质差异，完成角色认知转变',
                '识别常见管理误区，建立正确的管理心智模式',
                '掌握教练式沟通方法，有效进行员工辅导与反馈',
                '学会目标设定与任务分配的核心技巧'
            ],
            topics: ['管理角色认知', '管理误区解析', '目标设定', '教练式沟通', '任务分配', '绩效反馈', '团队激励', '行动计划'],
            outcomes: [
                '完成从"做事"到"带人"的思维转变',
                '掌握至少3种教练式沟通工具',
                '制定个人90天管理转身行动计划'
            ]
        },
        '结构性思维': {
            badge: 'basic',
            label: '基层管理',
            desc: '基于金字塔原理的结构化思维训练，帮助管理者提升逻辑表达、汇报呈现与问题分析解决能力，让沟通更高效、更有说服力。',
            duration: '1-2天',
            size: '30人以内',
            target: '需要提升结构化思维的各级管理者',
            method: '案例教学 + 实操练习 + 小组研讨',
            objectives: [
                '掌握金字塔原理的核心原则与构建方法',
                '提升汇报与沟通的逻辑性与说服力',
                '学会结构化分析问题的思考框架',
                '能够在30秒内清晰表达核心观点'
            ],
            topics: ['金字塔原理', '高效表达', '问题分析解决', '结论先行', '归纳与演绎', 'MECE原则', 'SCQA模型', '汇报呈现'],
            outcomes: [
                '建立结构化思维方式，工作汇报更加清晰有力',
                '掌握问题分析的系统方法',
                '提升跨部门沟通效率'
            ]
        },
        '管理者时间管理': {
            badge: 'basic',
            label: '基层管理',
            desc: '帮助管理者掌握高效时间管理方法论，突破"忙碌但低效"的困境，学会要事优先，提升个人与团队的整体工作效能。',
            duration: '1天工作坊',
            size: '30人以内',
            target: '各级管理者及高潜人才',
            method: '实操工作坊 + 工具演练 + 复盘',
            objectives: [
                '建立正确的时间管理理念，区分紧急与重要',
                '掌握时间管理四象限法并应用到日常工作',
                '学会要事优先的决策方法',
                '建立有效的复盘与计划机制'
            ],
            topics: ['时间管理矩阵', '要事优先', '复盘与计划', 'GTD方法', '效能提升', '目标分解', '番茄工作法', '周/日计划'],
            outcomes: [
                '建立个性化时间管理体系',
                '每周节省3-5小时高效工作时间',
                '团队整体产出效率可量化提升'
            ]
        },
        '管理者沟通与信任': {
            badge: 'basic',
            label: '基层管理',
            desc: '深入理解职场沟通的本质，掌握共情式聆听与提问技巧，建立基于信任的上下级关系，实现从"说"到"听"的管理升级。',
            duration: '1-2天',
            size: '25人以内',
            target: '期望提升沟通影响力的管理者',
            method: '体验式学习 + 情景模拟 + 反馈练习',
            objectives: [
                '理解沟通的本质——信任的构建与维护',
                '掌握共情式聆听与提问的技巧',
                '学会与不同风格的下属进行有效沟通',
                '建立信任公式并应用于管理实践'
            ],
            topics: ['共情式沟通', '信任公式', '教练式提问', '积极聆听', '非暴力沟通', '反馈与批评', '情绪管理', '难谈对话'],
            outcomes: [
                '团队信任度提升，沟通成本显著降低',
                '掌握4种以上实用沟通工具',
                '能够自信处理工作中的困难对话'
            ]
        },
        '高效会议管理': {
            badge: 'basic',
            label: '基层管理',
            desc: '从会议策划到执行跟进的全流程管理方法，让每一分钟会议时间都产生价值，告别"会而不议、议而不决"的困境。',
            duration: '1天工作坊',
            size: '30人以内',
            target: '需要频繁组织会议的各级管理者',
            method: '工作坊 + 模拟演练 + 工具实操',
            objectives: [
                '掌握高效会议的五步设计法',
                '学习引导式会议的核心技巧',
                '建立会议跟进行动闭环机制',
                '能够将会议时间缩减30%以上'
            ],
            topics: ['会议设计五步法', '引导式会议', '行动跟进', '会议目标设定', '参会者管理', '决策机制', '会议文化', '远程会议'],
            outcomes: [
                '会议效率提升50%以上',
                '建立团队高效会议文化',
                '掌握引导式会议主持技巧'
            ]
        },
        '目标管理·拥抱OKR': {
            badge: 'mid',
            label: '中层管理',
            desc: '系统学习OKR目标管理方法论，掌握从目标设定到关键结果分解的全流程，实现团队目标对齐与高效执行。',
            duration: '1-2天',
            size: '25人以内',
            target: '部门负责人、团队Leader',
            method: '理论 + 实操工作坊 + 案例研讨',
            objectives: [
                '理解OKR的本质与核心价值',
                '掌握OKR制定与分解的方法论',
                '学会目标对齐——从公司到个人',
                '建立目标驱动的过程追踪机制'
            ],
            topics: ['OKR制定', '目标对齐', '过程追踪', 'KR设计', '每周Check-in', 'OKR vs KPI', '目标拆解', '复盘优化'],
            outcomes: [
                '完成一份高质量团队OKR方案',
                '建立目标追踪与复盘机制',
                '团队目标共识度提升80%'
            ]
        },
        '优势团队激活工作坊': {
            badge: 'mid',
            label: '中层管理',
            desc: '基于Gallup克利夫顿优势识别器，帮助管理者识别自身与团队成员的优势才干，构建优势互补的高绩效团队。盖洛普全球认证教练亲自带领。',
            duration: '2天工作坊',
            size: '20人以内',
            target: '希望打造高绩效团队的管理者',
            method: 'Gallup测评 + 体验式工作坊 + 团队教练',
            objectives: [
                '了解自身及团队成员的优势才干',
                '掌握基于优势的管理与沟通方法',
                '学习如何构建优势互补的高效团队',
                '制定团队优势发展行动计划'
            ],
            topics: ['优势识别', '团队优势组合', '优势领导力', '34项才干', '优势与协作', '优势与绩效', '优势地图', '优势沟通'],
            outcomes: [
                '每位成员获得个人优势识别报告',
                '团队建立"优势语言"沟通体系',
                '团队敬业度与协作效率显著提升'
            ]
        },
        '绩效管理与平衡计分卡': {
            badge: 'mid',
            label: '中层管理',
            desc: '从战略到执行的绩效管理体系设计，掌握平衡计分卡方法，建立科学有效的绩效管理与评估机制，驱动组织目标达成。',
            duration: '1-2天',
            size: '25人以内',
            target: '中高层管理者、HR管理者',
            method: '战略研讨会 + 案例实操 + 工具演练',
            objectives: [
                '理解绩效管理的完整闭环体系',
                '掌握平衡计分卡的四个维度设计方法',
                '学会制定科学的绩效指标与目标',
                '掌握绩效面谈与辅导的关键技巧'
            ],
            topics: ['绩效指标设计', '平衡计分卡', '绩效面谈', 'KPI设计', '战略地图', '目标分解', '绩效评估', '改进计划'],
            outcomes: [
                '完成部门级平衡计分卡草案',
                '掌握绩效面谈的GROW模型',
                '建立科学的绩效评估体系'
            ]
        },
        '社交风格与影响力': {
            badge: 'mid',
            label: '中层管理',
            desc: '识己解彼，掌握四大社交风格的识别与适应方法，提升跨部门影响力与协作能力，成为高效的横向管理者。',
            duration: '1天工作坊',
            size: '25人以内',
            target: '需要提升跨部门协作影响力的管理者',
            method: '测评 + 体验工作坊 + 角色扮演',
            objectives: [
                '识别自己和他人的社交风格特征',
                '学习适应不同风格的有效沟通策略',
                '提升跨部门协作与横向影响力',
                '建立基于信任的协作关系'
            ],
            topics: ['社交风格识别', '影响力策略', '跨部门协作', '风格适应', '信任构建', '横向领导力', '冲突化解', '利益相关者管理'],
            outcomes: [
                '精准识别个人社交风格图谱',
                '掌握适应4种风格的方法策略',
                '跨部门协作效率提升30%'
            ]
        },
        '从管理者到教练': {
            badge: 'senior',
            label: '高层领导',
            desc: '掌握教练式领导力精髓，从管控到赋能，学会通过提问而非命令激发员工潜能，建立高绩效教练文化。',
            duration: '2天集训',
            size: '20人以内',
            target: '中高层管理者、团队负责人',
            method: '教练演示 + 实操练习 + 小组教练',
            objectives: [
                '理解教练式管理与传统管理的本质区别',
                '掌握GROW教练模型的完整流程',
                '学会用教练式提问激发员工内驱力',
                '掌握IDP个人发展计划辅导方法'
            ],
            topics: ['教练思维', 'GROW模型', 'IDP辅导', '教练式提问', '积极聆听', '赋予力量', '目标设定', '问责机制'],
            outcomes: [
                '完成3次完整的教练式对话练习',
                '掌握员工IDP辅导全流程',
                '团队自驱力与责任感显著提升'
            ]
        },
        '高管领导力修炼': {
            badge: 'senior',
            label: '高层领导',
            desc: '面向高管的深度领导力发展项目，聚焦战略视野、组织洞察与领导力提升，助力实现从优秀到卓越的跨越。',
            duration: '定制化',
            size: '1对1 / 小班制',
            target: '企业高管、事业部负责人',
            method: '1对1教练 + 案例研讨 + 行动学习',
            objectives: [
                '提升战略思维与商业洞察力',
                '深化组织诊断与系统思考能力',
                '突破个人领导力瓶颈与盲区',
                '构建变革领导力——引领组织转型'
            ],
            topics: ['战略思维', '组织诊断', '变革领导力', '系统思考', '影响力', '决策艺术', '高管风范', '领导力哲学'],
            outcomes: [
                '个人领导力360度评估与发展计划',
                '突破1-2个关键领导力瓶颈',
                '建立高管同伴学习社群'
            ]
        },
        '组织文化与变革': {
            badge: 'senior',
            label: '高层领导',
            desc: '系统诊断组织文化现状，掌握变革管理的理论与工具，引领组织文化转型，构建可持续发展的健康组织。',
            duration: '定制化',
            size: '管理层团队',
            target: '企业高管、HR负责人',
            method: '诊断工作坊 + 战略研讨 + 行动学习',
            objectives: [
                '掌握组织文化诊断的模型与方法',
                '理解变革管理的八个步骤',
                '学会设计文化变革的落地路径',
                '构建组织健康的评估与改进机制'
            ],
            topics: ['文化诊断', '变革管理', '组织健康', '文化重塑', '变革沟通', '利益相关者管理', '文化固化', '可持续性'],
            outcomes: [
                '完成组织文化现状诊断报告',
                '制定文化变革路线图',
                '建立组织健康监测指标'
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
