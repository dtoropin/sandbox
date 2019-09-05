function filter(input, than) {
  if (!Array.isArray(input)) throw new Error('Это не массив');
  if (input.length == 0) throw new Error('Массив пустой');

  let arr = [];
  for (let i = 0; i < input.length; i++) {
    if (!isFinite(input[i])) throw new Error('Элемент не является числом');
    if (input[i] < 0) throw new Error('Элемент является отрицательным числом');

    if (input[i] > than) {
      arr.push(input[i]);
    }
  }
  return arr;
}

var array1 = [12, 100, 34, 65, 10];
try {
  var result = filter(array1, 60);
  console.log(result); // [100, 65];
} catch (e) {
  console.log(e.message);
}

var array2 = [12, -100, 34, 65, 10];
try {
  result = filter(array2, 20);
  console.log(result); // Элемент является отрицательным числом
} catch (e) {
  console.log(e.message);
}

var array3 = [12, 'hello', 34, 65, 10];
try {
  result = filter(array3, 20);
  console.log(result); // Элемент не является числом
} catch (e) {
  console.log(e.message);
}

var array4 = [];
try {
  result = filter(array4, 20);
  console.log(result); // Массив пустой
} catch (e) {
  console.log(e.message);
}

var array5 = 'hello'
try {
  result = filter(array5, 20);
  console.log(result); // Это не массив
} catch (e) {
  console.log(e.message);
}