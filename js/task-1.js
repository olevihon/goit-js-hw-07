const itemsEl = document.querySelectorAll('ul#categories li.item');

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(el => {
  const titleEl = el.querySelector('h2');
  console.log(`Category: ${titleEl.textContent}`);

  const subItemsEl = el.querySelectorAll('li');
  console.log(`Elements: ${subItemsEl.length}`);
});
