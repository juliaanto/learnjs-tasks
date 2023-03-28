// Сумма свойств объекта

const sumSalaries = (salaries) => {
  let sum = 0;
  
  for (let key in salaries) {
    sum += salaries[key];
  }

  return sum;
}

