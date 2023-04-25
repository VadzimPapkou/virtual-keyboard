export default function createKeyboard() {
  const $keyboard = document.createElement("div");
  $keyboard.className = "keyboard"

  $keyboard.innerHTML = `
  <button class="keyboard__btn">
    \`
    <span class="keyboard__btn__additional-char">~</span>
  </button>
  <button class="keyboard__btn">
    1
    <span class="keyboard__btn__additional-char">!</span>
  </button>
  <button class="keyboard__btn">
    2
    <span class="keyboard__btn__additional-char">@</span></button>
  <button class="keyboard__btn">
    3
    <span class="keyboard__btn__additional-char">#</span></button>
  <button class="keyboard__btn">
    4
    <span class="keyboard__btn__additional-char">$</span></button>
  <button class="keyboard__btn">
    5
    <span class="keyboard__btn__additional-char">%</span></button>
  <button class="keyboard__btn">
    6
    <span class="keyboard__btn__additional-char">:</span></button>
  <button class="keyboard__btn">
    7
    <span class="keyboard__btn__additional-char">?</span></button>
  <button class="keyboard__btn">
    8
    <span class="keyboard__btn__additional-char">*</span></button>
  <button class="keyboard__btn">
    9
    <span class="keyboard__btn__additional-char">(</span></button>
  <button class="keyboard__btn">
    0
    <span class="keyboard__btn__additional-char">)</span></button>
  <button class="keyboard__btn">
    -
    <span class="keyboard__btn__additional-char">-</span></button>
  <button class="keyboard__btn">
    =
    <span class="keyboard__btn__additional-char">+</span></button>
  <button class="keyboard__btn keyboard__btn--2-columns keyboard__btn--service-btn">Backspace</button>
  <button class="keyboard__btn keyboard__btn--service-btn">Tab</button>
  <button class="keyboard__btn" data-code="KeyQ">Q</button>
  <button class="keyboard__btn" data-code="KeyW">W</button>
  <button class="keyboard__btn" data-code="KeyE">E</button>
  <button class="keyboard__btn">R</button>
  <button class="keyboard__btn">T</button>
  <button class="keyboard__btn">Y</button>
  <button class="keyboard__btn">U</button>
  <button class="keyboard__btn">I</button>
  <button class="keyboard__btn">O</button>
  <button class="keyboard__btn">P</button>
  <button class="keyboard__btn">[</button>
  <button class="keyboard__btn">]</button>
  <button class="keyboard__btn">
    \\
    <span class="keyboard__btn__additional-char">/</span>
  </button>
  <button class="keyboard__btn keyboard__btn--service-btn">DEL</button>
  <button class="keyboard__btn keyboard__btn--2-columns keyboard__btn--service-btn">Caps Lock</button>
  <button class="keyboard__btn">A</button>
  <button class="keyboard__btn">S</button>
  <button class="keyboard__btn">D</button>
  <button class="keyboard__btn">F</button>
  <button class="keyboard__btn">G</button>
  <button class="keyboard__btn">H</button>
  <button class="keyboard__btn">J</button>
  <button class="keyboard__btn">K</button>
  <button class="keyboard__btn">L</button>
  <button class="keyboard__btn">;</button>
  <button class="keyboard__btn">'</button>
  <button class="keyboard__btn keyboard__btn--2-columns keyboard__btn--service-btn">ENTER</button>
  <button class="keyboard__btn keyboard__btn--2-columns keyboard__btn--service-btn">Shift</button>
  <button class="keyboard__btn">\\</button>
  <button class="keyboard__btn">Z</button>
  <button class="keyboard__btn">X</button>
  <button class="keyboard__btn">C</button>
  <button class="keyboard__btn">V</button>
  <button class="keyboard__btn">B</button>
  <button class="keyboard__btn">N</button>
  <button class="keyboard__btn">M</button>
  <button class="keyboard__btn">.</button>
  <button class="keyboard__btn">,</button>
  <button class="keyboard__btn">/</button>
  <button class="keyboard__btn keyboard__btn--service-btn">↑</button>
  <button class="keyboard__btn keyboard__btn--service-btn">Shift</button>
  <button class="keyboard__btn keyboard__btn--service-btn">Ctrl</button>
  <button class="keyboard__btn keyboard__btn--service-btn">Win</button>
  <button class="keyboard__btn keyboard__btn--service-btn">Alt</button>
  <button class="keyboard__btn keyboard__btn--6-columns">Space</button>
  <button class="keyboard__btn keyboard__btn--service-btn">Alt</button>
  <button class="keyboard__btn keyboard__btn--2-columns keyboard__btn--service-btn">Ctrl</button>
  <button class="keyboard__btn keyboard__btn--service-btn">←</button>
  <button class="keyboard__btn keyboard__btn--service-btn">↓</button>
  <button class="keyboard__btn keyboard__btn--service-btn">→</button>`;

  return $keyboard;
}