// Использование "this" в литерале объекта

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Ошибка - Error: Cannot read property 'name' of undefined
