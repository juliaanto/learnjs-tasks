// Фильтрация по диапазону "на месте"

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
