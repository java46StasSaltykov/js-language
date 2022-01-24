function myForEach(array, callback){
    let newElement;
    for(let i = 0; i < array.length; i++){
        newElement = callback(array[i], i, array);
    }
};

function myMap(array, callback){
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
};

function double(element){
    let newElement = element * 2;
    console.log(newElement);
    return newElement;
};

function addString(element){
    let newElement = element + '$';
    return newElement;
};

const arr = [1,2,3];
myForEach(arr, double);
const arr2 = [1,2,3];
const arr3 = myMap(arr, addString);
console.log(arr3);
