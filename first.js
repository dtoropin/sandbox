var name = 'Denis';
console.log(name);

name = 'Julia';
console.log(name);

if (110 < 10) {
  console.log('true');
} else {
  console.log('false');
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

function sum(a, b, c) {
  let sum = a + b + c;
  return sum;
}

let sum1 = sum(5, 6, 7);
console.log('sum1 = ', sum1);

let sum2 = sum(10, 35, 55);
console.log('sum2 = ', sum2);

let arr = ['привет', 'loftschool'];
arr.push('я изучаю');
arr.push('javascript');

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let number = [12, 45, 142, 56, 542, 432, 34, 67, 131, 92];
for (let i = 0; i < number.length; i++) {
  if (number[i] > 100) {
    console.log(number[i]);
  }
}

let obj = {
  name: 'Денис',
  lastName: 'Торопин',
  age: 45
}

console.log(obj.name);
console.log(obj.lastName);
console.log(obj.age);

obj.location = 'Санкт-Петербург';
console.log(obj.location);

function func(name, lastName, age) {
  let text = 'Привет, меня зовут ' + name + ' ' + lastName + ' и мне ' + age + ' лет!';
  return text;
}

let me = func(obj.name, obj.lastName, obj.age);
console.log(me);