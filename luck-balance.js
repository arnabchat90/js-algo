'use strict';

// Complete the luckBalance function below, k is the maximum important contest lina can lose,
// contests is a 2d array where each contest[i] has luck factor(n) and importance as 0 or 1
//task is to maximize the total luck
function luckBalance(k, contests) {
    var importantContests = contests.filter((item) => {
        return item[1] > 0;
    });
    var numberOfImportantContestToWin = importantContests.length - k;
    if(numberOfImportantContestToWin < 0) {
        //lina can loose all important matches
        numberOfImportantContestToWin = 0;
    }
    var importContestLuck = [];
    var nonImportantContestLuck = [];
    contests.forEach((item) => {
        if(item[1] > 0) 
            importContestLuck.push(item[0]);
        else
            nonImportantContestLuck.push(item[0]);
    });
    importContestLuck.sort((a,b) => a - b);
    var contestsToWin = importContestLuck.slice(0,numberOfImportantContestToWin);
    var remainingContestToLose = importContestLuck.slice(numberOfImportantContestToWin);
    //total luck that can be won
    let totalLuckGained = 0;
    totalLuckGained += remainingContestToLose.length > 0 ? remainingContestToLose.reduce((total,num) => total + num) : 0;
    totalLuckGained += nonImportantContestLuck.length > 0 ? nonImportantContestLuck.reduce((total,num) => total + num) : 0;

    //total luck that needs to be lost
    let totalLuckLost = 0;
    totalLuckLost += contestsToWin.length > 0 ? contestsToWin.reduce((total,num) => total + num) : 0;

    return totalLuckGained - totalLuckLost;

}

console.log(luckBalance(5,[[13,1],[10,1],[9,1],[8,1],[13,1],[12,1],[18,1],[13,1]]));

