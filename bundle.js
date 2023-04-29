(()=>{"use strict";const a={Backquote:{eng:{key:"`",additionalKey:"~"},rus:{key:"Ё"}},Digit1:{eng:{key:"1",additionalKey:"!"},rus:{key:"1",additionalKey:"!"}},Digit2:{eng:{key:"2",additionalKey:"@"},rus:{key:"2",additionalKey:'"'}},Digit3:{eng:{key:"3",additionalKey:"#"},rus:{key:"3",additionalKey:"№"}},Digit4:{eng:{key:"4",additionalKey:"$"},rus:{key:"4",additionalKey:";"}},Digit5:{eng:{key:"5",additionalKey:"%"},rus:{key:"5",additionalKey:"%"}},Digit6:{eng:{key:"6",additionalKey:"^"},rus:{key:"6",additionalKey:":"}},Digit7:{eng:{key:"7",additionalKey:"&"},rus:{key:"7",additionalKey:"?"}},Digit8:{eng:{key:"8",additionalKey:"*"},rus:{key:"8",additionalKey:"*"}},Digit9:{eng:{key:"9",additionalKey:"("},rus:{key:"9",additionalKey:"("}},Digit0:{eng:{key:"0",additionalKey:")"},rus:{key:"0",additionalKey:")"}},Minus:{eng:{key:"-",additionalKey:"_"},rus:{key:"-",additionalKey:"_"}},Equal:{eng:{key:"=",additionalKey:"+"},rus:{key:"=",additionalKey:"+"}},Backspace:{eng:{key:"Backspace"},rus:{key:"Backspace"}},KeyQ:{eng:{key:"Q"},rus:{key:"Й"}},KeyW:{eng:{key:"W"},rus:{key:"Ц"}},KeyE:{eng:{key:"E"},rus:{key:"У"}},KeyR:{eng:{key:"R"},rus:{key:"К"}},KeyT:{eng:{key:"T"},rus:{key:"Е"}},KeyY:{eng:{key:"Y"},rus:{key:"Н"}},KeyU:{eng:{key:"U"},rus:{key:"Г"}},KeyI:{eng:{key:"I"},rus:{key:"Ш"}},KeyO:{eng:{key:"O"},rus:{key:"Щ"}},KeyP:{eng:{key:"P"},rus:{key:"З"}},BracketLeft:{eng:{key:"["},rus:{key:"Х"}},BracketRight:{eng:{key:"]"},rus:{key:"Ъ"}},KeyA:{eng:{key:"A"},rus:{key:"Ф"}},KeyS:{eng:{key:"S"},rus:{key:"Ы"}},KeyD:{eng:{key:"D"},rus:{key:"В"}},KeyF:{eng:{key:"F"},rus:{key:"А"}},KeyG:{eng:{key:"G"},rus:{key:"П"}},KeyH:{eng:{key:"H"},rus:{key:"Р"}},KeyJ:{eng:{key:"J"},rus:{key:"О"}},KeyK:{eng:{key:"K"},rus:{key:"Л"}},KeyL:{eng:{key:"L"},rus:{key:"Д"}},Semicolon:{eng:{key:";"},rus:{key:"Ж"}},Quote:{eng:{key:"'"},rus:{key:"Э"}},KeyZ:{eng:{key:"Z"},rus:{key:"Я"}},KeyX:{eng:{key:"X"},rus:{key:"Ч"}},KeyC:{eng:{key:"C"},rus:{key:"С"}},KeyV:{eng:{key:"V"},rus:{key:"М"}},KeyB:{eng:{key:"B"},rus:{key:"И"}},KeyN:{eng:{key:"N"},rus:{key:"Т"}},KeyM:{eng:{key:"M"},rus:{key:"Ь"}},Comma:{eng:{key:","},rus:{key:"Б"}},Period:{eng:{key:"."},rus:{key:"Ю"}},Slash:{eng:{key:"/"},rus:{key:"."}},Backslash:{eng:{key:"\\"},rus:{key:"/"}}},n=function(){const a=document.createElement("div");return a.className="keyboard",a.dataset.lang="eng",a.innerHTML='\n  <button class="keyboard-btn" data-code="Backquote">\n    `\n    <span class="keyboard-btn__additional-char">~</span>\n  </button>\n  <button class="keyboard-btn" data-code="Digit1">\n    1\n    <span class="keyboard-btn__additional-char">!</span>\n  </button>\n  <button class="keyboard-btn" data-code="Digit2">\n    2\n    <span class="keyboard-btn__additional-char" data-lang="eng">@</span>\n    <span class="keyboard-btn__additional-char" data-lang="rus">"</span>\n  </button>\n  <button class="keyboard-btn" data-code="Digit3">\n    3\n    <span class="keyboard-btn__additional-char" data-lang="eng">#</span>\n    <span class="keyboard-btn__additional-char" data-lang="rus">№</span>\n  </button>\n  <button class="keyboard-btn" data-code="Digit4">\n    4\n    <span class="keyboard-btn__additional-char" data-lang="eng">$</span>\n    <span class="keyboard-btn__additional-char" data-lang="rus">;</span>\n  </button>\n  <button class="keyboard-btn" data-code="Digit5">\n    5\n    <span class="keyboard-btn__additional-char">%</span>\n  </button>\n  <button class="keyboard-btn" data-code="Digit6">\n    6\n    <span class="keyboard-btn__additional-char" data-lang="eng">^</span>\n    <span class="keyboard-btn__additional-char" data-lang="rus">:</span>\n    </button>\n  <button class="keyboard-btn" data-code="Digit7">\n    7\n    <span class="keyboard-btn__additional-char" data-lang="eng">&</span>\n    <span class="keyboard-btn__additional-char" data-lang="rus">?</span>\n  </button>\n  <button class="keyboard-btn" data-code="Digit8">\n    8\n    <span class="keyboard-btn__additional-char">*</span>\n  </button>\n  <button class="keyboard-btn" data-code="Digit9">\n    9\n    <span class="keyboard-btn__additional-char">(</span>\n  </button>\n  <button class="keyboard-btn" data-code="Digit0">\n    0\n    <span class="keyboard-btn__additional-char">)</span>\n  </button>\n  <button class="keyboard-btn" data-code="Minus">\n    -\n    <span class="keyboard-btn__additional-char">-</span>\n  </button>\n  <button class="keyboard-btn" data-code="Equal">\n    =\n    <span class="keyboard-btn__additional-char" data-code="Plus">+</span>\n  </button>\n  <button class="keyboard-btn keyboard-btn--2-columns keyboard-btn--service-btn" data-code="Backspace">Backspace</button>\n  <button class="keyboard-btn keyboard-btn--service-btn" data-code="Tab">Tab</button>\n  <button class="keyboard-btn" data-code="KeyQ">\n  <span data-lang="eng">Q</span>\n  <span data-lang="rus">Й</span>\n  </button>\n  <button class="keyboard-btn" data-code="KeyW">\n  <span data-lang="eng">W</span>\n  <span data-lang="rus">Ц</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyE">\n  <span data-lang="eng">E</span>\n  <span data-lang="rus">У</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyR">\n  <span data-lang="eng">R</span>\n  <span data-lang="rus">К</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyT">\n  <span data-lang="eng">T</span>\n  <span data-lang="rus">Е</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyY">\n  <span data-lang="eng">Y</span>\n  <span data-lang="rus">Н</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyU">\n  <span data-lang="eng">U</span>\n  <span data-lang="rus">Г</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyI">\n  <span data-lang="eng">I</span>\n  <span data-lang="rus">Ш</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyO">\n  <span data-lang="eng">O</span>\n  <span data-lang="rus">Щ</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyP">\n  <span data-lang="eng">P</span>\n  <span data-lang="rus">З</span>\n</button>\n  <button class="keyboard-btn" data-code="BracketLeft">\n  <span data-lang="eng">[</span>\n  <span data-lang="rus">Х</span>\n  </button>\n  <button class="keyboard-btn" data-code="BracketRight">\n  <span data-lang="eng">]</span>\n  <span data-lang="rus">Ъ</span>\n</button>\n  <button class="keyboard-btn" data-code="Backslash">\n    \\\n    <span class="keyboard-btn__additional-char">/</span>\n  </button>\n  <button class="keyboard-btn keyboard-btn--service-btn" data-code="Delete">DEL</button>\n  <button class="keyboard-btn keyboard-btn--2-columns keyboard-btn--service-btn" data-code="CapsLock">Caps Lock</button>\n  <button class="keyboard-btn" data-code="KeyA">\n  <span data-lang="eng">A</span>\n  <span data-lang="rus">Ф</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyS">\n  <span data-lang="eng">S</span>\n  <span data-lang="rus">Ы</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyD">\n  <span data-lang="eng">D</span>\n  <span data-lang="rus">В</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyF">\n  <span data-lang="eng">F</span>\n  <span data-lang="rus">А</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyG">\n  <span data-lang="eng">G</span>\n  <span data-lang="rus">П</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyH">\n  <span data-lang="eng">H</span>\n  <span data-lang="rus">Р</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyJ">\n  <span data-lang="eng">J</span>\n  <span data-lang="rus">О</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyK">\n  <span data-lang="eng">K</span>\n  <span data-lang="rus">Л</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyL">\n  <span data-lang="eng">L</span>\n  <span data-lang="rus">Д</span>\n</button>\n  <button class="keyboard-btn" data-code="Semicolon">\n  <span data-lang="eng">;</span>\n  <span data-lang="rus">Ж</span>\n</button>\n  <button class="keyboard-btn" data-code="Quote">\n  <span data-lang="eng">\'</span>\n  <span data-lang="rus">Э</span>\n</button>\n  <button class="keyboard-btn keyboard-btn--2-columns keyboard-btn--service-btn" data-code="Enter">ENTER</button>\n  <button class="keyboard-btn keyboard-btn--2-columns keyboard-btn--service-btn" data-code="ShiftLeft">Shift</button>\n  <button class="keyboard-btn" data-code="Backslash">\n  \\\n  <span class="keyboard-btn__additional-char">/</span>\n  </button>\n  <button class="keyboard-btn" data-code="KeyZ">\n  <span data-lang="eng">Z</span>\n  <span data-lang="rus">Я</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyX">\n  <span data-lang="eng">X</span>\n  <span data-lang="rus">Ч</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyC">\n  <span data-lang="eng">С</span>\n  <span data-lang="rus">C</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyV">\n  <span data-lang="eng">V</span>\n  <span data-lang="rus">М</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyB">\n  <span data-lang="eng">B</span>\n  <span data-lang="rus">И</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyN">\n  <span data-lang="eng">N</span>\n  <span data-lang="rus">Т</span>\n</button>\n  <button class="keyboard-btn" data-code="KeyM">\n  <span data-lang="eng">M</span>\n  <span data-lang="rus">Ь</span>\n</button>\n  <button class="keyboard-btn" data-code="Comma">\n  <span data-lang="eng">,</span>\n  <span data-lang="rus">Б</span>\n</button>\n  <button class="keyboard-btn" data-code="Period">\n  <span data-lang="eng">.</span>\n  <span data-lang="rus">Ю</span>\n</button>\n  <button class="keyboard-btn" data-code="Slash">\n  <span data-lang="eng">/</span>\n  <span data-lang="rus">.</span>\n</button>\n  <button class="keyboard-btn keyboard-btn--service-btn" data-code="ArrowUp">↑</button>\n  <button class="keyboard-btn keyboard-btn--service-btn" data-code="ShiftRight">Shift</button>\n  <button class="keyboard-btn keyboard-btn--service-btn" data-code="ControlLeft">Ctrl</button>\n  <button class="keyboard-btn keyboard-btn--service-btn" data-code="MetaLeft">Win</button>\n  <button class="keyboard-btn keyboard-btn--service-btn" data-code="AltLeft">Alt</button>\n  <button class="keyboard-btn keyboard-btn--6-columns" data-code="Space">Space</button>\n  <button class="keyboard-btn keyboard-btn--service-btn" data-code="AltRight">Alt</button>\n  <button class="keyboard-btn keyboard-btn--2-columns keyboard-btn--service-btn" data-code="ControlRight">Ctrl</button>\n  <button class="keyboard-btn keyboard-btn--service-btn" data-code="ArrowLeft">←</button>\n  <button class="keyboard-btn keyboard-btn--service-btn" data-code="ArrowDown">↓</button>\n  <button class="keyboard-btn keyboard-btn--service-btn" data-code="ArrowRight">→</button>',a}(),t=function(){const a=document.createElement("textarea");return a.className="keyboard-output",a}(),e=function(){const a=document.createElement("div");return a.className="switch-lang-hint",a.innerHTML='\n    <h2>Change language</h2>\n    <button class="keyboard-btn keyboard-btn--service-btn">Shift</button>\n    +\n    <button class="keyboard-btn keyboard-btn--service-btn">Ctrl</button>\n  ',a}(),s=document.createElement("div");s.className="app",s.append(e,t,n),document.body.append(s);const d={},o=n.querySelectorAll(".keyboard-btn");for(let a=0;a<o.length;a+=1){const{code:n}=o[a].dataset;n&&(d[n]={$el:o[a]})}let b=!1,r=!1;localStorage.getItem("lang")&&(n.dataset.lang=localStorage.getItem("lang")),document.body.addEventListener("keydown",(a=>{d[a.code]&&d[a.code].$el.classList.add("keyboard-btn--pressed")})),document.body.addEventListener("keyup",(a=>{d[a.code]&&d[a.code].$el.classList.remove("keyboard-btn--pressed")}));let l=null;document.addEventListener("mousedown",(e=>{const s=(c=".keyboard-btn",(o=e.target).matches(c)?o:!!o.closest(c)&&o.closest(c));var o,c;if(!s||!e.target.closest(".keyboard"))return;const y=s,u=n.dataset.lang,{code:k}=y.dataset;!function(e,s){if(e.startsWith("Alt")||e.startsWith("Meta"))return;if("CapsLock"===e)return void(a=>{b=a,b?d.CapsLock.$el.classList.add("keyboard-btn--pressed"):d.CapsLock.$el.classList.remove("keyboard-btn--pressed")})(!b);if(e.startsWith("Control"))return void(r&&(n.dataset.lang="rus"===n.dataset.lang?"eng":"rus"));if(e.startsWith("Shift"))return void(a=>{r=a,r?(d.ShiftLeft.$el.classList.add("keyboard-btn--pressed"),d.ShiftRight.$el.classList.add("keyboard-btn--pressed")):(d.ShiftLeft.$el.classList.remove("keyboard-btn--pressed"),d.ShiftRight.$el.classList.remove("keyboard-btn--pressed"))})(!r);if("Backspace"===e){const a=t.selectionStart;if(0===a)return;const{value:n}=t;return t.value=n.slice(0,a-1)+n.slice(a),t.selectionStart=a-1,void(t.selectionEnd=t.selectionStart)}if("Delete"===e){const a=t.selectionStart;if(a===t.length)return;const{value:n}=t;return t.value=n.slice(0,a)+n.slice(a+1),t.selectionStart=a,void(t.selectionEnd=t.selectionStart)}const o={Enter:"\n",Space:" ",Tab:"\t",ArrowLeft:"←",ArrowRight:"→",ArrowDown:"↓",ArrowUp:"↑"};let l;l=o[e]?o[e]:r&&a[e][s].additionalKey||a[e][s].key,b||(l=l.toLowerCase()),r&&(l=l.toUpperCase());const{value:c}=t,y=t.selectionStart;t.value=c.slice(0,y)+l+c.slice(y),t.selectionStart=y+1,t.selectionEnd=t.selectionStart}(k,u),["ShiftLeft","ShiftRight","CapsLock"].includes(k)||(y.classList.add("keyboard-btn--pressed"),l=y)})),document.addEventListener("mouseup",(()=>{l&&(l.classList.remove("keyboard-btn--pressed"),l=null)})),document.body.addEventListener("keydown",(a=>{("Shift"===a.key&&a.ctrlKey||"Control"===a.key&&a.shiftKey)&&(n.dataset.lang="rus"===n.dataset.lang?"eng":"rus",localStorage.setItem("lang",n.dataset.lang))})),t.focus(),t.addEventListener("blur",(()=>{t.focus()}))})();