// Вычислить сумму чисел до данного

// 1. С использованием цикла

function sumTo(n) {
  let sum = 0;
  
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// 2. Через рекурсию

function sumTo(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}

// 3. С использованием формулы арифметической прогрессии

function sumTo(n) {
  return n * (n + 1) / 2;
}
