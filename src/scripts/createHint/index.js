export default function createHint() {
  const $hint = document.createElement('div');
  $hint.className = 'switch-lang-hint';

  $hint.innerHTML = `
    <h2>Change language</h2>
    <button class="keyboard-btn keyboard-btn--service-btn">Shift</button>
    +
    <button class="keyboard-btn keyboard-btn--service-btn">Ctrl</button>
  `;

  return $hint;
}
