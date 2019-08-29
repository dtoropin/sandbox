const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

right.addEventListener("click", function () {
  // напишите здесь код, который сдвигает items на 100px вправо
  // если items уже сдвинут на 5 элементов впарво, то больше элементы сдвигать не надо, т.к. вы достигли конца списка
  let position = parseInt(getComputedStyle(items).right);
  if (position < 500) {
    position += 100;
    items.style.right = position + 'px';
  }
});

left.addEventListener("click", function () {
  // напишите здесь код, который сдвигает items на 100px влево
  // если item находится в самом начале, то больше элементы сдвигать влево не надо, т.к. вы достигли начала списка
  let position = parseInt(getComputedStyle(items).right);
  if (position > 0) {
    position -= 100;
    items.style.right = position + 'px';
  }
});
