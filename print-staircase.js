'use strict';
function staircase(n) {
    //n is the height and width of the staircase
    for(let i=n;i>0;i--) {
        for(let j=1;j<i;j++) {
            process.stdout.write(" ");
        }
        for(let k=i-1;k<n;k++) {
            process.stdout.write("#");
        }
            console.log("");
    }
}

staircase(6);