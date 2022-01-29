const person1 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
const person2 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
const person3 = person1;
// console.log(`person1 == person2 is ${person1 === person2}`);
// console.log(`person1 == person3 is ${person1 === person3}`);
// console.log(`"123" == 123 is ${"123" == 123}`);
// console.log(`"123" === 123 is ${"123" === 123}`);
// console.log(`JSON.stringify(person1) === JSON.stringify(person2) is ${JSON.stringify(person1) === JSON.stringify(person2)}`);
// console.log(JSON.stringify(person1));
// console.log(person1.toString());
// console.log(`name of person1 is ${person1.name}`);
// console.log(`person1 lives in ${person1.address.city}`);
// Object.keys(person1).forEach(k => console.log(k)); // array of the object keys
// Object.values(person1).forEach(v => console.log(v)); // array of the object values
// Object.entries(person1).forEach(e => console.log(e)); // array of arrays - [key, value]
// console.log(Object.entries(person1)); // array of arrays without using forEach

function createPerson(id, name, address){
    return {id, name, address}
}

function createAddress(city, street){
    return {city: city, street: street}
    // also can be written: return {city, street}
}

const persons = [
    createPerson(123, 'Vasya', createAddress('Rehovot', 'Parshani')),
    createPerson(124, 'Olya', createAddress('Rehovot', 'Pr. Plaut')),
    createPerson(125, 'Tolya', createAddress('Tel-Aviv', 'Dizengoff'))
]

//////////////////////////////////////////////////////////////////////////

// Classwork //
/*
input: ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"]

output: 
lmn -> 3
a -> 2
d -> 2
bc -> 1

*/
// creating object with key - unique element of array (string as an element of array)
//                      value - occurances count
// difference between: obj = {a: 123, d: "abc"}; const a = "d"; obj.a == 123  and  obj[a] === "abc";
// obj.c = 10; -> obj = {a: 123, d: "abc", c: 10}

function displayOccurances(array) {
    const res = {};
    for(let i = 0; i < array.length; i++){
        if(res[array[i]] === undefined){    // string as content of array[i] occures first time
            res[array[i]] = 1;
        } else {
            res[array[i]] = res[array[i]] + 1;
        }
    }
    Object.entries(res).sort((e1,e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
};

const ar = ["bc", "lmn", "d", "d", "lmn", "a", "lmn", "a"];
displayOccurances(ar);

// Homework #15
/*
   task 1:
   refactoring of displayOccurances function:
   lines 53-59 should be a separated function, that function should apply standard methods like reduce


   task 2:
   write useful function countBy(array, callbackFunction) that returns an object with keys 
   as grouping criteria and values as the occurance count
   keys should be sorted (optional)
   where array - any array, callback function - function returning grouping criteria
   
   examples: 
   const arr = [6.4, 7.3, 6.5, 6.9];
   const statistics = countBy(arr, element => Math.floor(element))
   result: statistics -> {"6": 3, "7": 1}
   
   const arr = ['abcd', 'lmnr', 'ab', 'dddd']
   const statistics = countBy(arr, element => element.length)
   result: statistics -> {"4": 3, "2": 1}

   const arr = [{age: 25, id: 123, name: 'Vasya'}, 
                {age: 50, id: 123, name: 'Vasya'},
                {age: 25, id: 123, name: 'Vasya'},
                {age: 70, id: 123, name: 'Vasya'}]
   const statistics = countBy(arr, element => element.age)
   result: statistics -> {"25": 2, "50": 1, "70": 1}
   
*/