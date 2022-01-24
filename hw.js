function myForEach(array, callback){
    let newElement;
    for(let i = 0; i < array.length; i++){
        newElement = callback(array[i], i, array);
    }
};

function myMap(array, callback){
    const newArray = [];
    myForEach(array, (element, i, array) => newArray.push(callback(element, i, array)));
    return newArray;
};

function double(element){
    let newElement = element * 2;
    // console.log(newElement);
    return newElement;
};

function addString(element){
    let newElement = element + '$';
    return newElement;
};

const arr = [1,2,3];
myForEach(arr, double);
const arr3 = myMap(arr, double);
console.log(arr3);
