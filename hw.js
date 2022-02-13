function getRandomNumber(min, max) {
    let result = (min > max) ? 
    Math.floor(Math.random() * (min - max + 1)) + max : 
    Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.ceil(result);
};
console.log(getRandomNumber(10,0));

/*******************************************************************/

function concatinate(prefix) {
    
};

// const concatApp = concatinate('App - ');
// const concatMessage = concatApp('Test status: Done');
// console.log(concatMessage);