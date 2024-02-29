// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Adds columns to kanban board
function addColumn() {
  var kanbanBoard = document.getElementById('kanbanBoard');
  var newColumn = document.createElement('div');
  newColumn.className = 'col border';
  newColumn.innerHTML = '<h3>New Column:</h3><button class="bg-secondary text-light rounded">+</button><button class="bg-danger text-light rounded" onclick="removeColumn(this)">x</button>';
  kanbanBoard.appendChild(newColumn);
}


// removes column for kanban
function removeColumn(button) {
  let confirmed = confirm("Are you sure you want to delete?");
  if (confirmed) {
    // Removes the parent node (column div) from the DOM
    button.parentNode.remove();
  }

}