function countSwaps(a) {
    let swapCount = 0;
    let firstItem = 0;
    let lastItem = 0;
    for(let i=0;i<a.length;i++) {
        for(let j=0; j< a.length -i;j++) {
            if(a[j] > a[j+1]) {
                //swapping conditition
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                swapCount++;
            }
        }
    }
    firstItem = a[0];
    lastItem = a[a.length-1];
    console.log("Array is sorted in "+ swapCount +" swaps.");
    console.log("First Element: " + firstItem);
    console.log("Last Element: " + lastItem)
    return;
}

console.log(countSwaps([6,4,1]))