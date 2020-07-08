function theSame(a, b) {
    let valCheck = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === null || a[i] === null || b[i] === undefined || a[i] === undefined) {
            valCheck = 1;
            return false;
        }
    }

        if (valCheck === 0) {
            //let's sort arrays
            a.sort(function(a, b){return a - b});
            b.sort(function(a, b){return a - b});

            //add first condition: if arrays don't have same length, return false

            let counter = 0;
            for (let i=0; i < a.length; i++) {
                if (a[i]*a[i] === b[i]) {
                    counter++;
                }
            }
            return counter === a.length ? true : false;

        }
        else {
            return false;
        }
}



a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

theSame(a, b);