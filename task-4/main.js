let n = 5;
// let i = 4;
// let j = 2;

function matrix(n){
    let result = new Array(n).fill().map(() => new Array(n).fill("*"))
    let counter = 1
    let startCol = 0
    let endCol = n - 1
    let startRow = 0
    let endRow = n - 1

    while(startCol <= endCol && startRow <= endRow){

        for(let i = startCol;i<=endCol;i++){
            result[startRow][i] = counter
            counter ++
        }

        startRow++

        for(let i = startRow;i<=endRow;i++){
            result[i][endCol] = counter
            counter++
        }

        endCol--

        for(let i = endCol; i>=startCol;i--){
            result[endRow][i] = counter
            counter++
        }

        endRow--

        for(i = endRow; i>=startRow;i--){
            result[i][startCol]= counter
            counter++
        }

        startCol ++
    }


    return result
}
matrix(n);

let a = 4;
let b = 2;

console.log(matrix(n)[a-1][b-1]);


