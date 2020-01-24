
function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    //find out the middle point for divide and concur algo
    const middle = Math.floor(arr.length/2);
    //pass first half of the array and the second half of the array recursively
    let firstArr = mergeSort(arr.slice(0,middle));
    let secondArr = mergeSort(arr.slice(middle));

    return merge(firstArr, secondArr);
}

console.log(mergeSort([9,5,8,2,4,1,3,6,7]));

function merge(firstArr, secondArr) {
    let result = [];
    let indexA = 0;
    let indexB = 0;
    //merge while both array has items - 
    while (indexA < firstArr.length && indexB < secondArr.length) {
        if (firstArr[indexA] < secondArr[indexB]) {
            result.push(firstArr[indexA]);
            indexA++;
        }
        else {
            result.push(secondArr[indexB]);
            indexB++;
        }
    }
    //when the code reaches this point that means one of the other array has been parsed and pushed completely
    //now push the remaining items in the list if any, and increase the index
    while (indexA < firstArr.length) {
        result.push(firstArr[indexA]);
        indexA++;
    }
    while (indexB < secondArr.length) {
        result.push(secondArr[indexB]);
        indexB++;
    }
    return result;
}
