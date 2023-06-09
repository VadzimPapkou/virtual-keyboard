export default function createKeyboard() {
  const $keyboard = document.createElement('div');
  $keyboard.className = 'keyboard';
  $keyboard.dataset.lang = 'eng';

  $keyboard.innerHTML = `
  <button class="keyboard-btn" data-code="Backquote">
    \`
    <span class="keyboard-btn__additional-char">~</span>
  </button>
  <button class="keyboard-btn" data-code="Digit1">
    1
    <span class="keyboard-btn__additional-char">!</span>
  </button>
  <button class="keyboard-btn" data-code="Digit2">
    2
    <span class="keyboard-btn__additional-char" data-lang="eng">@</span>
    <span class="keyboard-btn__additional-char" data-lang="rus">"</span>
  </button>
  <button class="keyboard-btn" data-code="Digit3">
    3
    <span class="keyboard-btn__additional-char" data-lang="eng">#</span>
    <span class="keyboard-btn__additional-char" data-lang="rus">№</span>
  </button>
  <button class="keyboard-btn" data-code="Digit4">
    4
    <span class="keyboard-btn__additional-char" data-lang="eng">$</span>
    <span class="keyboard-btn__additional-char" data-lang="rus">;</span>
  </button>
  <button class="keyboard-btn" data-code="Digit5">
    5
    <span class="keyboard-btn__additional-char">%</span>
  </button>
  <button class="keyboard-btn" data-code="Digit6">
    6
    <span class="keyboard-btn__additional-char" data-lang="eng">^</span>
    <span class="keyboard-btn__additional-char" data-lang="rus">:</span>
    </button>
  <button class="keyboard-btn" data-code="Digit7">
    7
    <span class="keyboard-btn__additional-char" data-lang="eng">&</span>
    <span class="keyboard-btn__additional-char" data-lang="rus">?</span>
  </button>
  <button class="keyboard-btn" data-code="Digit8">
    8
    <span class="keyboard-btn__additional-char">*</span>
  </button>
  <button class="keyboard-btn" data-code="Digit9">
    9
    <span class="keyboard-btn__additional-char">(</span>
  </button>
  <button class="keyboard-btn" data-code="Digit0">
    0
    <span class="keyboard-btn__additional-char">)</span>
  </button>
  <button class="keyboard-btn" data-code="Minus">
    -
    <span class="keyboard-btn__additional-char">-</span>
  </button>
  <button class="keyboard-btn" data-code="Equal">
    =
    <span class="keyboard-btn__additional-char" data-code="Plus">+</span>
  </button>
  <button class="keyboard-btn keyboard-btn--2-columns keyboard-btn--service-btn" data-code="Backspace">Backspace</button>
  <button class="keyboard-btn keyboard-btn--service-btn" data-code="Tab">Tab</button>
  <button class="keyboard-btn" data-code="KeyQ">
  <span data-lang="eng">Q</span>
  <span data-lang="rus">Й</span>
  </button>
  <button class="keyboard-btn" data-code="KeyW">
  <span data-lang="eng">W</span>
  <span data-lang="rus">Ц</span>
</button>
  <button class="keyboard-btn" data-code="KeyE">
  <span data-lang="eng">E</span>
  <span data-lang="rus">У</span>
</button>
  <button class="keyboard-btn" data-code="KeyR">
  <span data-lang="eng">R</span>
  <span data-lang="rus">К</span>
</button>
  <button class="keyboard-btn" data-code="KeyT">
  <span data-lang="eng">T</span>
  <span data-lang="rus">Е</span>
</button>
  <button class="keyboard-btn" data-code="KeyY">
  <span data-lang="eng">Y</span>
  <span data-lang="rus">Н</span>
</button>
  <button class="keyboard-btn" data-code="KeyU">
  <span data-lang="eng">U</span>
  <span data-lang="rus">Г</span>
</button>
  <button class="keyboard-btn" data-code="KeyI">
  <span data-lang="eng">I</span>
  <span data-lang="rus">Ш</span>
</button>
  <button class="keyboard-btn" data-code="KeyO">
  <span data-lang="eng">O</span>
  <span data-lang="rus">Щ</span>
</button>
  <button class="keyboard-btn" data-code="KeyP">
  <span data-lang="eng">P</span>
  <span data-lang="rus">З</span>
</button>
  <button class="keyboard-btn" data-code="BracketLeft">
  <span data-lang="eng">[</span>
  <span data-lang="rus">Х</span>
  </button>
  <button class="keyboard-btn" data-code="BracketRight">
  <span data-lang="eng">]</span>
  <span data-lang="rus">Ъ</span>
</button>
  <button class="keyboard-btn" data-code="Backslash">
    \\
    <span class="keyboard-btn__additional-char">/</span>
  </button>
  <button class="keyboard-btn keyboard-btn--service-btn" data-code="Delete">DEL</button>
  <button class="keyboard-btn keyboard-btn--2-columns keyboard-btn--service-btn" data-code="CapsLock">Caps Lock</button>
  <button class="keyboard-btn" data-code="KeyA">
  <span data-lang="eng">A</span>
  <span data-lang="rus">Ф</span>
</button>
  <button class="keyboard-btn" data-code="KeyS">
  <span data-lang="eng">S</span>
  <span data-lang="rus">Ы</span>
</button>
  <button class="keyboard-btn" data-code="KeyD">
  <span data-lang="eng">D</span>
  <span data-lang="rus">В</span>
</button>
  <button class="keyboard-btn" data-code="KeyF">
  <span data-lang="eng">F</span>
  <span data-lang="rus">А</span>
</button>
  <button class="keyboard-btn" data-code="KeyG">
  <span data-lang="eng">G</span>
  <span data-lang="rus">П</span>
</button>
  <button class="keyboard-btn" data-code="KeyH">
  <span data-lang="eng">H</span>
  <span data-lang="rus">Р</span>
</button>
  <button class="keyboard-btn" data-code="KeyJ">
  <span data-lang="eng">J</span>
  <span data-lang="rus">О</span>
</button>
  <button class="keyboard-btn" data-code="KeyK">
  <span data-lang="eng">K</span>
  <span data-lang="rus">Л</span>
</button>
  <button class="keyboard-btn" data-code="KeyL">
  <span data-lang="eng">L</span>
  <span data-lang="rus">Д</span>
</button>
  <button class="keyboard-btn" data-code="Semicolon">
  <span data-lang="eng">;</span>
  <span data-lang="rus">Ж</span>
</button>
  <button class="keyboard-btn" data-code="Quote">
  <span data-lang="eng">'</span>
  <span data-lang="rus">Э</span>
</button>
  <button class="keyboard-btn keyboard-btn--2-columns keyboard-btn--service-btn" data-code="Enter">ENTER</button>
  <button class="keyboard-btn keyboard-btn--2-columns keyboard-btn--service-btn" data-code="ShiftLeft">Shift</button>
  <button class="keyboard-btn" data-code="Backslash">
  \\
  <span class="keyboard-btn__additional-char">/</span>
  </button>
  <button class="keyboard-btn" data-code="KeyZ">
  <span data-lang="eng">Z</span>
  <span data-lang="rus">Я</span>
</button>
  <button class="keyboard-btn" data-code="KeyX">
  <span data-lang="eng">X</span>
  <span data-lang="rus">Ч</span>
</button>
  <button class="keyboard-btn" data-code="KeyC">
  <span data-lang="eng">С</span>
  <span data-lang="rus">C</span>
</button>
  <button class="keyboard-btn" data-code="KeyV">
  <span data-lang="eng">V</span>
  <span data-lang="rus">М</span>
</button>
  <button class="keyboard-btn" data-code="KeyB">
  <span data-lang="eng">B</span>
  <span data-lang="rus">И</span>
</button>
  <button class="keyboard-btn" data-code="KeyN">
  <span data-lang="eng">N</span>
  <span data-lang="rus">Т</span>
</button>
  <button class="keyboard-btn" data-code="KeyM">
  <span data-lang="eng">M</span>
  <span data-lang="rus">Ь</span>
</button>
  <button class="keyboard-btn" data-code="Comma">
  <span data-lang="eng">,</span>
  <span data-lang="rus">Б</span>
</button>
  <button class="keyboard-btn" data-code="Period">
  <span data-lang="eng">.</span>
  <span data-lang="rus">Ю</span>
</button>
  <button class="keyboard-btn" data-code="Slash">
  <span data-lang="eng">/</span>
  <span data-lang="rus">.</span>
</button>
  <button class="keyboard-btn keyboard-btn--service-btn" data-code="ArrowUp">↑</button>
  <button class="keyboard-btn keyboard-btn--service-btn" data-code="ShiftRight">Shift</button>
  <button class="keyboard-btn keyboard-btn--service-btn" data-code="ControlLeft">Ctrl</button>
  <button class="keyboard-btn keyboard-btn--service-btn" data-code="MetaLeft">Win</button>
  <button class="keyboard-btn keyboard-btn--service-btn" data-code="AltLeft">Alt</button>
  <button class="keyboard-btn keyboard-btn--6-columns" data-code="Space">Space</button>
  <button class="keyboard-btn keyboard-btn--service-btn" data-code="AltRight">Alt</button>
  <button class="keyboard-btn keyboard-btn--2-columns keyboard-btn--service-btn" data-code="ControlRight">Ctrl</button>
  <button class="keyboard-btn keyboard-btn--service-btn" data-code="ArrowLeft">←</button>
  <button class="keyboard-btn keyboard-btn--service-btn" data-code="ArrowDown">↓</button>
  <button class="keyboard-btn keyboard-btn--service-btn" data-code="ArrowRight">→</button>`;

  return $keyboard;
}

export const keysByCodes = {
  Backquote: {
    eng: {
      key: '`',
      additionalKey: '~',
    },
    rus: {
      key: 'Ё',
    },
  },
  Digit1: {
    eng: {
      key: '1',
      additionalKey: '!',
    },
    rus: {
      key: '1',
      additionalKey: '!',
    },
  },
  Digit2: {
    eng: {
      key: '2',
      additionalKey: '@',
    },
    rus: {
      key: '2',
      additionalKey: '"',
    },
  },
  Digit3: {
    eng: {
      key: '3',
      additionalKey: '#',
    },
    rus: {
      key: '3',
      additionalKey: '№',
    },
  },
  Digit4: {
    eng: {
      key: '4',
      additionalKey: '$',
    },
    rus: {
      key: '4',
      additionalKey: ';',
    },
  },
  Digit5: {
    eng: {
      key: '5',
      additionalKey: '%',
    },
    rus: {
      key: '5',
      additionalKey: '%',
    },
  },
  Digit6: {
    eng: {
      key: '6',
      additionalKey: '^',
    },
    rus: {
      key: '6',
      additionalKey: ':',
    },
  },
  Digit7: {
    eng: {
      key: '7',
      additionalKey: '&',
    },
    rus: {
      key: '7',
      additionalKey: '?',
    },
  },
  Digit8: {
    eng: {
      key: '8',
      additionalKey: '*',
    },
    rus: {
      key: '8',
      additionalKey: '*',
    },
  },
  Digit9: {
    eng: {
      key: '9',
      additionalKey: '(',
    },
    rus: {
      key: '9',
      additionalKey: '(',
    },
  },
  Digit0: {
    eng: {
      key: '0',
      additionalKey: ')',
    },
    rus: {
      key: '0',
      additionalKey: ')',
    },
  },
  Minus: {
    eng: {
      key: '-',
      additionalKey: '_',
    },
    rus: {
      key: '-',
      additionalKey: '_',
    },
  },
  Equal: {
    eng: {
      key: '=',
      additionalKey: '+',
    },
    rus: {
      key: '=',
      additionalKey: '+',
    },
  },
  Backspace: {
    eng: {
      key: 'Backspace',
    },
    rus: {
      key: 'Backspace',
    },
  },
  KeyQ: {
    eng: {
      key: 'Q',
    },
    rus: {
      key: 'Й',
    },
  },
  KeyW: {
    eng: {
      key: 'W',
    },
    rus: {
      key: 'Ц',
    },
  },
  KeyE: {
    eng: {
      key: 'E',
    },
    rus: {
      key: 'У',
    },
  },
  KeyR: {
    eng: {
      key: 'R',
    },
    rus: {
      key: 'К',
    },
  },
  KeyT: {
    eng: {
      key: 'T',
    },
    rus: {
      key: 'Е',
    },
  },
  KeyY: {
    eng: {
      key: 'Y',
    },
    rus: {
      key: 'Н',
    },
  },
  KeyU: {
    eng: {
      key: 'U',
    },
    rus: {
      key: 'Г',
    },
  },
  KeyI: {
    eng: {
      key: 'I',
    },
    rus: {
      key: 'Ш',
    },
  },
  KeyO: {
    eng: {
      key: 'O',
    },
    rus: {
      key: 'Щ',
    },
  },
  KeyP: {
    eng: {
      key: 'P',
    },
    rus: {
      key: 'З',
    },
  },
  BracketLeft: {
    eng: {
      key: '[',
    },
    rus: {
      key: 'Х',
    },
  },
  BracketRight: {
    eng: {
      key: ']',
    },
    rus: {
      key: 'Ъ',
    },
  },
  KeyA: {
    eng: {
      key: 'A',
    },
    rus: {
      key: 'Ф',
    },
  },
  KeyS: {
    eng: {
      key: 'S',
    },
    rus: {
      key: 'Ы',
    },
  },
  KeyD: {
    eng: {
      key: 'D',
    },
    rus: {
      key: 'В',
    },
  },
  KeyF: {
    eng: {
      key: 'F',
    },
    rus: {
      key: 'А',
    },
  },
  KeyG: {
    eng: {
      key: 'G',
    },
    rus: {
      key: 'П',
    },
  },
  KeyH: {
    eng: {
      key: 'H',
    },
    rus: {
      key: 'Р',
    },
  },
  KeyJ: {
    eng: {
      key: 'J',
    },
    rus: {
      key: 'О',
    },
  },
  KeyK: {
    eng: {
      key: 'K',
    },
    rus: {
      key: 'Л',
    },
  },
  KeyL: {
    eng: {
      key: 'L',
    },
    rus: {
      key: 'Д',
    },
  },
  Semicolon: {
    eng: {
      key: ';',
    },
    rus: {
      key: 'Ж',
    },
  },
  Quote: {
    eng: {
      key: "'",
    },
    rus: {
      key: 'Э',
    },
  },
  KeyZ: {
    eng: {
      key: 'Z',
    },
    rus: {
      key: 'Я',
    },
  },
  KeyX: {
    eng: {
      key: 'X',
    },
    rus: {
      key: 'Ч',
    },
  },
  KeyC: {
    eng: {
      key: 'C',
    },
    rus: {
      key: 'С',
    },
  },
  KeyV: {
    eng: {
      key: 'V',
    },
    rus: {
      key: 'М',
    },
  },
  KeyB: {
    eng: {
      key: 'B',
    },
    rus: {
      key: 'И',
    },
  },
  KeyN: {
    eng: {
      key: 'N',
    },
    rus: {
      key: 'Т',
    },
  },
  KeyM: {
    eng: {
      key: 'M',
    },
    rus: {
      key: 'Ь',
    },
  },
  Comma: {
    eng: {
      key: ',',
    },
    rus: {
      key: 'Б',
    },
  },
  Period: {
    eng: {
      key: '.',
    },
    rus: {
      key: 'Ю',
    },
  },
  Slash: {
    eng: {
      key: '/',
    },
    rus: {
      key: '.',
    },
  },
  Backslash: {
    eng: {
      key: '\\',
    },
    rus: {
      key: '/',
    },
  },
};
