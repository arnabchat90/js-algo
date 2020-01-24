function getMinimumCost(k, c) {
    //sort the numbers in decending order
    let totalCost = 0;
    let noOfCustomerReturns = 0;
    c.sort((a, b) => b - a);
    return calculateMinimumCost();

    function calculateMinimumCost() {
        if (c.length - k > 0) {
            //do the recursive loop by
            totalCost += (noOfCustomerReturns + 1) * c.slice(0,k).reduce((total,num) => total+num);
            c.splice(0,k);
            noOfCustomerReturns++;
            return calculateMinimumCost();
        }
        else {
            //do the addition of cost of the remaining items and return result
            totalCost += (noOfCustomerReturns + 1) * c.reduce((total,num) => total+num);
            return totalCost;
        }
    }
}

console.log(getMinimumCost(3, [1,3,5,7,9]));