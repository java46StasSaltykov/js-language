/////////////// forEach method ///////////////

const ar = [-10, 2, -7, 80, 20];
// wanted result: str (string) - "-10#2#-7#80#20"

/// solution based on substring

// let str = '';
// ar.forEach(function(n){
//     str += n + '#';
// })
// str = str.substring(0, str.length-1);
//////////////////////////////////////////////

/// solution based on forEach from second number

// const ar1 = ar.slice(1);
// let str = '' + ar[0];
// ar1.forEach(n => str += '#' + n);
// console.log(str);

/// printing out sequence number of element, element, length of array

// 1 of 5 -> -10; ... 
ar.forEach((n, i, a) => console.log(`${i + 1} of ${a.length} -> ${n}`));

/////////////// map method ///////////////

// use case of applying map method: you want to create new array with elements that are received as a result of some conversion
// example: you want to get new array with elements that are multiplication on 2 of each source elements 

const ar2 = ar.map(n => n*2);
console.log(ar2);
const ar3 = ar.map((n, i, a) => `<li>${i + 1} of ${a.length} - ${n}</li>`);
console.log(ar3);

///////////////////////////////////////////////////////////////////////

/* Homework #13
task 1:
write a function myForEach(array, callback-function)
array - an array that is being iterated 
callback-function - a function that will be called for each element of array
callback-function should take three arguments: current element, current index, iterated array
example of standard forEach - ar1.forEach(n => str += '#' + n);
example of myForEach - myForEach(array, (n => str += '#' + n))

task 2:
write method myMap
same functionality as standard method map
function myMap((array, callback-function))
array - an array that is being iterated 
callback-function - a function that will be called for each element of array
callback-function should take three arguments: current element, current index, iterated array
myMap will apply your method myForEach
*/