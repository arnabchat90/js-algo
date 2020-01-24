function countPairs(k,arr) {
    let pairSets = [];
    let usedNumbers = [];
    for(let i=0;i < arr.length;i++) {
        let remainder = k - arr[i];
        if(remainder >= 0 && usedNumbers.indexOf(arr[i]) == -1 && usedNumbers.indexOf(remainder) == -1) {
            if(arr.indexOf(remainder) > -1) {
                pairSets.push([arr[i], remainder]);
                usedNumbers.push(arr[i]);
                usedNumbers.push(remainder);
            }
        }
    }
    return pairSets.length; 
}

//console.log(countPairs(12,[5,7,9,13,11,6,6,3,3]));

console.log(countPairs(6,[12,3,9,3,5,1,12]));