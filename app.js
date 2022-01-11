console.log("Hello world");

// Output for var: 3 3 3
// for(var i = 0; i < 3; i++){
//     setTimeout(function(){
//         console.log(i);
//     })
// }
// for(let i = 0; i < 3; i++){
//     setTimeout(function(){
//         console.log(i);
//     })
// }
const fun = function(a, b) {
    return a + b;
}

let a = 5;

// console.log(a ** 2);
// console.log(fun(10, 20));
// console.log(a(10, 20)); error
// console.log(fun ** 2); NaN - not a number

console.log("12" + 12, '"12" + 12'); // JS defines that operattor + exists for strings, that's why number 12 will be converted to string.
console.log("12" - 12); // JS defines that operattor - doesn't exist for strings, that's why string will be converted to number.
console.log("ab" - 12); // NaN ... JS will try to convert ab to number and as a result of this there will be value NaN.

// Sometimes there is a need for explicit convertion from a string to a number. 
// One of the methods is unary plus "+", it is the simplest way for the explicit convertion of a string to a number.
 
console.log(`+"12" + 12 = ${+"12" + 12}`);

// HW
// 1. Using only two letters "a" "s" write the word "ananas".
// 2. Write a function "calculator" that can perform any arithmetic operation on two numbers (+, -, *, /). 
// 3. Write any example for running the following expression fun(5)(10, 3) and get any result.  