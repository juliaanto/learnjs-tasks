// Вывести простые числа

let n = 10;

outer:
for (let i = 2; i < n + 1; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue outer;
  }

  alert( i );
}