const widgetEl = document.querySelector('.widget');
const colorTextEl = widgetEl.querySelector('.color');

const changeColorHandler = e => {
  if (
    e.target.tagName === 'BUTTON' &&
    e.target.classList.contains('change-color')
  ) {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorTextEl.textContent = randomColor;
  }
};

widgetEl.addEventListener('click', changeColorHandler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
