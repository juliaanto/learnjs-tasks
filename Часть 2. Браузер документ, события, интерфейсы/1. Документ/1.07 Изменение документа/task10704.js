// Создайте список

let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
  let data = prompt("Введите содержимое пункта", "");

  if (!data) {
    break;
  }

  let li = document.createElement('li');
  li.textContent = data;
  ul.append(li);
}
