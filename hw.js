const arHW = [13, 28, 4, 15, 25, -10, 40, 17, 27];

arHW.sort(function(a, b){
    return (a % 2 - b % 2) || (a % 2 ? b - a : a - b);
})

console.log(arHW);
console.log();

//////////////////////////////////////////////////////////////////////////

function matrixTransp(matrix){
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
           const temp = matrix[i][j];
           matrix[i][j] = matrix[j][i];
           matrix[j][i] = temp;
        };
     }
     console.log(matrix);
}

const matrix3 = [[1,2], [3,4], [5,6]];
matrixTransp(matrix3);
