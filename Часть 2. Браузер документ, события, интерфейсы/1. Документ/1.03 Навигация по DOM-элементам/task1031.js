// Дочерние элементы в DOM

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>

// элемент <div>
document.body.firstElementChild

// <ul>
document.body.lastElementChild

// второй <li> (с именем Пит)
document.body.lastElementChild.lastElementChild
