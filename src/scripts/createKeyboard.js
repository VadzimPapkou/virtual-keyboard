export default function createKeyboard() {
  const $keyboard = document.createElement("div");
  $keyboard.className = "keyboard"

  $keyboard.innerHTML = `
  <button class="keyboard__btn" data-code="Backquote">
    \`
    <span class="keyboard__btn__additional-char">~</span>
  </button>
  <button class="keyboard__btn" data-code="Digit1">
    1
    <span class="keyboard__btn__additional-char">!</span>
  </button>
  <button class="keyboard__btn" data-code="Digit2">
    2
    <span class="keyboard__btn__additional-char">@</span></button>
  <button class="keyboard__btn" data-code="Digit3">
    3
    <span class="keyboard__btn__additional-char">#</span></button>
  <button class="keyboard__btn" data-code="Digit4">
    4
    <span class="keyboard__btn__additional-char">$</span></button>
  <button class="keyboard__btn" data-code="Digit5">
    5
    <span class="keyboard__btn__additional-char">%</span></button>
  <button class="keyboard__btn" data-code="Digit6">
    6
    <span class="keyboard__btn__additional-char">:</span></button>
  <button class="keyboard__btn" data-code="Digit7">
    7
    <span class="keyboard__btn__additional-char">?</span></button>
  <button class="keyboard__btn" data-code="Digit8">
    8
    <span class="keyboard__btn__additional-char">*</span></button>
  <button class="keyboard__btn" data-code="Digit9">
    9
    <span class="keyboard__btn__additional-char">(</span></button>
  <button class="keyboard__btn" data-code="Digit0">
    0
    <span class="keyboard__btn__additional-char">)</span></button>
  <button class="keyboard__btn" data-code="Minus">
    -
    <span class="keyboard__btn__additional-char">-</span></button>
  <button class="keyboard__btn" data-code="Equal">
    =
    <span class="keyboard__btn__additional-char" data-code="Plus">+</span></button>
  <button class="keyboard__btn keyboard__btn--2-columns keyboard__btn--service-btn" data-code="Backspace">Backspace</button>
  <button class="keyboard__btn keyboard__btn--service-btn" data-code="Tab">Tab</button>
  <button class="keyboard__btn" data-code="KeyQ">Q</button>
  <button class="keyboard__btn" data-code="KeyW">W</button>
  <button class="keyboard__btn" data-code="KeyE">E</button>
  <button class="keyboard__btn" data-code="KeyR">R</button>
  <button class="keyboard__btn" data-code="KeyT">T</button>
  <button class="keyboard__btn" data-code="KeyY">Y</button>
  <button class="keyboard__btn" data-code="KeyU">U</button>
  <button class="keyboard__btn" data-code="KeyI">I</button>
  <button class="keyboard__btn" data-code="KeyO">O</button>
  <button class="keyboard__btn" data-code="KeyP">P</button>
  <button class="keyboard__btn" data-code="BracketLeft">[</button>
  <button class="keyboard__btn" data-code="BracketRight">]</button>
  <button class="keyboard__btn" data-code="Backslash">
    \\
    <span class="keyboard__btn__additional-char">/</span>
  </button>
  <button class="keyboard__btn keyboard__btn--service-btn" data-code="Delete">DEL</button>
  <button class="keyboard__btn keyboard__btn--2-columns keyboard__btn--service-btn" data-code="CapsLock">Caps Lock</button>
  <button class="keyboard__btn" data-code="KeyA">A</button>
  <button class="keyboard__btn" data-code="KeyS">S</button>
  <button class="keyboard__btn" data-code="KeyD">D</button>
  <button class="keyboard__btn" data-code="KeyF">F</button>
  <button class="keyboard__btn" data-code="KeyG">G</button>
  <button class="keyboard__btn" data-code="KeyH">H</button>
  <button class="keyboard__btn" data-code="KeyJ">J</button>
  <button class="keyboard__btn" data-code="KeyK">K</button>
  <button class="keyboard__btn" data-code="KeyL">L</button>
  <button class="keyboard__btn" data-code="Semicolon">;</button>
  <button class="keyboard__btn" data-code="Quote">'</button>
  <button class="keyboard__btn keyboard__btn--2-columns keyboard__btn--service-btn" data-code="Enter">ENTER</button>
  <button class="keyboard__btn keyboard__btn--2-columns keyboard__btn--service-btn" data-code="ShiftLeft">Shift</button>
  <button class="keyboard__btn" data-code="Backslash">\\</button>
  <button class="keyboard__btn" data-code="KeyZ">Z</button>
  <button class="keyboard__btn" data-code="KeyX">X</button>
  <button class="keyboard__btn" data-code="KeyC">C</button>
  <button class="keyboard__btn" data-code="KeyV">V</button>
  <button class="keyboard__btn" data-code="KeyB">B</button>
  <button class="keyboard__btn" data-code="KeyN">N</button>
  <button class="keyboard__btn" data-code="KeyM">M</button>
  <button class="keyboard__btn" data-code="Comma">,</button>
  <button class="keyboard__btn" data-code="Period">.</button>
  <button class="keyboard__btn" data-code="Slash">/</button>
  <button class="keyboard__btn keyboard__btn--service-btn" data-code="ArrowUp">↑</button>
  <button class="keyboard__btn keyboard__btn--service-btn" data-code="ShiftRight">Shift</button>
  <button class="keyboard__btn keyboard__btn--service-btn" data-code="ControlLeft">Ctrl</button>
  <button class="keyboard__btn keyboard__btn--service-btn" data-code="MetaLeft">Win</button>
  <button class="keyboard__btn keyboard__btn--service-btn" data-code="AltLeft">Alt</button>
  <button class="keyboard__btn keyboard__btn--6-columns" data-code="Space">Space</button>
  <button class="keyboard__btn keyboard__btn--service-btn" data-code="AltRight">Alt</button>
  <button class="keyboard__btn keyboard__btn--2-columns keyboard__btn--service-btn" data-code="ControlRight">Ctrl</button>
  <button class="keyboard__btn keyboard__btn--service-btn" data-code="ArrowLeft">←</button>
  <button class="keyboard__btn keyboard__btn--service-btn" data-code="ArrowDown">↓</button>
  <button class="keyboard__btn keyboard__btn--service-btn" data-code="ArrowRight">→</button>`;

  return $keyboard;
}