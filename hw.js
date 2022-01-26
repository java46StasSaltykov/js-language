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
    const persons1 = persons.filter(person => person.address.city == city);
    console.log(persons1);
};

function movePersonsNoCityAtBeginning(persons, city) {
    persons.sort(function compare(a ,city){
        if(a.address.city == b){
            return 1;
        }
        if(a.address.city != b){
            return -1;
        }
        return 0; 
    });
    console.log(persons);
};

getPersonsCity(persons, 'Rehovot');
movePersonsNoCityAtBeginning(persons, 'Rehovot');


