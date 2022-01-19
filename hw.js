const arHW = [13, 28, 4, 15, 25, -10, 40, 17, 27];

arHW.sort(function(a, b){
    return (a % 2 - b % 2) || (a % 2 ? b - a : a - b);
})

console.log(arHW);
console.log();

//////////////////////////////////////////////////////////////////////////

function matrixTransp(matrix){
    for(let i = 0; i < matrix.length; i++){
        let row = '';
        for(let j = 0; j < matrix[j].length; j++){
            row = row + matrix[j][i] + '  '; 
        }
        console.log(row);
    }
}

const matrix3 = [[1,2], [3,4], [5,6]];
matrixTransp(matrix3);
