
function calcPascal(i,j,memoizedArr) {
    if(j==0 || i==j) {
        memoizedArr[i.toString() + j.toString()] = 1;
        return 1;

    }
    else if(memoizedArr[(i-1).toString() + (j-1).toString()] && memoizedArr[(i-1).toString() + (j).toString()]) {
        return memoizedArr[(i-1).toString() + (j-1).toString()] + memoizedArr[(i-1).toString() + (j).toString()]
    }
    else {
        memoizedArr[(i-1).toString() + (j-1).toString()] = memoizedArr[(i-1).toString() + (j-1).toString()] ? memoizedArr[(i-1).toString() + (j-1).toString()] : calcPascal(i-1,j-1,memoizedArr)
        memoizedArr[(i-1).toString() + (j).toString()] = memoizedArr[(i-1).toString() + (j).toString()] ? memoizedArr[(i-1).toString() + (j).toString()]  : calcPascal(i-1,j, memoizedArr)
        memoizedArr[i.toString() + j.toString()] = memoizedArr[(i-1).toString() + (j-1).toString()] + memoizedArr[(i-1).toString() + (j).toString()];
        return memoizedArr[i.toString() + j.toString()]

    }
}

var getRow = function(rowIndex) {
    let memoizedArr = {};
    let currentRow = [];
    for(let j=0;j<=rowIndex;j++) {
        currentRow.push(calcPascal(rowIndex,j,memoizedArr))
    }
    return currentRow;
};


