// Создайте калькулятор при помощи конструктора, new Calculator

function Calculator() {
  this.read = function() {
    this.a = +prompt('Введите a', '');
    this.b = +prompt('Введите b', '');
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
}
