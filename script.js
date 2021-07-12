console.log('hello!');

var listArray = [];
function createList() {
  var listItem = document.getElementById('item').value;
  if (listItem == '') {
    alert('Enter a value');
  } else {
    listArray.push(listItem);
    displayList(listArray);
  }
}

$(document).on('click', '.close', deleteItem);

function deleteItem() {
  var delete_index = this.getAttribute('data-index');

  listArray.splice(delete_index, 1);
  displayList(listArray);
}

function displayList(array) {
  var list = document.getElementById('list');
  list.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    list.innerHTML +=
      '<span class="close" data-index=' + i + '>x </span>' + array[i] + '<br>';
  }
}
//parent
//parents
