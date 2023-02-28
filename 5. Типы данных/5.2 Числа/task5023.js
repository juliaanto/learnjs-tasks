// Ввод числового значения

function readNumber() {
  let number;

  do {
    number = prompt('Введите число','');
  } while (!isFinite(number));
  
  if (number === "" || number === null) {
    return null;
  }

  return +number;
}

