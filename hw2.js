function displayOccurances(array) {
    const initialValue = {};
    const res = array.reduce((count, current) => {count[current] === undefined ? count[current] = 1 : count[current]++; return count}, initialValue);
    Object.entries(res).sort((e1,e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
};

const ar = ["bc", "lmn", "d", "d", "lmn", "a", "lmn", "a"];
displayOccurances(ar);
console.log();

////////////////////////////////////////////////////////////////////////////////////

function countBy(array, callbackFunction) {
    const result = array.map(callbackFunction).reduce((count, current) => {count[current] === undefined ? count[current] = 1 : count[current]++; return count}, {});
    return result;
};

const arr = [6.4, 7.3, 6.5, 6.9];  
const arr1 = ['abcd', 'lmnr', 'ab', 'dddd'];
const arr2 = [{age: 25, id: 123, name: 'Vasya'}, 
                {age: 50, id: 123, name: 'Vasya'},
                {age: 25, id: 123, name: 'Vasya'},
                {age: 70, id: 123, name: 'Vasya'}
];
    
console.log(countBy(arr, element => Math.floor(element)));
console.log();
console.log(countBy(arr1, element => element.length));
console.log();
console.log(countBy(arr2, element => element.age));
