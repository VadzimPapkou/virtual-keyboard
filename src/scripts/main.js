import createKeyboard, {keys} from "./createKeyboard.js";
import createTextarea, {TEXT_AREA_WIDTH} from "./createTextarea.js";
import createSwitchLangHint from "./createHint.js";

const $keyboard = createKeyboard();
const $textarea = createTextarea();
const $switchLangHint = createSwitchLangHint();
const $app = document.createElement("div");
$app.className = "app";
$app.append(
  $switchLangHint,
  $textarea,
  $keyboard
);
document.body.append($app);

if(localStorage.getItem("lang")) {
  $keyboard.dataset.lang = localStorage.getItem("lang");
}

const buttons = {};

const keyboardBtns = $keyboard.querySelectorAll(".keyboard-btn");

for(let keyboardBtn of keyboardBtns) {
  const code = keyboardBtn.dataset.code;
  if(!code) continue;

  buttons[code] = {
    $el: keyboardBtn
  };
}

document.body.addEventListener("keydown", e => {
  buttons[e.code].$el.classList.add("keyboard-btn--pressed");
});

document.body.addEventListener("keyup", e => {
  buttons[e.code].$el.classList.remove("keyboard-btn--pressed");
});

let $lastPressedBtn = null;

document.addEventListener("mousedown", e => {
  const btnOrNot = isOrInside(e.target, ".keyboard-btn")
  if(!btnOrNot || !e.target.closest(".keyboard")) return;

  const $btn = btnOrNot;
  $btn.classList.add("keyboard-btn--pressed");
  $lastPressedBtn = $btn;

  const currentLang = $keyboard.dataset.lang;
  const code = $btn.dataset.code;

  handleBtnPress($btn.dataset.code, currentLang);
});

document.addEventListener("mouseup", e => {
  if(!$lastPressedBtn) return;

  $lastPressedBtn.classList.remove("keyboard-btn--pressed");
  $lastPressedBtn = null;
});

function isOrInside($el, selector) {
  if($el.matches(selector)) {
    return $el;
  } else if($el.closest(selector)) {
    return $el.closest(selector);
  } else {
    return false;
  }
}

document.body.addEventListener("keydown", e => {
  if(e.key === "Shift" && e.ctrlKey || e.key === "Control" && e.shiftKey) {
    $keyboard.dataset.lang = $keyboard.dataset.lang === "rus" ? "eng" : "rus";
    localStorage.setItem("lang", $keyboard.dataset.lang);
  }
});

$textarea.focus();
$textarea.addEventListener("blur", e => {
  $textarea.focus();
});

let capsLock = false;

function handleBtnPress(code, lang) {
  if(code === "CapsLock") {
    capsLock = !capsLock;
    return;
  }

  if(code === "Backspace") {
    const cursor = $textarea.selectionStart;
    const value = $textarea.value;
    $textarea.value = value.slice(0, cursor - 1) + value.slice(cursor);
    $textarea.selectionStart = cursor - 1;
    $textarea.selectionEnd = $textarea.selectionStart;
    return;
  }

  if(code === "Delete") {
    const cursor = $textarea.selectionStart;
    const value = $textarea.value;
    $textarea.value = value.slice(0, cursor) + value.slice(cursor + 1);
    $textarea.selectionStart = cursor;
    $textarea.selectionEnd = $textarea.selectionStart;
    return;
  }

  if(code === "ArrowLeft") {
    $textarea.selectionStart = Math.max($textarea.selectionStart - 1, 0)
    $textarea.selectionEnd = $textarea.selectionStart;
    return;
  }

  if(code === "ArrowRight") {
    $textarea.selectionStart++;
    $textarea.selectionEnd = $textarea.selectionStart;
    return;
  }

  if(code === "ArrowUp") {
    if($textarea.selectionStart < TEXT_AREA_WIDTH) {
      $textarea.selectionStart = 0;
    } else {
      $textarea.selectionStart -= TEXT_AREA_WIDTH;
    }
    $textarea.selectionStart = Math.max(0, $textarea.selectionStart);
    $textarea.selectionEnd = $textarea.selectionStart;
    return;
  }

  if(code === "ArrowDown") {
    $textarea.selectionStart += TEXT_AREA_WIDTH;
    $textarea.selectionStart = Math.max(0, $textarea.selectionStart);
    $textarea.selectionEnd = $textarea.selectionStart;
    return;
  }

  const specialChars = {
    Enter: "\n",
    Space: " ",
    Tab: "\t",
  }

  let char;

  if(specialChars[code]) {
    char = specialChars[code];
  } else {
    char = keys[code][lang].key;
  }

  if(!capsLock) char = char.toLowerCase();

  let value = $textarea.value;
  const cursor = $textarea.selectionStart;

  $textarea.value = value.slice(0, cursor) + char + value.slice(cursor);
  $textarea.selectionStart = cursor + 1;
  $textarea.selectionEnd = $textarea.selectionStart;
}

setInterval(() => {
  console.log($textarea.selectionStart)
}, 500);