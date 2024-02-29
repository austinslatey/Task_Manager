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

function addColumn() {
  var dynamicColumns = document.getElementById('dynamicColumns');
  var newColumn = document.createElement('div');

  // Generate unique id for the new column
  var newColumnId = "column" + (dynamicColumns.children.length + 4); // Start from 4 to avoid conflicting with initial columns

  newColumn.className = 'col border';
  newColumn.innerHTML = '<h3 contenteditable="true" onblur="saveColumn(this)" id="' + newColumnId + '">New Column:</h3><button class="bg-secondary text-light rounded">+</button><button class="bg-danger text-light rounded" onclick="removeColumn(this)">x</button>';
  dynamicColumns.appendChild(newColumn);

  // Log the new column content
  console.log(newColumn);

  // Call saveColumn() immediately after adding the new column
  saveColumn(newColumn.querySelector('h3'));
}


// removes column for kanban
function removeColumn(button) {
  let confirmed = confirm("Are you sure you want to delete?");
  if (confirmed) {
    // Get the id of the column being removed
    var columnId = button.parentNode.querySelector('h3').id;

    // Removes the parent node (column div) from the DOM
    button.parentNode.remove();

    // Remove the corresponding data from local storage
    localStorage.removeItem(columnId);
  }
}

function saveColumn(element) {
  var columnId = element.id;
  
  // Save the entire HTML content of the column
  var columnData = element.parentElement.outerHTML; 
  localStorage.setItem(columnId, columnData);
}





function loadColumns() {
  var dynamicColumns = document.getElementById("dynamicColumns");

  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key.startsWith("column")) {
      var columnData = localStorage.getItem(key);
      var columnElement = document.createElement('div');
      columnElement.innerHTML = columnData;
      dynamicColumns.appendChild(columnElement);
    }
  }
}