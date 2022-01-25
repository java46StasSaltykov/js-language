//////////////////////// SELF-MADE METHODS ////////////////////////

function myForEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
};

function myMap(array, callback){
    const newArray = [];
    myForEach(array, (element, i, array) => newArray.push(callback(element, i, array)));
    return newArray;
};

function myFilter(array, callback){
    const newArray = [];
    myForEach(array, function(element, i, array){
        if(callback(element, i, array) == true){
            newArray.push(element);
        }
    });
    return newArray;
};

function myReduce(array, callback, startIndex){
    let result;
    let i;
    if(startIndex == undefined){
        result = array[0];
        i = 1;
    }
    else{
        result = array[startIndex];
        i = startIndex + 1;
    }
    for(i; i < array.length; i++){
        result = callback(result, array[i]);
    }
    return result; 
}

/////////////////// variations of callback functions ///////////////////

function double(element){
    let newElement = element * 2;
    // console.log(newElement); // used when called by myForEach only
    return newElement;
};

function addString(element){
    let newElement = element + '$';
    return newElement;
};

function evens(element){
    if(element % 2 == 0){
        return true; 
    }
};

function stringCheck(element, i){
    if(element.length > 3 && i % 2 != 0){
        return true; 
    }
};

function sumArray(result, current){
    return result + current; 
};

/////////////////////////////////////////////////////////////////////////////////////

const arr = [1,2,3,4,5,6];
const arr2 = ['car', 'phone', 'dog', 'house', 'table', 'chair'];
myForEach(arr, double);
const arr3 = myMap(arr, double);
console.log(arr3);
const arr4 = myFilter(arr, evens);
console.log(arr4);
const arr5 = myFilter(arr2, stringCheck);
console.log(arr5);
const arr6 = myReduce(arr, sumArray, 0);
console.log(arr6);
