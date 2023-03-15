// Поиск элементов

// 1. Таблицу с id="age-table".
document.getElementById('age-table');

// 2. Все элементы label внутри этой таблицы (их три).
document.querySelectorAll('label');

// 3. Первый td в этой таблице (со словом «Age»).
document.querySelector('td');

// 4. Форму form с именем name="search".
document.getElementsByName('search')[0];

// 5. Первый input в этой форме.
document.querySelector('input');

// 6. Последний input в этой форме.
let inputs = form.querySelectorAll('input');
inputs[inputs.length-1];
