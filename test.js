const Array = require('./array');

function main() {
  let arr = new Array;
  
  // Problem 2
  console.log('Problem 2:');
  arr.push(3); console.log(arr);
  arr.push(5); console.log(arr);
  arr.push(15); console.log(arr);
  arr.push(19); console.log(arr);
  arr.push(45); console.log(arr);
  arr.push(10); console.log(arr);
  
  // Problem 3
  console.log(`Problem 3:`);
  arr.pop(); console.log(arr);
  arr.pop(); console.log(arr);
  arr.pop(); console.log(arr);
  
  // Problem 4
  console.log(`Problem 4:`);
  console.log(arr.get(0));
  arr.pop(); console.log(arr);
  arr.pop(); console.log(arr);
  arr.pop(); console.log(arr);
  
  // Problem 5
  arr.push("tauhida");
  console.log(`URLify:`);
  console.log(arr.URLify('tauhida parveen'));
  console.log(arr.URLify('www.thinkful.com /tauh ida parv een'));
  
  // Problem 6
  const testArray = [3, 45, 2, 67, 78, 3, 87, 5, -2, 0, 5.6] 
  console.log(`Filter:`);
  console.log(arr.filterThis(testArray));
  
  // Problem 7
  console.log(`Max sum:`);
  console.log(arr.maxSum([4, 6, -3, 5, -2, 1]));
  
  // Problem 8
  const arr1 = [1, 3, 6, 8, 11];
  const arr2 = [2, 3, 5, 8, 9, 10];
  console.log(`Merge arrays:`);
  console.log(arr.mergeArray(arr1, arr2));
  
  // Problem 9
  const string = 'Twisted marble powder shot glass overflows';
  const chars = ['m', 'a', 'r', 'b', 'l', 'e'];
  console.log(`Remove:`);
  console.log(arr.remove(string, chars));
  
  // Problem 10
  const prodArr = [1, 3, 9, 4]
  console.log(`Products:`);
  console.log(arr.products(prodArr));

  // Problem 11
  const twoD = [
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
  ];
  const anotherTwoD = [
    [1,0,1,1,0,1],
    [0,1,1,1,0,1],
    [1,1,1,1,1,1],
    [1,0,1,1,1,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,'$pecial string']
  ];
  console.log(`2D Array:`);
  console.log(arr.twoDArray(twoD));
  console.log(arr.twoDArray(anotherTwoD));
}


main();