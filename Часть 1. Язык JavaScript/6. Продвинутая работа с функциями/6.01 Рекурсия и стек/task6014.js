// Вывод односвязного списка

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// Цикл

function printList(list) {
  let currentList = list;

  while (currentList) {
    alert(currentList.value);
    currentList = currentList.next;
  }
}

// Рекурсия

function printList(list) {
  alert(list.value);

  list.next && printList(list.next);
}
