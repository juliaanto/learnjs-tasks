// Алгоритм поиска

let head = {
  glasses: 1
};

let table = {
  __proto__: head,
  pen: 3
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__: bed,
  money: 2000
};

// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses?
// Ответ: одинаково