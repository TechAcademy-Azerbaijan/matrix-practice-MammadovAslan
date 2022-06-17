// Use this matrix for solution
let matrix = [
    [4, -2, 5],
    [1, -4, -12],
    [0, 1, -3]
]

let count = 0
let result = 0

for(let i = 0;i<matrix.length;i++){
    for(let j = 0;j<matrix.length;j++){
        if(matrix[i][j] <0 && matrix[i][j]%2==0){
            count++
            result +=matrix[i][j]
        }
    }
}

console.log(count);
console.log(result);