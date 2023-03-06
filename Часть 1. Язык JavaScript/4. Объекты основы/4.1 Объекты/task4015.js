// Умножаем все числовые свойства на 2

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2; 
    }
  }
}
