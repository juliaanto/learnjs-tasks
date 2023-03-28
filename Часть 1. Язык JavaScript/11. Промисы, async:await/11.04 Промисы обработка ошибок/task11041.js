// Ошибка в setTimeout

// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// Ответ: не выполнится, так как ошибка генерируется после того, как отлавливается в блоке .catch
