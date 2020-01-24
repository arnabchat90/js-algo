function plusMinus(arr) {
    let positiveNumers = 0;
    let negetiveNumbers = 0;
    let totalZeros = 0;
    arr.forEach(element => {
        if(element == 0) {
            totalZeros++;
        }
        else if(element > 0) {
            positiveNumers++;
        }
        else {
            negetiveNumbers++;
        }
    });
    // now we have all the counts , just console log the answers
    console.log((positiveNumers / arr.length).toFixed(6));
    console.log((negetiveNumbers / arr.length).toFixed(6));
    console.log((totalZeros / arr.length).toFixed(6));
}

plusMinus([-4,3,-9,4,0,1]);