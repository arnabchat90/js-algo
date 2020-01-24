
function calcCompletePascal(n) {
    let triangle = [];
    for(let i=0;i<n;i++) {
        let currentRow = [];
        for(let j=0;j<=i;j++) {
            if(j==0 || j == i) {
                currentRow[j] = 1;
            }
            else {
                currentRow[j] = triangle[i-1][j-1] + triangle[i-1][j];
            }
        }
        triangle.push(currentRow)
    }
    return triangle[n-1];
}

var getRow = function(rowIndex) {
    return calcCompletePascal(rowIndex+1)
};


console.log(getRow(3))