// Создайте новый объект с помощью уже существующего

let obj2 = new obj.constructor();

// Можем ли мы сделать так?
// Можно, если свойство "constructor" существующего объекта имеет корректное значение

// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.

function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");
let rabbit2 = new rabbit.constructor("Black Rabbit");

// И пример функции-конструктора, с которой такой код поведёт себя неправильно.

function Rabbit(name) {
  this.name = name;
  alert(name);
}

Rabbit.prototype = {
  jumps: true
}

let rabbit = new Rabbit("White Rabbit");
let rabbit2 = new rabbit.constructor("Black Rabbit");
