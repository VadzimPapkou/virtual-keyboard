import createKeyboard from "./createKeyboard.js";


const buttons = {

};

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
  console.log(e);
  buttons[e.code].$el.classList.add("keyboard__btn--pressed");
});

document.body.addEventListener("keyup", e => {
  buttons[e.code].$el.classList.remove("keyboard__btn--pressed");
});

document.addEventListener("mousedown", e => {
  const btnOrNot = isOrInside(e.target, ".keyboard__btn")
  if(!btnOrNot) return;

  const $btn = btnOrNot;
  $btn.classList.add("keyboard__btn--pressed");
});

document.addEventListener("mouseup", e => {
  const btnOrNot = isOrInside(e.target, ".keyboard__btn")
  if(!btnOrNot) return;

  const $btn = btnOrNot;
  $btn.classList.remove("keyboard__btn--pressed");
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
