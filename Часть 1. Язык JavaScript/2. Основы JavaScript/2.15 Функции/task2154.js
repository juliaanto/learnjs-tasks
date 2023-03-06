// Функция pow(x,n)

function pow(x,n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let valueX = prompt('Введите x', '');
let valueN = prompt('Введите n', '');

alert(pow(valueX, valueN));
