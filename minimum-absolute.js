// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);
    var minAbsDiff = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        var currDiff = Math.abs(arr[i] - arr[i + 1]);
        if (currDiff < minAbsDiff) {
            minAbsDiff = currDiff;
        }
    }

    return minAbsDiff;

}

console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17]))