function factorial(n,memo) {
    if(memo.has(n)) return memo.get(n)
    if(n == 0 || n == 1) {
        memo.set(n,1);
        return 1;
    }
    const val = n * factorial(n-1,memo)
    memo.set(n,val);
    return val
}

function calcPascal(i,j,memo) {
    return factorial(i,memo) / (factorial(j,memo) * factorial(i-j,memo))
}

var getRow = function(rowIndex) {
    let memo = new Map()
    let currentRow = [];
    for(let j=0;j<=rowIndex;j++) {
        currentRow.push(calcPascal(rowIndex,j,memo))
    }
    return currentRow;
};

console.log(getRow(3));



