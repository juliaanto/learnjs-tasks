// Повторять цикл, пока ввод неверен

while (true) {
  let value = prompt('Введите число больше 100', '');

  if (value > 100 || value === null) {
    break;
  }
}