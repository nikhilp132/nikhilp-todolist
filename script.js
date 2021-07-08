console.log('hello!');

var listArray = [];
function createList() {
  var listItem = document.getElementById('item').value;

  listArray.push(listItem);
  var lastValueIndex = listArray.indexOf(listItem);

  var list = document.getElementById('list');
  list.innerHTML +=
    '<span class="close" data-index=' +
    lastValueIndex +
    '>x</span> ' +
    listArray[listArray.length - 1] +
    '<br/>';
}

$(document).ready(function() {
  // $('.close').click(function() {
  //   alert();
  // });

  $(document).on('click', '.close', deleteItem);
});

function deleteItem() {
  var delete_index = this.getAttribute('data-index');
  var delete_val = listArray[delete_index];

  listArray = listArray.filter(function(values) {
    return values != delete_val;
  });

  console.log(listArray);
}

function displayList() {}
//parent
//parents
