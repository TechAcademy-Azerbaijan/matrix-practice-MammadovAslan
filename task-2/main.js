// Use this matrix for solution

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7]
];

let r = 3;          
let c = 2;
let str = ''


for(let i = 0;i<r;i++){
    for(let j = 0;j<c;j++){
        str += matrix[i][j] + ' ';
    }
    str = str.trim()
    str += '\n';
}
console.log(str);


