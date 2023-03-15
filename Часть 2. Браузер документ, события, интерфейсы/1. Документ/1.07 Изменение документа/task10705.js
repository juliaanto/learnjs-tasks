// Создайте дерево из объекта

// Создать строку, а затем присвоить через container.innerHTML

function createTree(container, data) {
  container.innerHTML = createTreeText(data);
}

function createTreeText(data) {
  let li = '';
  let ul;
  
  for (let key in data) {
    li += '<li>' + key + createTreeText(data[key]) + '</li>';
  }
  
  if (li) {
    ul = '<ul>' + li + '</ul>'
  }
  return ul || '';
}

// Создавать узлы через методы DOM

function createTree(container, data) {
  container.append(createTreeDom(data));
}

function createTreeDom(data) {
  if (!Object.keys(data).length) return;

  let ul = document.createElement('ul');

  for (let key in data) {
    let li = document.createElement('li');
    li.innerHTML = key;

    let childrenUl = createTreeDom(data[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}
