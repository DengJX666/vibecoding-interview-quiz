(function () {
  'use strict';

  var BANK = window.QUESTION_BANK || [];
  var STORAGE_KEY = 'vibecoding_interview_quiz_v1';
  var LETTERS = 'ABCDEFGHIJ';
  var TYPE_LABEL = {
    single: '单选题',
    multiple: '多选题',
    judge: '判断题',
    open: '简答题'
  };

  var state = {
    category: 'all',
    type: 'all',
    level: 'all',
    difficulty: 'all',
    status: 'all',
    shuffle: false,
    view: [],
    index: 0,
    answers: {},
    starred: {},
    draft: {},
    revealed: {}
  };

  var shuffleRanks = new Map();

  var $ = function (sel) {
    return document.querySelector(sel);
  };

  var els = {
    answered: $('#stat-answered'),
    correct: $('#stat-correct'),
    rate: $('#stat-rate'),
    categoryList: $('#category-list'),
    typeList: $('#type-list'),
    levelList: $('#level-list'),
    difficultyList: $('#difficulty-list'),
    statusList: $('#status-list'),
    shuffle: $('#shuffle-toggle'),
    reset: $('#reset-btn'),
    prev: $('#prev-btn'),
    next: $('#next-btn'),
    progress: $('#progress-text'),
    card: $('#question-card'),
    pager: $('#pager'),
    toast: $('#toast')
  };

  /* ---------- 工具函数 ---------- */

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[ch];
    });
  }

  function byId(id) {
    for (var i = 0; i < BANK.length; i++) {
      if (BANK[i].id === id) return BANK[i];
    }
    return null;
  }

  function currentQuestion() {
    var id = state.view[state.index];
    return id ? byId(id) : null;
  }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var sa = a.slice().sort(function (x, y) {
      return x - y;
    });
    var sb = b.slice().sort(function (x, y) {
      return x - y;
    });
    for (var i = 0; i < sa.length; i++) {
      if (sa[i] !== sb[i]) return false;
    }
    return true;
  }

  function formatAnswer(q, indexes) {
    if (!indexes || !indexes.length) return '未作答';
    return indexes
      .slice()
      .sort(function (a, b) {
        return a - b;
      })
      .map(function (i) {
        if (q.type === 'judge') return LETTERS[i] + '（' + q.options[i] + '）';
        return LETTERS[i];
      })
      .join('、');
  }

  function toast(message) {
    els.toast.textContent = message;
    els.toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () {
      els.toast.classList.remove('show');
    }, 1800);
  }

  function scrollToCard() {
    if (els.card && els.card.scrollIntoView) {
      els.card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function levelClass(level) {
    if (level === '高') return 'high';
    if (level === '低') return 'low';
    return 'mid';
  }

  function difficultyClass(difficulty) {
    if (difficulty === '基础') return 'basic';
    if (difficulty === '高难') return 'hard';
    return 'mid';
  }

  /* ---------- 本地存储 ---------- */

  function save() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          category: state.category,
          type: state.type,
          level: state.level,
          difficulty: state.difficulty,
          status: state.status,
          shuffle: state.shuffle,
          index: state.index,
          answers: state.answers,
          starred: state.starred,
          revealed: state.revealed
        })
      );
    } catch (e) {
      /* 本地存储不可用时静默忽略 */
    }
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      if (!data || typeof data !== 'object') return;

      if (typeof data.category === 'string') state.category = data.category;
      if (typeof data.type === 'string') state.type = data.type;
      if (typeof data.level === 'string') state.level = data.level;
      if (typeof data.difficulty === 'string') state.difficulty = data.difficulty;
      if (typeof data.status === 'string') state.status = data.status;
      state.shuffle = !!data.shuffle;

      if (data.answers && typeof data.answers === 'object') {
        Object.keys(data.answers).forEach(function (id) {
          var item = data.answers[id];
          if (!byId(id)) return;
          if (!item || !Array.isArray(item.selected) || typeof item.correct !== 'boolean') return;
          state.answers[id] = {
            selected: item.selected.filter(function (n) {
              return typeof n === 'number';
            }),
            correct: item.correct
          };
        });
      }

      if (data.starred && typeof data.starred === 'object') {
        Object.keys(data.starred).forEach(function (id) {
          if (byId(id) && data.starred[id]) state.starred[id] = true;
        });
      }

      if (data.revealed && typeof data.revealed === 'object') {
        Object.keys(data.revealed).forEach(function (id) {
          if (byId(id) && data.revealed[id]) state.revealed[id] = true;
        });
      }

      if (typeof data.index === 'number' && isFinite(data.index)) {
        state.index = Math.max(0, Math.floor(data.index));
      }
    } catch (e) {
      /* 数据损坏时忽略，使用默认状态 */
    }
  }

  /* ---------- 筛选与视图 ---------- */

  function matchStatus(q) {
    if (state.status === 'unanswered') return !state.answers[q.id];
    if (state.status === 'wrong') return !!state.answers[q.id] && !state.answers[q.id].correct;
    if (state.status === 'starred') return !!state.starred[q.id];
    return true;
  }

  function filteredList() {
    return BANK.filter(function (q) {
      if (state.category !== 'all' && q.category !== state.category) return false;
      if (state.type !== 'all' && q.type !== state.type) return false;
      if (state.level !== 'all' && q.level !== state.level) return false;
      if (state.difficulty !== 'all' && q.difficulty !== state.difficulty) return false;
      return matchStatus(q);
    });
  }

  function resetShuffleRanks() {
    var ids = BANK.map(function (q) {
      return q.id;
    });
    for (var i = ids.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = ids[i];
      ids[i] = ids[j];
      ids[j] = tmp;
    }
    shuffleRanks = new Map(
      ids.map(function (id, i) {
        return [id, i];
      })
    );
  }

  function rebuildView(resetIndex) {
    var currentId = state.view[state.index];
    var list = filteredList();

    if (state.shuffle) {
      if (shuffleRanks.size !== BANK.length) resetShuffleRanks();
      list = list.slice().sort(function (a, b) {
        return (shuffleRanks.get(a.id) || 0) - (shuffleRanks.get(b.id) || 0);
      });
    }

    state.view = list.map(function (q) {
      return q.id;
    });

    if (resetIndex) {
      state.index = 0;
    } else if (currentId && state.view.indexOf(currentId) !== -1) {
      state.index = state.view.indexOf(currentId);
    }

    if (state.index >= state.view.length) {
      state.index = Math.max(0, state.view.length - 1);
    }
  }

  /* ---------- 渲染 ---------- */

  function renderStats() {
    var answered = Object.keys(state.answers).length;
    var correct = Object.keys(state.answers).filter(function (id) {
      return state.answers[id].correct;
    }).length;
    var rate = answered ? Math.round((correct / answered) * 100) : 0;

    els.answered.textContent = answered + '/' + BANK.length;
    els.correct.textContent = String(correct);
    els.rate.textContent = rate + '%';
  }

  function countByLevel(level) {
    return BANK.filter(function (q) {
      return q.level === level;
    }).length;
  }

  function countByDifficulty(difficulty) {
    return BANK.filter(function (q) {
      return q.difficulty === difficulty;
    }).length;
  }

  function renderFilters() {
    var categories = [];
    BANK.forEach(function (q) {
      if (categories.indexOf(q.category) === -1) categories.push(q.category);
    });

    var catHtml = [
      '<button class="chip ' +
        (state.category === 'all' ? 'active' : '') +
        '" data-cat="all">全部<span class="chip-count">' +
        BANK.length +
        '</span></button>'
    ];
    categories.forEach(function (cat) {
      var total = 0;
      var done = 0;
      BANK.forEach(function (q) {
        if (q.category !== cat) return;
        total++;
        if (state.answers[q.id]) done++;
      });
      catHtml.push(
        '<button class="chip ' +
          (state.category === cat ? 'active' : '') +
          '" data-cat="' +
          esc(cat) +
          '">' +
          esc(cat) +
          '<span class="chip-count">' +
          done +
          '/' +
          total +
          '</span></button>'
      );
    });
    els.categoryList.innerHTML = catHtml.join('');

    var types = [
      { value: 'all', label: '全部', count: BANK.length },
      {
        value: 'single',
        label: '单选题',
        count: BANK.filter(function (q) {
          return q.type === 'single';
        }).length
      },
      {
        value: 'multiple',
        label: '多选题',
        count: BANK.filter(function (q) {
          return q.type === 'multiple';
        }).length
      },
      {
        value: 'judge',
        label: '判断题',
        count: BANK.filter(function (q) {
          return q.type === 'judge';
        }).length
      },
      {
        value: 'open',
        label: '简答题',
        count: BANK.filter(function (q) {
          return q.type === 'open';
        }).length
      }
    ];
    els.typeList.innerHTML = types
      .map(function (item) {
        return (
          '<button class="chip ' +
          (state.type === item.value ? 'active' : '') +
          '" data-type="' +
          item.value +
          '">' +
          item.label +
          '<span class="chip-count">' +
          item.count +
          '</span></button>'
        );
      })
      .join('');

    var levels = [
      { value: 'all', label: '全部', count: BANK.length },
      { value: '高', label: '高概率', count: countByLevel('高') },
      { value: '中', label: '中概率', count: countByLevel('中') },
      { value: '低', label: '低概率', count: countByLevel('低') }
    ];
    els.levelList.innerHTML = levels
      .map(function (item) {
        return (
          '<button class="chip ' +
          (state.level === item.value ? 'active' : '') +
          '" data-level="' +
          item.value +
          '">' +
          item.label +
          '<span class="chip-count">' +
          item.count +
          '</span></button>'
        );
      })
      .join('');

    var difficulties = [
      { value: 'all', label: '全部', count: BANK.length },
      { value: '基础', label: '基础', count: countByDifficulty('基础') },
      { value: '进阶', label: '进阶', count: countByDifficulty('进阶') },
      { value: '高难', label: '高难', count: countByDifficulty('高难') }
    ];
    els.difficultyList.innerHTML = difficulties
      .map(function (item) {
        return (
          '<button class="chip ' +
          (state.difficulty === item.value ? 'active' : '') +
          '" data-difficulty="' +
          item.value +
          '">' +
          item.label +
          '<span class="chip-count">' +
          item.count +
          '</span></button>'
        );
      })
      .join('');

    var wrongCount = Object.keys(state.answers).filter(function (id) {
      return !state.answers[id].correct;
    }).length;
    var starredCount = Object.keys(state.starred).filter(function (id) {
      return state.starred[id];
    }).length;
    var unansweredCount = BANK.filter(function (q) {
      return !state.answers[q.id];
    }).length;

    var statuses = [
      { value: 'all', label: '全部', count: BANK.length },
      { value: 'unanswered', label: '未做', count: unansweredCount },
      { value: 'wrong', label: '错题', count: wrongCount },
      { value: 'starred', label: '收藏', count: starredCount }
    ];
    els.statusList.innerHTML = statuses
      .map(function (item) {
        return (
          '<button class="chip ' +
          (state.status === item.value ? 'active' : '') +
          '" data-status="' +
          item.value +
          '">' +
          item.label +
          '<span class="chip-count">' +
          item.count +
          '</span></button>'
        );
      })
      .join('');
  }

  function resultHtml(q, answer) {
    var ok = answer.correct;
    return (
      '<div class="result ' +
      (ok ? 'ok' : 'no') +
      '">' +
      '<div class="result-head">' +
      '<span class="badge ' +
      (ok ? 'ok' : 'no') +
      '">' +
      (ok ? '✓ 回答正确' : '✗ 回答错误') +
      '</span>' +
      '<span class="answer-item">你的答案：<b>' +
      esc(formatAnswer(q, answer.selected)) +
      '</b></span>' +
      '<span class="answer-item">正确答案：<b>' +
      esc(formatAnswer(q, q.answer)) +
      '</b></span>' +
      '</div>' +
      '<div class="explain">' +
      '<h3>详细解析</h3>' +
      '<p>' +
      esc(q.explanation) +
      '</p>' +
      '</div>' +
      '</div>'
    );
  }

  function openResultHtml(q, answer) {
    var assessed = !!answer;
    var cls = assessed ? (answer.correct ? 'ok' : 'no') : 'open';
    var badge;

    if (assessed) {
      badge =
        '<span class="badge ' +
        (answer.correct ? 'ok' : 'no') +
        '">' +
        (answer.correct ? '✓ 已掌握' : '✗ 待复习') +
        '</span>';
    } else {
      badge = '<span class="badge neutral">参考答案</span>';
    }

    return (
      '<div class="result ' +
      cls +
      '">' +
      '<div class="result-head">' +
      badge +
      '<span class="answer-item">先自己说一遍，再对照下面的要点</span>' +
      '</div>' +
      '<div class="explain">' +
      '<h3>参考答案</h3>' +
      '<p>' +
      esc(q.answerText || '') +
      '</p>' +
      '</div>' +
      '<div class="explain tips">' +
      '<h3>记忆要点</h3>' +
      '<p>' +
      esc(q.explanation || '') +
      '</p>' +
      '</div>' +
      '</div>'
    );
  }

  function renderQuestion() {
    var q = currentQuestion();

    if (!q) {
      els.card.className = 'card';
      els.card.innerHTML =
        '<div class="empty">' +
        '<div class="empty-icon">🗂️</div>' +
        '<h2>当前筛选没有题目</h2>' +
        '<p>换一个分类、题型、概率或难度试试，也可以清空全部筛选。</p>' +
        '<button class="btn primary" data-action="clear-filter">清空筛选</button>' +
        '</div>';
      els.progress.textContent = '没有符合条件的题目';
      els.prev.disabled = true;
      els.next.disabled = true;
      return;
    }

    var isOpen = q.type === 'open';
    var isMultiple = q.type === 'multiple';
    var answer = state.answers[q.id];
    var submitted = !!answer;
    var revealed = isOpen && (!!state.revealed[q.id] || submitted);
    var selected = submitted && !isOpen ? answer.selected : state.draft[q.id] || [];
    var level = q.level || '中';
    var difficulty = q.difficulty || '进阶';

    var optionsHtml = '';
    if (!isOpen) {
      optionsHtml = q.options
        .map(function (option, index) {
          var cls = 'option';
          if (submitted) {
            if (q.answer.indexOf(index) !== -1) cls += ' correct';
            else if (answer.selected.indexOf(index) !== -1) cls += ' wrong';
          } else if (selected.indexOf(index) !== -1) {
            cls += ' selected';
          }

          return (
            '<label class="' +
            cls +
            '" data-index="' +
            index +
            '">' +
            '<input type="' +
            (isMultiple ? 'checkbox' : 'radio') +
            '" name="opt-' +
            esc(q.id) +
            '" value="' +
            index +
            '"' +
            (selected.indexOf(index) !== -1 ? ' checked' : '') +
            (submitted ? ' disabled' : '') +
            '>' +
            '<span class="marker">' +
            LETTERS[index] +
            '</span>' +
            '<span class="option-text">' +
            esc(option) +
            '</span>' +
            '</label>'
          );
        })
        .join('');
    }

    var hint;
    if (isOpen) {
      hint = revealed
        ? '对照参考答案，检查自己漏了哪些要点（快捷键：1 记住了 / 2 没记住）'
        : '口述题：先自己完整回答一遍，再查看参考答案（快捷键：Enter）';
    } else {
      hint = isMultiple ? '多选题：选出所有正确选项后点击提交' : '选择一个答案后点击提交';
    }

    var actionsTop = '';
    var actionsBottom = '';

    if (isOpen) {
      if (!revealed) {
        actionsTop =
          '<div class="actions"><button class="btn primary" data-action="reveal">查看参考答案</button></div>';
      } else if (!submitted) {
        actionsBottom =
          '<div class="actions self-assess">' +
          '<button class="btn ghost" data-action="open-no">没记住，加入错题</button>' +
          '<button class="btn primary" data-action="open-ok">记住了</button>' +
          '</div>';
      } else {
        actionsBottom =
          '<div class="actions">' +
          '<button class="btn ghost" data-action="retry">重做本题</button>' +
          '<button class="btn primary" data-action="next">下一题 →</button>' +
          '</div>';
      }
    } else {
      actionsTop =
        '<div class="actions">' +
        (submitted
          ? '<button class="btn ghost" data-action="retry">重做本题</button>' +
            '<button class="btn primary" data-action="next">下一题 →</button>'
          : '<button class="btn primary" data-action="submit">提交答案</button>') +
        '</div>';
    }

    var resultHtmlValue = '';
    if (isOpen && revealed) resultHtmlValue = openResultHtml(q, answer);
    else if (!isOpen && submitted) resultHtmlValue = resultHtml(q, answer);

    var cardClass = 'card';
    if (submitted) cardClass += answer.correct ? ' is-correct' : ' is-wrong';
    else if (isOpen && revealed) cardClass += ' is-revealed';

    els.card.className = cardClass;
    els.card.innerHTML =
      '<div class="q-meta">' +
      '<span class="tag">' +
      esc(q.category) +
      '</span>' +
      '<span class="tag type">' +
      TYPE_LABEL[q.type] +
      '</span>' +
      '<span class="tag level-' +
      levelClass(level) +
      '">被问：' +
      level +
      '</span>' +
      '<span class="tag diff-' +
      difficultyClass(difficulty) +
      '">' +
      difficulty +
      '</span>' +
      '<span class="q-index">第 ' +
      (state.index + 1) +
      ' / ' +
      state.view.length +
      ' 题</span>' +
      '<button class="star-btn ' +
      (state.starred[q.id] ? 'active' : '') +
      '" data-action="star" title="收藏本题" aria-label="收藏本题">★</button>' +
      '</div>' +
      '<h2 class="q-title">' +
      esc(q.question) +
      '</h2>' +
      '<p class="q-hint">' +
      hint +
      '</p>' +
      (optionsHtml ? '<div class="options">' + optionsHtml + '</div>' : '') +
      actionsTop +
      resultHtmlValue +
      actionsBottom;

    els.progress.textContent =
      '第 ' + (state.index + 1) + ' / ' + state.view.length + ' 题';
    els.prev.disabled = state.index <= 0;
    els.next.disabled = state.index >= state.view.length - 1;
  }

  function renderPager() {
    if (!state.view.length) {
      els.pager.innerHTML = '';
      return;
    }

    els.pager.innerHTML = state.view
      .map(function (id, index) {
        var q = byId(id);
        var answer = state.answers[id];
        var cls = 'page-btn';
        if (index === state.index) cls += ' current';
        if (answer) cls += answer.correct ? ' ok' : ' no';
        return (
          '<button class="' +
          cls +
          '" data-index="' +
          index +
          '" title="' +
          esc(q ? q.question : '') +
          '">' +
          (index + 1) +
          '</button>'
        );
      })
      .join('');
  }

  function renderAll() {
    els.shuffle.checked = state.shuffle;
    renderStats();
    renderFilters();
    renderQuestion();
    renderPager();
  }

  /* ---------- 选择题交互 ---------- */

  function syncOptionUI() {
    var q = currentQuestion();
    if (!q || q.type === 'open') return;
    var draft = state.draft[q.id] || [];
    els.card.querySelectorAll('.option').forEach(function (el) {
      var index = Number(el.dataset.index);
      var on = draft.indexOf(index) !== -1;
      el.classList.toggle('selected', on);
      var input = el.querySelector('input');
      if (input) input.checked = on;
    });
  }

  function toggleOption(index) {
    var q = currentQuestion();
    if (!q || q.type === 'open' || state.answers[q.id]) return;
    var draft = state.draft[q.id] || [];

    if (q.type === 'multiple') {
      if (draft.indexOf(index) !== -1) {
        state.draft[q.id] = draft.filter(function (i) {
          return i !== index;
        });
      } else {
        state.draft[q.id] = draft.concat(index).sort(function (a, b) {
          return a - b;
        });
      }
    } else {
      state.draft[q.id] = [index];
    }
    syncOptionUI();
  }

  function submitAnswer() {
    var q = currentQuestion();
    if (!q || q.type === 'open' || state.answers[q.id]) return;

    var selected = state.draft[q.id] || [];
    if (!selected.length) {
      toast('请先选择答案');
      return;
    }

    state.answers[q.id] = {
      selected: selected.slice().sort(function (a, b) {
        return a - b;
      }),
      correct: sameSet(selected, q.answer)
    };

    save();
    renderStats();
    renderFilters();
    renderQuestion();
    renderPager();

    var result = els.card.querySelector('.result');
    if (result && result.scrollIntoView) {
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  /* ---------- 简答题交互 ---------- */

  function revealOpen() {
    var q = currentQuestion();
    if (!q || q.type !== 'open') return;
    state.revealed[q.id] = true;
    save();
    renderQuestion();

    var result = els.card.querySelector('.result');
    if (result && result.scrollIntoView) {
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function assessOpen(correct) {
    var q = currentQuestion();
    if (!q || q.type !== 'open' || state.answers[q.id]) return;

    state.answers[q.id] = {
      selected: [],
      correct: !!correct,
      self: true
    };
    state.revealed[q.id] = true;

    save();
    renderStats();
    renderFilters();
    renderQuestion();
    renderPager();
  }

  function retryQuestion() {
    var q = currentQuestion();
    if (!q) return;
    delete state.answers[q.id];
    delete state.draft[q.id];
    delete state.revealed[q.id];
    save();
    renderStats();
    renderFilters();
    renderQuestion();
    renderPager();
  }

  function toggleStar() {
    var q = currentQuestion();
    if (!q) return;
    if (state.starred[q.id]) delete state.starred[q.id];
    else state.starred[q.id] = true;
    save();

    if (state.status === 'starred' && !state.starred[q.id]) {
      var oldIndex = state.index;
      rebuildView(false);
      state.index = Math.min(oldIndex, Math.max(0, state.view.length - 1));
      renderAll();
      return;
    }

    renderStats();
    renderFilters();
    renderQuestion();
    renderPager();
  }

  function go(delta) {
    if (!state.view.length) return;
    var target = state.index + delta;
    if (target < 0 || target >= state.view.length) return;
    state.index = target;
    save();
    renderQuestion();
    renderPager();
    renderStats();
    scrollToCard();
  }

  function clearFilters() {
    state.category = 'all';
    state.type = 'all';
    state.level = 'all';
    state.difficulty = 'all';
    state.status = 'all';
    state.index = 0;
    rebuildView(true);
    save();
    renderAll();
  }

  /* ---------- 事件绑定 ---------- */

  els.categoryList.addEventListener('click', function (event) {
    var btn = event.target.closest('button[data-cat]');
    if (!btn) return;
    state.category = btn.dataset.cat;
    state.index = 0;
    rebuildView(true);
    save();
    renderAll();
  });

  els.typeList.addEventListener('click', function (event) {
    var btn = event.target.closest('button[data-type]');
    if (!btn) return;
    state.type = btn.dataset.type;
    state.index = 0;
    rebuildView(true);
    save();
    renderAll();
  });

  els.levelList.addEventListener('click', function (event) {
    var btn = event.target.closest('button[data-level]');
    if (!btn) return;
    state.level = btn.dataset.level;
    state.index = 0;
    rebuildView(true);
    save();
    renderAll();
  });

  els.difficultyList.addEventListener('click', function (event) {
    var btn = event.target.closest('button[data-difficulty]');
    if (!btn) return;
    state.difficulty = btn.dataset.difficulty;
    state.index = 0;
    rebuildView(true);
    save();
    renderAll();
  });

  els.statusList.addEventListener('click', function (event) {
    var btn = event.target.closest('button[data-status]');
    if (!btn) return;
    state.status = btn.dataset.status;
    state.index = 0;
    rebuildView(true);
    save();
    renderAll();
  });

  els.shuffle.addEventListener('change', function () {
    state.shuffle = els.shuffle.checked;
    if (state.shuffle) resetShuffleRanks();
    state.index = 0;
    rebuildView(true);
    save();
    renderAll();
  });

  els.reset.addEventListener('click', function () {
    if (!window.confirm('确定清空所有答题记录和收藏吗？此操作不可恢复。')) return;
    state.answers = {};
    state.starred = {};
    state.draft = {};
    state.revealed = {};
    state.index = 0;
    rebuildView(true);
    save();
    renderAll();
    toast('已清空答题记录');
  });

  els.prev.addEventListener('click', function () {
    go(-1);
  });

  els.next.addEventListener('click', function () {
    go(1);
  });

  els.card.addEventListener('change', function (event) {
    var input = event.target;
    if (!input || input.tagName !== 'INPUT') return;
    var q = currentQuestion();
    if (!q || q.type === 'open' || state.answers[q.id]) return;

    var index = Number(input.value);
    if (q.type === 'multiple') {
      var set = new Set(state.draft[q.id] || []);
      if (input.checked) set.add(index);
      else set.delete(index);
      state.draft[q.id] = Array.from(set).sort(function (a, b) {
        return a - b;
      });
    } else {
      state.draft[q.id] = [index];
    }
    syncOptionUI();
  });

  els.card.addEventListener('click', function (event) {
    var actionBtn = event.target.closest('[data-action]');
    if (!actionBtn) return;
    var action = actionBtn.dataset.action;
    if (action === 'submit') submitAnswer();
    else if (action === 'retry') retryQuestion();
    else if (action === 'next') go(1);
    else if (action === 'star') toggleStar();
    else if (action === 'reveal') revealOpen();
    else if (action === 'open-ok') assessOpen(true);
    else if (action === 'open-no') assessOpen(false);
    else if (action === 'clear-filter') clearFilters();
  });

  els.pager.addEventListener('click', function (event) {
    var btn = event.target.closest('button[data-index]');
    if (!btn) return;
    state.index = Number(btn.dataset.index);
    save();
    renderQuestion();
    renderPager();
    renderStats();
    scrollToCard();
  });

  document.addEventListener('keydown', function (event) {
    if (event.target && event.target.closest && event.target.closest('button, a, textarea, select')) {
      return;
    }

    var q = currentQuestion();
    if (!q) return;

    if (q.type === 'open') {
      if (event.key === 'Enter' && !state.answers[q.id] && !state.revealed[q.id]) {
        event.preventDefault();
        revealOpen();
        return;
      }
      if (state.revealed[q.id] && !state.answers[q.id]) {
        if (event.key === '1') {
          event.preventDefault();
          assessOpen(true);
          return;
        }
        if (event.key === '2') {
          event.preventDefault();
          assessOpen(false);
          return;
        }
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        go(-1);
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        go(1);
      }
      return;
    }

    if (/^[1-9]$/.test(event.key)) {
      var index = Number(event.key) - 1;
      if (index < q.options.length && !state.answers[q.id]) {
        event.preventDefault();
        toggleOption(index);
      }
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      if (state.answers[q.id]) go(1);
      else submitAnswer();
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      go(-1);
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      go(1);
    }
  });

  /* ---------- 启动 ---------- */

  function init() {
    if (!BANK.length) {
      els.card.innerHTML =
        '<div class="empty"><h2>题库为空</h2><p>请检查 questions.js 是否加载成功。</p></div>';
      return;
    }

    load();

    var categories = [];
    BANK.forEach(function (q) {
      if (categories.indexOf(q.category) === -1) categories.push(q.category);
    });

    if (state.category !== 'all' && categories.indexOf(state.category) === -1) {
      state.category = 'all';
    }
    if (['all', 'single', 'multiple', 'judge', 'open'].indexOf(state.type) === -1) {
      state.type = 'all';
    }
    if (['all', '高', '中', '低'].indexOf(state.level) === -1) {
      state.level = 'all';
    }
    if (['all', '基础', '进阶', '高难'].indexOf(state.difficulty) === -1) {
      state.difficulty = 'all';
    }
    if (['all', 'unanswered', 'wrong', 'starred'].indexOf(state.status) === -1) {
      state.status = 'all';
    }

    if (state.shuffle) resetShuffleRanks();
    rebuildView(false);
    renderAll();
  }

  init();
})();
