// function sequence (num) {

let seqNum = 0;
    let numArr = [];
    let lastNumArr = [];
    numArr.push(10);
    lastNumArr.push(1, 0);

    console.log(numArr);
    console.log(lastNumArr);



    //print out numbers until 10
    for (let i=0; i <= 10; i++) {
        // console.log(i);
    }

    //now two & three digit numbers
    for (let i=11; i <= 135; i++) {
        let currentNum = [];
        let firstDigit, secondDigit, thirdDigit = 0;
        if (i >= 100) {
            firstDigit = Math.floor(i/100);
            currentNum.push(firstDigit);
            secondDigit = Math.floor((i-(firstDigit*100))/10);
            currentNum.push(secondDigit);
            thirdDigit = i % 10;
            currentNum.push(thirdDigit);
        }
        else if (i < 100) {
            secondDigit = Math.floor(i/10);
            currentNum.push(secondDigit);
            thirdDigit = i % 10;
            currentNum.push(thirdDigit);
        }
        console.log("current num is " + currentNum);
        console.log("last Nums is " + lastNumArr);
        //now we check if in our number array of multiple digits there are same digits

        //firstly, check if current number has 2 or 3 digits

        // if (firstDigit === undefined) {
        //     if ()
        // }
        // else {
            //check if one of the digits was present in the previous number?? how?
        //     if (lastNumArr === firstDigit || lastNumArr === secondDigit || lastNumArr === thirdDigit ) {
        //         console.log("eiii")
        //         i++;
        //         continue;
        //     }
        //     else {
        //          {
        //             console.log("next number is " +secondDigit+thirdDigit);
        //         }
        //         else {
        //             console.log("next number is " + firstDigit+secondDigit+thirdDigit);
        //         }
        // }

        
        // }
    }
// }

// sequence(20)