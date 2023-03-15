// Какой обработчик запустится?

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

// Ответ: 1, затем 2
