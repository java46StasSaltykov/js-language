///////// ARRAYS /////////

const ar = [2, 100, 9, 80];
// ar.sort(function(a, b){
//     return a - b;
// });

ar.sort((a,b) => a-b);

console.log(`ar is ${ar.toString()}`);

/***************************************************************/

///////// Adding element/s in the array /////////

ar[ar.length] = 200;  
ar.push(300, 25);
console.log(ar);

const ar1 = [-8, 30, -57];
// ar.push(ar1); an array will be added as an element but not separated numbers.
// if you want to add separated numbers - use a spread operator (shown below). 

ar.push(...ar1);
console.log(ar);

// for adding elements in the beginning of an array there is the method "unshift". 
// everything that was said about "push" will work for "unshift". 

const ar2 = [27, 35];
ar.unshift(...ar2);
console.log(ar);

// method "splice" for inserting or replacing any elements in any place. 
// first argument - index for inserting or replacing.
// second argument - amount of the deleted elements, if it's 0 then splice will only insert and not delete. 
// third argument - designates sequence of elements that are being inserted, like push/unshift.

ar.splice(2, 0, 1, 2);
console.log(ar);

// "ar.pop" removes/deletes always the last element in the array and return it wherever you command it to. 
// "ar.shift" does the exact opposite of "pop". 

let el = ar.pop();
el = ar.shift();
console.log(ar);
ar.splice(3, 5); // removes 5 elements from index #3 and above. 
console.log(ar);


///////// TWO-DIMENSIONAL ARRAYS /////////

const matrix1 = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]];
const matrix2 = [[100,20], [50,-5], [34,28]];

function displayMatrix(matrix){
    for(let i = 0; i < matrix.length; i++){
        let row = '';
        for(let j = 0; j < matrix[i].length; j++){
            row = row + matrix[i][j] + '  '; 
        }
        console.log(row);
    }
}

displayMatrix(matrix1);
console.log();
displayMatrix(matrix2);

/**************************************************************

Homework#12

1. const arHW = [13, 28, 4, 15, 25, -10, 40, 17, 27] 

The sorting is according to: even numbers first from the minimal to the maximal, after the odd ones from the maximal to the minimal.
The result should be: [-10, 4, 28, 40, 27, 25, 17, 15, 13]
Use ar.sort(), write the comparator. 
A comparator returns: 
(<0) if a < b
(>0) if a > b
(=0) if a = b

2. Write
 function matrixTransp(matrix){
    //TODO
    return matrix with columns that are rows of the source matrix and rows that are columns of the source matrix.  
}




*/