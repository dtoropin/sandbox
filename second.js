let elem = document.createElement('div');
document.body.appendChild(elem);
elem.textContent = 'Этот элемент создан при помощи DOM API';

let elem2 = document.createElement('div');
elem2.classList.add('inner');
elem2.textContent = 'Этот элемент тоже создан при помощи DOM API';
elem.appendChild(elem2);
elem2.style.color = 'red';

elem2.addEventListener('click', function () {
  console.log('Этот текст говорит о том, что я всё сделал правильно');
});

let link = document.createElement('a');
link.setAttribute('href', 'https://loftschool.com');
link.textContent = 'Link';
link.style.display = 'block';
link.style.marginBottom = '20px';
document.body.appendChild(link);

link.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Я кликнул на ссылку ', link.getAttribute('href'));
});

let input = document.createElement('input');
input.setAttribute('type', 'text');

let button = document.createElement('button');
button.textContent = 'Click me';

document.body.appendChild(input);
document.body.appendChild(button);

button.addEventListener('click', function () {
  console.log(input.value);
  input.value = '';
});