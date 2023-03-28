// Числа Фибоначчи

function fib(n) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let sum = a + b;
    a = b;
    b = sum;
  }

  return b;
}
