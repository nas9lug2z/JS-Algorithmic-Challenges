function casinoChips (arr) {
    let counter = 0;
    let stop = 0;
    while (stop === 0)  {
        let zeroCount = 0;
        console.log(`initial array in a while loop is ${arr}`);
        //find first minimum
        let min = arr[0];
        let minI = 0;
        for (let i = 0; i < 3; i++) {
            if (arr[i] === 0) {
                //nothing happens
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
        console.log(`now min arr[${minI}] equals to ${arr[minI]}`);
        console.log(`now max arr[${maxI}] equals to ${arr[maxI]}`);
        console.log(`arr now is ${arr}`)
        counter ++;
        console.log(`counter added and total is ${counter}`)
        console.log(`zerocount is ${zeroCount}`)
        //add check

        for (let item of arr) {
            if (item === 0) {
                zeroCount++;
            }
        }
        if (zeroCount >= 2) {
            stop = 1;
        }
    }
    return counter;

}

console.log (casinoChips([8, 2 ,8]));
