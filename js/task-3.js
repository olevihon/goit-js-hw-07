const textInputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

textInputEl.addEventListener('input', event => {
  const value = event.currentTarget.value;

  outputEl.textContent = value === '' ? 'Anonymous' : value.trim();
});
