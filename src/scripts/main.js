import createKeyboard, { keysByCodes } from './createKeyboard';
import createTextarea from './createTextarea';
import createSwitchLangHint from './createHint';

let capsLock = false;

const setCapsLock = value => {
  capsLock = value;
  if(capsLock) {
    buttons.CapsLock.$el.classList.add("keyboard-btn--pressed");
  } else {
    buttons.CapsLock.$el.classList.remove("keyboard-btn--pressed");
  }
}

let shift = false;

const setShift = value => {
  shift = value;
  if(shift) {
    buttons.ShiftLeft.$el.classList.add("keyboard-btn--pressed");
    buttons.ShiftRight.$el.classList.add("keyboard-btn--pressed");
  } else {
    buttons.ShiftLeft.$el.classList.remove("keyboard-btn--pressed");
    buttons.ShiftRight.$el.classList.remove("keyboard-btn--pressed");
  }
}

const $keyboard = createKeyboard();
const $textarea = createTextarea();
const $switchLangHint = createSwitchLangHint();
const $app = document.createElement('div');
$app.className = 'app';
$app.append(
  $switchLangHint,
  $textarea,
  $keyboard,
);
document.body.append($app);

function isOrInside($el, selector) {
  if ($el.matches(selector)) {
    return $el;
  } if ($el.closest(selector)) {
    return $el.closest(selector);
  }
  return false;
}

function handleBtnPress(code, lang) {
  if(code.startsWith('Alt') || code.startsWith('Meta')) return;

  if (code === 'CapsLock') {
    setCapsLock(!capsLock)
    return;
  }

  if(code.startsWith('Control')) {
    if(shift) {
      $keyboard.dataset.lang = $keyboard.dataset.lang === "rus" ? "eng" : "rus";
    }
    return;
  }

  if(code.startsWith("Shift")) {
    setShift(!shift);
    return;
  }

  if (code === 'Backspace') {
    const cursor = $textarea.selectionStart;
    if(cursor === 0) return;
    const { value } = $textarea;
    $textarea.value = value.slice(0, cursor - 1) + value.slice(cursor);
    $textarea.selectionStart = cursor - 1;
    $textarea.selectionEnd = $textarea.selectionStart;
    return;
  }

  if (code === 'Delete') {
    const cursor = $textarea.selectionStart;
    if(cursor === $textarea.length) return;
    const { value } = $textarea;
    $textarea.value = value.slice(0, cursor) + value.slice(cursor + 1);
    $textarea.selectionStart = cursor;
    $textarea.selectionEnd = $textarea.selectionStart;
    return;
  }

  const specialChars = {
    Enter: '\n',
    Space: ' ',
    Tab: '\t',
    ArrowLeft: '←',
    ArrowRight: '→',
    ArrowDown: '↓',
    ArrowUp: '↑',
  };

  let char;

  if (specialChars[code]) {
    char = specialChars[code];
  } else {
    if(shift) {
      char = keysByCodes[code][lang].additionalKey || keysByCodes[code][lang].key;
    } else {
      char = keysByCodes[code][lang].key;
    }
  }

  if (!capsLock) {
    char = char.toLowerCase();
  }

  if(shift) {
    char = char.toUpperCase();
  }

  const { value } = $textarea;
  const cursor = $textarea.selectionStart;

  $textarea.value = value.slice(0, cursor) + char + value.slice(cursor);
  $textarea.selectionStart = cursor + 1;
  $textarea.selectionEnd = $textarea.selectionStart;
}

if (localStorage.getItem('lang')) {
  $keyboard.dataset.lang = localStorage.getItem('lang');
}

const buttons = {};

const keyboardBtns = $keyboard.querySelectorAll('.keyboard-btn');

for (let i = 0; i < keyboardBtns.length; i += 1) {
  const { code } = keyboardBtns[i].dataset;
  if (code) {
    buttons[code] = {
      $el: keyboardBtns[i],
    };
  }
}

document.body.addEventListener('keydown', (e) => {
  if(buttons[e.code]) {
    buttons[e.code].$el.classList.add('keyboard-btn--pressed');
  }
});

document.body.addEventListener('keyup', (e) => {
  if(buttons[e.code]) {
    buttons[e.code].$el.classList.remove('keyboard-btn--pressed');
  }
});

let $lastPressedBtn = null;

document.addEventListener('mousedown', (e) => {
  const btnOrNot = isOrInside(e.target, '.keyboard-btn');
  if (!btnOrNot || !e.target.closest('.keyboard')) {
    return;
  }

  const $btn = btnOrNot;
  const currentLang = $keyboard.dataset.lang;
  const code = $btn.dataset.code;

  handleBtnPress(code, currentLang);

  const skipHighlightCodes = ["ShiftLeft", "ShiftRight", "CapsLock"];
  if(skipHighlightCodes.includes(code)) {
    return;
  }
  $btn.classList.add('keyboard-btn--pressed');
  $lastPressedBtn = $btn;
});

document.addEventListener('mouseup', () => {
  if (!$lastPressedBtn) {
    return;
  }

  $lastPressedBtn.classList.remove('keyboard-btn--pressed');
  $lastPressedBtn = null;
});

document.body.addEventListener('keydown', (e) => {
  if ((e.key === 'Shift' && e.ctrlKey) || (e.key === 'Control' && e.shiftKey)) {
    $keyboard.dataset.lang = $keyboard.dataset.lang === 'rus' ? 'eng' : 'rus';
    localStorage.setItem('lang', $keyboard.dataset.lang);
  }
});

$textarea.focus();
$textarea.addEventListener('blur', () => {
  $textarea.focus();
});
