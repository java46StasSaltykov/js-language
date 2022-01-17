function encode(num, codingString){
    let check = checkString(codingString);
    if(check == false){                                             // [Daniel] simply if (!checkString(...)) { log error etc }
        console.log("Coding string contains repeated symbols!");
        return; 
    }
    let base = baseCount(codingString);                             // const base = codingString.length   // all is already counted
    let res = "";
    do{
        const digit = Math.trunc(num % base);                       // trunc is not needed here as explained at webnar
        const symb = getSymbol(digit, codingString);
        res = symb + res;
        num = Math.trunc(num/base);
    }while(num >= 1);
    return res;
}

console.log(encode(4, 'abcdev'));

function getSymbol(digit, codingString){
    let symb = codingString[digit];
    return symb;
}

function baseCount(codingString){                                   // not needed at all
    const arrString = codingString.split(""); 
    let base = 0;
    for(let i = 0; i < arrString.length; i++){
        base++;
    }
    return base;
}

function checkString(codingString){
    const arrString = codingString.split(""); 
    let count = 0;
    let res = true;
    for(let i = 0; i < arrString.length; i++){
        for(let j = 0; j < arrString.length; j++){
            if(arrString[i] == arrString[j]){
                count++;                                        // simply return false immedatelly
                if(count > 1){
                    res = false; 
                }
            }
        }
        count = 0;
    }
    return res;
}
