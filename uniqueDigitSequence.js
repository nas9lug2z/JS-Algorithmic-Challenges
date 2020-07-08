// function sequence (num) {

let seqNum = 0;
    let numArr = [];
    let firstDigit, secondDigit, thirdDigit = 0;


    
    //print out numbers until 10
    for (let i=0; i < 10; i++) {
        // console.log(i);
    }

    //now two & three digit numbers
    for (let i=10; i <= 135; i++) {
        let lastNum = [];
        if (i >= 100) {
            firstDigit = Math.floor(i/100);
            lastNum.push(firstDigit);
            console.log(firstDigit)
            secondDigit = Math.floor(i-(firstDigit*100)/10);
            lastNum.push(secondDigit);
            thirdDigit = i % 10;
            lastNum.push(thirdDigit);
        }
        else if (i < 100) {
            secondDigit = Math.floor(i/10);
            lastNum.push(secondDigit);
            thirdDigit = i % 10;
            lastNum.push(thirdDigit);
        }
        console.log(lastNum);
    }
// }

// sequence(20)