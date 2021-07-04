console.log('hello!');

var listArray = [];
function createList() {
  var listItem = document.getElementById('item').value;

  listArray.push(listItem);

  var list = document.getElementById('list');
  console.log(listArray);
  list.innerHTML += listArray[listArray.length - 1] + ' x' + '<br/>';
}

//parent
//parents
