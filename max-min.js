function maxMin(k, arr) {
    arr.sort((a, b) => a - b);
    var unfairness = Number.MAX_SAFE_INTEGER;
    for(let i=0;i<arr.length;i++) {
        var subsetArr = arr.slice(i, i + k);
        if(subsetArr.length >= k) {
            var currentUnfairness = subsetArr[subsetArr.length - 1]  - subsetArr[0];
            if(currentUnfairness < unfairness) {
                unfairness = currentUnfairness;
            }
        }
    }

    return unfairness;
}

console.log(maxMin(5, [4504,
    1520,
    5857,
    4094,
    4157,
    3902,
    822,
    6643,
    2422,
    7288,
    8245,
    9948,
    2822,
    1784,
    7802,
    3142,
    9739,
    5629,
    5413,
    7232]));