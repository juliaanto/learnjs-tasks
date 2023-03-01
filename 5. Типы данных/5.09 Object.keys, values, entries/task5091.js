// Сумма свойств объекта

function sumSalaries(salaries) {
  let result = 0;

  for (let salary of Object.values(salaries)) {
    result += salary;
  }

  return result;
}
