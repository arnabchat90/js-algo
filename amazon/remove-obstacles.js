// function removeObstacle(numRows, numColumns, lot) {
//     //parameter definition
//     //numRows = number of rows of the lot
//     //numColumns = number of columns of the lot
//     //lot - 2d array of the lot, which consists of 1, 0 and 9.

//     //problem objective - reach 9 with lowest number of steps, starting from 0,0.
//     //you can only go though 1 and not 0.
//     let steps = 0;
//     let result = [];
//     //1. Find where 9 is present in the two d array
//     let positionOfObstacle = [];
//     lot.forEach((row,rowIndex) => {
//         row.forEach((val, colIndex) => {
//             if(val == 9) {
//                 positionOfObstacle.push({rowIndex,colIndex});
//             }
//         });
//     });
//     //there can only be one obstracle, so return -1, this is an invalid scenario
//     if(positionOfObstacle.length != 1) {
//         return -1;
//     }
//     let currentColValue = 0;
//     let dontGoRight = false;
//     //2. Find possible paths from 0,0 to positionOfobstacle
//     //try to go down till the rowIndex of positionOfObstacle if not possible then move one column and then try to again go down again
//     for(let i=0;i<=numRows;i++) {
//         for(let j=currentColValue; j<=numColumns;j++) {
//             if(lot[i][j] === 1 && lot[i+1][j] == 1 && i+1 <= numRows) {
//                 //can go down the rows, no need to check rest of the columns
//                 steps++;
//                 break;
//             }
//             else if(lot[i][j] === 1 && lot[i][j+1] == 1 && j+1 <= numColumns && !dontGoRight) {
//                 //go to the right
//                 currentColValue = j+1;
//                 steps++;
//                 continue;
//             }
//             else if(lot[i][j] === 1 && lot[i-1][j] == 1 && i-1 <= 0) {
//                 //go to the top
//                 steps++;
//                 dontGoRight = true;
//                 continue;
//             }
//             else if(lot[i][j] === 1 && lot[i][j-1] == 1 && j-1 >= 0) {
//                 //go to the left
//                 currentColValue = j-1;
//                 i = i-1;
//                 dontGoRight = true;
//                 steps++;
//                 break;
//             }
//             else if(lot[i][j] === 0 && lot[i][j+1] === 0 && lot[i+1][j] === 0) {
//                 //no where to go
//                 return -1;
//             }
//             else {
//                 //either nine or invalid
//                 if(lot[i][j+1] == 9 || lot[i+1][j]) {
//                     steps++;
//                     return steps;
//                 }
//                 else {
//                     return -1
//                 }
//             }
//         }
//     }

//     return steps;

// }

// console.log(removeObstacle(5,4,[[1,1,1,1]
//     ,[0,0,1,1]
//     ,[0,9,0,1]
//     ,[1,1,0,1]
//     ,[0,1,1,1]]));