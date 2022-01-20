const arHW = [13, 28, 4, 15, 25, -10, 40, 17, 27];

arHW.sort(function(a, b){
    return (a % 2 - b % 2) || (a % 2 ? b - a : a - b);
})

console.log(arHW);
console.log();

//////////////////////////////////////////////////////////////////////////

function matrixTransp(matrix){
    const res = [];

    for (let i = 0; i < matrix[0].length; i++) {
        res.push([]);
        for(let j = 0; j < matrix.length; j++){
            res[i].push(matrix[j][i]);
        }
    }
    console.log(res);
}

const matrix3 = [[1,2], [3,4], [5,6]];
matrixTransp(matrix3);
