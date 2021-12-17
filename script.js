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

  for (var i = 0; i < array.length; i++) {
    list.innerHTML +=
      '<span class="close" data-index=' + i + '>x </span>' + array[i] + '<br>';
  }
}

//Reverse String Dynamically

// function reverse() {
//   var curentString = document.getElementById('stringInput').value;
//   var revItem = document.getElementById('revItem');
//   var length = curentString.length;
//   var reverseString = '';
//   for (var i = length - 1; i >= 0; i--) {
//     var reverseString = reverseString + curentString[i];
//   }
//   revItem.value = reverseString;
// }

//parent
//parents

function mainFunc() {
  innerFunc = function () {
    return 1;
  };
  console.log(innerFunc());
}

mainFunc();
console.log(innerFunc());

var obj = {
  name: 'abc',
  fun1: function () {
    var ab = () => {
      return this;
    };
    return ab();
  },
};

console.log(obj.fun1());
