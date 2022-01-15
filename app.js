//---- STRINGS ----//

const str1 = 'abc';
const str2 = 'abc';
console.log(`str == str2 is ${str1 == str2}`);
console.log(`"abc" < "ab" is ${str1 < "s"}`);
console.log(`"123" > 23 is ${"123" > 23}`);
console.log(`"123" > "23" is ${"123" > "23"}`);

///////////////////////////////////////////////////////////////////////////////////////////////
// If a logical expression contains both string and number, js will convert string to number.//
// If string doesn't contain a number, the result of convertion will be NaN. 
// In any logical expression, if there is NaN, then the result will be false. 
console.log(`"abc" > 23 is ${"abc" > 23}`);
console.log(`"abc" < 23 is ${"abc" > 23}`);
console.log(`"abc" != 23 is ${"abc" != 23}`); // The actual expression is  ${!("abc" == 23)} so it gives "true" as a result. 
///////////////////////////////////////////////////////////////////////////////////////////////
console.log();
function stringProcessing(str){
    const strP = "" + str; 
    console.log(`"${str}"[4] is ${str[4]}`);
    console.log(`length of "${str}" is ${str.length}`);
    console.log(`"${str}" includes "abc" is ${strP.includes("abc")}`);
    console.log(`substring of "${str}" beginning from index 2 to index 5 is ${strP.substring(2, 5)}`);
    console.log(`index of substring "ll" in the "${str}" is ${strP.indexOf("ll")}; last index of substring "ll" in the "${str}" is ${strP.lastIndexOf("ll")}`);
}
stringProcessing("abcd*lmn*ll(oo&&ttll");
console.log();

///////////////////////////////////////////////////////////////////////////////////////////////

function encode(num, base){
    // base from 2 to 10
    let res = "";
    do{
        const digit = Math.trunc(num % base); 
        const symb = getSymbol(digit);
        res = symb + res;
        num = Math.trunc(num/base);
    }while(num >= 1);
    return res;
}
function getSymbol(digit){
    // base from 2 to 10
    return "" + digit; // it will work only for base <=10
}
console.log(encode(10, 2)); 


/* Homework 

Write function encode(num, codingString) 
base = length of codingString 
codingString - any string without repeated symbols, must validate codingString that the symbols in it aren't repeated!
algorithm the same as specified above
getSymbol(digit, codingString) using operator []

*/
