import createKeyboard from "./createKeyboard.js";
import createTextarea from "./createTextarea.js";
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
  console.log(e)
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