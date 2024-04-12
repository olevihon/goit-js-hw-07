const controlsEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');

const createBoxes = amount => {
  let size = 30;
  let markup = '';

  for (let index = 1; index <= amount; index++) {
    markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }

  boxesEl.innerHTML = markup;
};

const controlsHandler = e => {
  const input = e.currentTarget.querySelector('input');

  if (e.target.tagName === 'BUTTON' && e.target.hasAttribute('data-create')) {
    const amount = Number(input.value);
    const minAmount = Number(input.min);
    const maxAmount = Number(input.max);

    if (amount < minAmount || amount > maxAmount) return;

    createBoxes(amount);
    input.value = '';
  }

  if (e.target.tagName === 'BUTTON' && e.target.hasAttribute('data-destroy')) {
    boxesEl.innerHTML = '';
  }
};

controlsEl.addEventListener('click', controlsHandler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
