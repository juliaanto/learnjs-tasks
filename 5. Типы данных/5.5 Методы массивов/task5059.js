// Отсортировать пользователей по возрасту

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}
