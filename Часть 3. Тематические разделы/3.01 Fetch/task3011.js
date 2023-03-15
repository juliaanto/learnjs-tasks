// Получите данные о пользователях GitHub

async function getUsers(names) {
  let users = [];

  for (let name of names) {
    let response = await fetch(`https://api.github.com/users/${name}`);

    let result = null;

    if (response.ok) {
      result = await response.json();
    }

    users.push(result)
  }

  return users;
}
