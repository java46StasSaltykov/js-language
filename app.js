class Person {
        #id; 
        #name;
        constructor(id, name) {
                this.#id = id;
                this.#name = name;
        }
        getId() {
                return this.#id;
        }
        getName() {
                return this.#name;
        }
        toString() {
                return `id: ${this.#id}; name: ${this.#name};`;
        }
};

const person = new Person(123, 'Moshe');
// console.log(`person is ${person}`);

class Employee extends Person {
        #salary;
        constructor (id, name, salary) {
                super(id, name); // call the constructor of the class 'Person'
                this.#salary = salary;
        }
        computeSalary() {
                return this.#salary;
        }
        toString() {
                return super.toString() + ` salary: ${this.computeSalary()};`; 
        }
};

const person2 = new Employee(124, 'Sarah', 5000);
// console.log(`person2 is ${person2}`);
// console.log(typeof(person2)); // just object
// console.log(person2.constructor.name); // only this way js allows getting constructor name

class Child extends Person {
        #kinderGarden;
        constructor (id, name, kinderGarden) {
                super(id, name);
                this.#kinderGarden = kinderGarden;
        }
        getKinderGarden() {
                return this.#kinderGarden;
        }
        toString() {
                return super.toString() + ` kinderGarden: ${this.#kinderGarden};`;
        }
};

const person3 = new Child(125, 'Yakov', 'Shalom');
// console.log(`person3 is ${person3}`);

class WageEmployee extends Employee {
        #hours;
        #wage;
        constructor(id, name, salary, hours, wage){
                super(id, name, salary);
                this.#hours = hours;
                this.#wage = wage;
        }
        computeSalary() {
                return super.computeSalary() + this.#hours * this.#wage;
        }
}

const person4 = new WageEmployee(126, 'Asaf', 1000, 10, 100);
// console.log(`person4 is ${person4}`);

//////////////////////////////////   HOMEWORK  //////////////////////////////////////

const persons = [
        new Child(100, 'Olya', 'Shalom'),
        new Child(101, 'Serega', 'Boker'),
        new Child(102, 'Kolya', 'Shalom'),
        new Employee(103, 'Vasya', 1000),
        new WageEmployee(104, 'Tolya', 1000, 10, 100)
];

function countOfPersonType(persons, type) {
        let count = 0;
        persons.forEach(element => element.constructor.name == type ? count++ : count);
        return count;
};
console.log(countOfPersonType(persons, 'WageEmployee'));


// function computeSalaryBudget(persons) {
//         let count = persons.reduce((acc, cur) => 'computeSalary' in cur === true ? acc = acc + cur.computeSalary() : acc , 0);
//         return count;
// };
// console.log(computeSalaryBudget(persons));


function countChildrenKindergarden(persons, kindergarden) {
        let count = 0;
        persons.forEach(element => 'getKinderGarden' in element === true && element.getKinderGarden() === kindergarden ? count++ : count);
        return count;
};
console.log(countChildrenKindergarden(persons, 'Shalom'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testOutput(fun, expected) {
        console.log(`function ${fun.name} ; expected result: ${expected} ; actual result: ${fun()} `)
}
function computeSalaryBudget(persons) {
        const allEmploees = persons.filter(p => !!p.computeSalary);
        const salaryValues = allEmploees.map(p => p.computeSalary());
        return salaryValues.reduce((res, cur) => res + cur);
}

// testOutput(WageEmployee.prototype.computeSalary.bind(person4), 2000);
// testOutput(computeSalaryBudget.bind(undefined, persons), 3000);
testOutput(countOfPersonType).bind(undefined, persons, 'Child', 3);