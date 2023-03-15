// Спрячьте сообщения с помощью делегирования

document.getElementById('container').addEventListener('click', (event) => {
  if (event.target.className === 'remove-button') {
    event.target.closest('.pane').remove();
  }
})
