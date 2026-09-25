/* ============================================
   乐诚智悦 · 微课交互脚本
   ============================================ */

/* ---------- 邀请码设置 ----------
   修改下面的 ACCESS_CODE 即可更换邀请码。
   注意：这是前端的"软门槛"，用于礼貌性控流，
   不能等同于账号级安全保护。
--------------------------------- */
var ACCESS_CODE = 'LCZY2026';

(function () {
    'use strict';

    /* ---------- 安全的本地存储包装 ---------- */
    var store = {
        get: function (k) {
            try { return window.localStorage.getItem(k); } catch (e) { return null; }
        },
        set: function (k, v) {
            try { window.localStorage.setItem(k, v); } catch (e) { /* 忽略 */ }
        }
    };

    var UNLOCK_KEY = 'lczy_micro_zhuanxing_unlocked';

    var gate = document.getElementById('gate');
    var gateCard = document.getElementById('gateCard');
    var gateForm = document.getElementById('gateForm');
    var gateInput = document.getElementById('gateInput');
    var gateError = document.getElementById('gateError');
    var course = document.getElementById('course');

    /* ============================================
       邀请码闸门
       ============================================ */
    function unlock() {
        gate.classList.add('is-hidden');
        course.hidden = false;
        document.body.style.overflow = '';
        initCourse();
    }

    function initGate() {
        if (store.get(UNLOCK_KEY) === '1') {
            unlock();
            return;
        }
        document.body.style.overflow = 'hidden';
        gateInput.focus();

        gateForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var val = (gateInput.value || '').trim();
            if (val.toUpperCase() === ACCESS_CODE.toUpperCase()) {
                store.set(UNLOCK_KEY, '1');
                gateError.textContent = '';
                unlock();
            } else {
                gateError.textContent = '邀请码不正确，请核对后重试';
                gateInput.value = '';
                gateCard.classList.remove('gate-shake');
                void gateCard.offsetWidth;   /* 重置动画 */
                gateCard.classList.add('gate-shake');
            }
        });
    }

    /* ============================================
       微课正文交互
       ============================================ */
    var initialized = false;

    function initCourse() {
        if (initialized) return;
        initialized = true;

        initProgress();
        initNavHighlight();
        initReflections();
        initQuiz();
        initChecklist();
    }

    /* ---------- 阅读进度条 ---------- */
    function initProgress() {
        var fill = document.getElementById('progressFill');
        if (!fill) return;

        function update() {
            var doc = document.documentElement;
            var scrollable = doc.scrollHeight - window.innerHeight;
            var pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
            fill.style.width = Math.min(100, Math.max(0, pct)) + '%';
        }

        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
    }

    /* ---------- 导航高亮 ---------- */
    function initNavHighlight() {
        var links = Array.prototype.slice.call(document.querySelectorAll('.micro-nav a'));
        if (!links.length) return;

        var sections = links
            .map(function (a) {
                var id = a.getAttribute('href').replace('#', '');
                return { link: a, el: document.getElementById(id) };
            })
            .filter(function (s) { return s.el; });

        function update() {
            var pos = window.scrollY + 120;
            var current = sections[0];
            sections.forEach(function (s) {
                if (s.el.offsetTop <= pos) current = s;
            });
            links.forEach(function (a) { a.classList.remove('active'); });
            if (current) current.link.classList.add('active');
        }

        window.addEventListener('scroll', update, { passive: true });
        update();
    }

    /* ---------- 反思输入：本机保存 ---------- */
    function initReflections() {
        var areas = document.querySelectorAll('.reflect-input');
        Array.prototype.forEach.call(areas, function (ta) {
            var key = 'lczy_micro_zhuanxing_reflect_' + (ta.getAttribute('data-key') || 'x');
            var box = ta.parentElement.querySelector('.saved');

            var saved = store.get(key);
            if (saved) {
                ta.value = saved;
                if (box) box.textContent = '已恢复上次填写的内容';
            }

            var timer = null;
            ta.addEventListener('input', function () {
                if (timer) clearTimeout(timer);
                timer = setTimeout(function () {
                    store.set(key, ta.value);
                    if (box) {
                        box.textContent = '已保存到本机 ✓';
                        setTimeout(function () { box.textContent = ''; }, 1800);
                    }
                }, 400);
            });
        });
    }

    /* ---------- 小测验 ---------- */
    function initQuiz() {
        var items = document.querySelectorAll('.quiz-item');
        Array.prototype.forEach.call(items, function (item) {
            var answer = parseInt(item.getAttribute('data-answer'), 10);
            var opts = item.querySelectorAll('.quiz-opt');
            var feedback = item.querySelector('.quiz-feedback');

            Array.prototype.forEach.call(opts, function (btn, idx) {
                btn.addEventListener('click', function () {
                    Array.prototype.forEach.call(opts, function (b) {
                        b.disabled = true;
                        b.classList.remove('correct', 'wrong');
                    });
                    if (idx === answer) {
                        btn.classList.add('correct');
                    } else {
                        btn.classList.add('wrong');
                        if (opts[answer]) opts[answer].classList.add('correct');
                    }
                    if (feedback) feedback.classList.add('show');
                });
            });
        });
    }

    /* ---------- 自检清单 ---------- */
    function initChecklist() {
        var boxes = document.querySelectorAll('.check-item');
        Array.prototype.forEach.call(boxes, function (cb) {
            var key = 'lczy_micro_zhuanxing_check_' + (cb.getAttribute('data-key') || 'x');
            if (store.get(key) === '1') cb.checked = true;

            cb.addEventListener('change', function () {
                store.set(key, cb.checked ? '1' : '0');
            });
        });
    }

    /* ---------- 启动 ---------- */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGate);
    } else {
        initGate();
    }
})();
