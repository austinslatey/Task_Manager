// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Check if localStorage is supported by the browser
if (typeof (Storage) !== "undefined") {
  // Load saved column names from localStorage when the page loads
  window.onload = function () {
    loadColumns();
  };
} else {
  console.log("Sorry, your browser does not support web storage...");
}

// Adds columns to kanban board
function addColumn() {
  var kanbanBoard = document.getElementById('kanbanBoard');
  var newColumn = document.createElement('div');
  newColumn.className = 'col border';
  newColumn.innerHTML = '<h3 contenteditable="true">New Column:</h3><button class="bg-secondary text-light rounded">+</button><button class="bg-danger text-light rounded" onclick="removeColumn(this)">x</button>';
  kanbanBoard.appendChild(newColumn);
}


// removes column for kanban
function removeColumn(button) {
  let confirmed = confirm("Are you sure you want to delete?");
  if (confirmed) {
    // Removes the parent node (column div) from the DOM
    button.parentNode.remove();
    // Save columns after removal
    saveColumn();
  }
}

// Save column name in localStorage
function saveColumn(element) {
  var columnName = element.innerText;
  localStorage.setItem(element.id, columnName);
}

function loadColumns() {
  var columns = document.querySelectorAll("#kanbanBoard .col h3");
  columns.forEach(function (column) {
    var columnName = localStorage.getItem(column.id);
    if (columnName) {
      column.innerText = columnName;
    }
  });
}