console.log('hello!');

var listArray = [];
function createList() {
  var listItem = document.getElementById('item').value;
  listArray.push(listItem);
  displayList(listArray);
}

$(document).ready(function() {
  $(document).on('click', '.close', deleteItem);
});

function deleteItem() {
  var delete_index = this.getAttribute('data-index');
  // var delete_val = listArray[delete_index];

  listArray.splice(delete_index, 1);
  displayList(listArray);
}

function displayList(array) {
  var list = document.getElementById('list');
  list.innerHTML = '';

  for (var i = 0; i < array.length; i++) {
    list.innerHTML +=
      '<span class="close" data-index=' + i + '>x </span>' + array[i] + '<br>';
  }
}
//parent
//parents
