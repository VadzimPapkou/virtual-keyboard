export const TEXT_AREA_WIDTH = 50;

export default function createTextarea() {
  const $textarea = document.createElement('textarea');
  $textarea.style.width = `${TEXT_AREA_WIDTH}ch`;
  $textarea.className = 'keyboard-output';

  return $textarea;
}
