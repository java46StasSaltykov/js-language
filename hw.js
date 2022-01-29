const persons = [
    createPerson(123, 'Vasya', createAddress('Rehovot', 'Parshani')),
    createPerson(124, 'Olya', createAddress('Rehovot', 'Pr. Plaut')),
    createPerson(125, 'Tolya', createAddress('Tel-Aviv', 'Dizengoff')),
    createPerson(126, 'Sara', createAddress('Lod', 'Sokolov'))
]

function createPerson(id, name, address) {
    return {"id": id, "name": name, "address": address};
};

function createAddress(city, street) {
    return {"city": city, "street": street};
};

function getPersonsCity(persons, city) {
    return persons.filter(person => person.address.city === city);
};

function movePersonsNoCityAtBeginning(persons, city) {
    const personsRes = getPersonsCity(persons, city);
    personsRes.unshift(...persons.filter(person => person.address.city !== city));
    return personsRes;
};

console.log(getPersonsCity(persons, 'Rehovot'));
console.log(movePersonsNoCityAtBeginning(persons, 'Rehovot'));
console.log(getPersonsCity(persons, 'Rehovot').reduce((idMax, idCur) => idMax > idCur ? idMax : idCur).name);
console.log(persons.map(person => person.address.city).reduce((count, current) => {count[current] === undefined ? count[current] = 1 : count[current]++; return count}, {}));






