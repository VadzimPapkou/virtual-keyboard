import createKeyboard from "./createKeyboard.js";


const buttons = {

};

setTimeout(() => {
  console.clear();
})

const $keyboard = createKeyboard();
document.body.append($keyboard);

const keyboardBtns = $keyboard.querySelectorAll(".keyboard__btn");

for(let keyboardBtn of keyboardBtns) {
  const code = keyboardBtn.dataset.code;
  if(!code) continue;

  buttons[code] = {
    $el: keyboardBtn
  };
}

document.body.addEventListener("keydown", e => {
  buttons[e.code].$el.classList.add("keyboard__btn--pressed");
});

document.body.addEventListener("keyup", e => {
  buttons[e.code].$el.classList.remove("keyboard__btn--pressed");
});

let $lastPressedBtn = null;

document.addEventListener("mousedown", e => {
  const btnOrNot = isOrInside(e.target, ".keyboard__btn")
  if(!btnOrNot) return;

  const $btn = btnOrNot;
  $btn.classList.add("keyboard__btn--pressed");
  $lastPressedBtn = $btn;
});

document.addEventListener("mouseup", e => {
  if(!$lastPressedBtn) return;

  $lastPressedBtn.classList.remove("keyboard__btn--pressed");
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