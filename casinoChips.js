function casinoChips (arr) {


    let counter = 0;
    let stop = false;
    while (stop === false)  {
        let zeroCount = 0;
        //find first minimum
        let min = arr[0];
        let minI = 0;
        for (let i = 0; i < 3; i++) {
            if (arr[i] === 0) {
                if (i === 0) {
                    min = arr[i+1];
                }
            }
            else if (arr[i] <= min) {
                min = arr[i];
                minI = i;
            }
        }

        //now we have to find max
        let max = arr[2];
        let maxI = 0;
        for (let i = 2; i >= 0; i--) {
            if (arr[i] === 0) {
                //nothing happens
            }
            else if (arr[i] >= max) {
                max = arr[i];
                maxI = i;

            }
        }
        arr[minI]--;
        arr[maxI]--;
        counter ++;

        //add check

        for (let item of arr) {
            if (item === 0) {
                zeroCount++;
            }
        }
        if (zeroCount >= 2) {
            stop = true;
        }
    }
    return counter;

}

console.log (casinoChips([1, 23 ,8]));
