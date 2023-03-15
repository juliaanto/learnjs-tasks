// Добавьте пункт к выпадающему списку

// 1. Выведите значение и текст выбранного пункта.
const selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);
alert(selectedOption.text);

// 2. Добавьте пункт: <option value="classic">Классика</option>.
let newOption = new Option("Классика", "classic");
genres.append(newOption);

// 3. Сделайте его выбранным.
newOption.selected = true;
