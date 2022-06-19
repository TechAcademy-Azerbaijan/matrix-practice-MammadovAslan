// Use this matrix for solution

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7]
];

let r = 3;          
let c = 2;
let first = []
let second = []
let third = []

for(let i = 0;i<r;i++){
    for(let j = 0;j<c;j++){
        if(first.length !== 2){
            first.push(matrix[i][j])
        }else if(second.length !==2){
            second.push(matrix[i][j])
        }else if(third.length !== 2){
            third.push(matrix[i][j])
        }
    }
}

console.log(first.join(' '));
console.log(second.join(' '));
console.log(third.join(' ')); 



