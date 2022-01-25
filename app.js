const person1 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
const person2 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
const person3 = person1;
console.log(`person1 == person2 is ${person1 === person2}`);
console.log(`person1 == person3 is ${person1 === person3}`);
// console.log(`"123" == 123 is ${"123" == 123}`);
// console.log(`"123" === 123 is ${"123" === 123}`);
console.log(`JSON.stringify(person1) === JSON.stringify(person2) is ${JSON.stringify(person1) === JSON.stringify(person2)}`);
console.log(JSON.stringify(person1));
console.log(person1.toString());
console.log(`name of person1 is ${person1.name}`);
console.log(`person1 lives in ${person1.address.city}`);
Object.keys(person1).forEach(k => console.log(k)); // array of the object keys
Object.values(person1).forEach(v => console.log(v)); // array of the object values
Object.entries(person1).forEach(e => console.log(e)); // array of arrays - [key, value]
console.log(Object.entries(person1)); // array of arrays without using forEach

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
/*
Homework 14
task 3:
applying methods of arrays you should find the persons living in rehovot and display them out

task 4:
move to the begining of the array the persons who don't live in rehovot using array methods

*/