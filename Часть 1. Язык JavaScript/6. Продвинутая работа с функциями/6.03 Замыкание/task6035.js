// Фильтрация с помощью функции

let arr = [1, 2, 3, 4, 5, 6, 7];
  
function inBetween(a, b) {
  return function(value) {
    return value >=a && value <= b;
  }
}

function inArray(arr) {
  return function(value) {
    return arr.includes(value);
  }
}
