// Вывод каждую секунду

// setInterval

function printNumbers(from, to) {
  let currentNumber = from;

  let timerId = setInterval(() => {
    if (currentNumber <= to) {
      alert(currentNumber);
      currentNumber++;
    } else {
      clearInterval(timerId);
    }
  }, 1000)
}

// setTimeout

function printNumbers(from, to) {
  let currentNumber = from;

  setTimeout(function go() {
    alert(currentNumber);

    if (currentNumber < to) {
      setTimeout(go, 1000);
    }
    
    currentNumber++;
  }, 1000);
}