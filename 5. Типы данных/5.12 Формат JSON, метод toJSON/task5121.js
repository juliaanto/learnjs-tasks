// Преобразуйте объект в JSON, а затем обратно в обычный объект

let user = {
  name: "Василий Иванович",
  age: 35
};

let userJson = JSON.stringify(user);
let userObject = JSON.parse(userJson);
