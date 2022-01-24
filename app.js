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

const ar1 = ar.slice(1);
let str = '' + ar[0];
ar1.forEach(n => str += '#' + n);
// console.log(str);

/// printing out sequence number of element, element, length of array

// 1 of 5 -> -10; ... 
// ar.forEach((n, i, a) => console.log(`${i + 1} of ${a.length} -> ${n}`));

/////////////// map method ///////////////

// use case of applying map method: you want to create new array with elements that are received as a result of some conversion
// example: you want to get new array with elements that are multiplication on 2 of each source elements 

const ar2 = ar.map(n => n*2);
// console.log(ar2);
const ar3 = ar.map((n, i, a) => `<li>${i + 1} of ${a.length} - ${n}</li>`);
// console.log(ar3);

/////////////// filter method ///////////////

const ar20 = [13,17,20,23,2,40];
const arEvenOdd = ar20.filter((n, i, a) => a.length % 2 == 0 ? n % 2 == 0 : n % 2 == 1);
// console.log(arEvenOdd);

/////////////// reduce method ///////////////

let res = ar20.reduce((res, cur) => res + cur, 0);
console.log(res);
const max = ar20.reduce((max, cur) => cur > max ? cur : max, ar20[0]);
console.log(max);
res = ar20.reduce((res, cur) => res + cur);
console.log(res);

// callback - function with three possible parameters: current element, current index, reference to array

// if the user call doesn't contain a second argument, then the first element of the array will be considered 
// as initial result (in this case iterating begins from the second element of the array)

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



/* Homework #14
task 1:
write method myFilter, the same as the previous methods

task 2:
write method myReduce which receives array, callback, initialResult

*/