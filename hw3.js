function Deferred() {
    this.functions = [];
};

Deferred.prototype.then = function(thenFn) {
    this.functions.push(thenFn);
};

Deferred.prototype.resolve = function(res) {
    this.functions.forEach(fn => res = fn(res));
};

const d = new Deferred();

d.then(function(res){ console.log('1 ', res); return 'a'; });

d.then(function(res){ console.log('2 ', res); return 'b'; });

d.then(function(res){ console.log('3 ', res); return 'c'; });
d.resolve('hello');

//////////////////////////////////////////////////////////////////////////////

function MyArray(initialValue) {
    this.value = initialValue;
    this.array = [];
};

MyArray.prototype.setValue = function(value) {
    this.value = value;
    this.array = [];
};

MyArray.prototype.set = function(index, value) {
    this.array[index] = value;
};

MyArray.prototype.get = function(index) {
    return this.array[index] ?? this.value;
};

const myArray = new MyArray(10);
console.log(myArray.get(100)) // displayed out 10
myArray.set(100, 500) //sets 500 at index 100
console.log(myArray.get(200)) //displayed out 10
console.log(myArray.get(100)) //displayed out 500
myArray.setValue(300);
console.log(myArray.get(100)) //displayed out 300
console.log(myArray.get(200)) //displayed out 300
myArray.set(20, 0);
console.log(myArray.get(20, 0));