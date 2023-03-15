// Редактируемый div

let view = document.getElementById('view');
let textarea = null;

view.onclick = function() {
  editStart();
};

function editStart() {
  textarea = document.createElement('textarea');
  textarea.className = 'edit';
  textarea.value = view.innerHTML;

  textarea.onkeydown = function(event) {
    if (event.key == 'Enter') {
      this.blur();
    }
  };

  textarea.onblur = function() {
    editEnd();
  };

  view.replaceWith(textarea);
  textarea.focus();
}

function editEnd() {
  view.innerHTML = textarea.value;
  textarea.replaceWith(view);
}
