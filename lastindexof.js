/*const lastIndexOf = function (array , element){
  for ( let i = array.length - 1 ; i >= 0 ; i--){
    if (array[i] === element){
      return i;
    }
  }
  return -1;
}*/

function lastIndexOf(arr, val) {
  let output = 0;
  for (let i = arr.length - 1 ; i >= -1 ; i-- ) {
  if (arr[i] === val ) {
  output = i;
  break;
  } else if (arr === [] || val !== arr[i] ) {
  output = -1;
  }
  }
  return output;
  }

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);