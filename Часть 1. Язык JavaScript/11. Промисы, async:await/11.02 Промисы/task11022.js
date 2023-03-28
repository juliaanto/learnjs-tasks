// Задержка на промисах

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  });
}
