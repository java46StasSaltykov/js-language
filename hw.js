function getRandomNumber(min, max) {
    if(min > max){
        [max, min] = [min, max];
    }
    return Math.round(min + Math.random() * (max -min));
};
for(let i = 0; i < 10; i++) {
    console.log(getRandomNumber(10,0));
}

/*******************************************************************/

function concatenate(prefix) {
    return (...args) => [prefix, ...args].join('');
};
const concatApp = concatenate('App - ');
const concatMessage = concatApp('Test status: Done');
console.log(concatMessage);