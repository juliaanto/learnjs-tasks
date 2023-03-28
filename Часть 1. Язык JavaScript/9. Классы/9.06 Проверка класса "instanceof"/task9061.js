// Странный instanceof

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

// Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().
// Ответ: прототипы равны (a.__proto__ == B.prototype)
