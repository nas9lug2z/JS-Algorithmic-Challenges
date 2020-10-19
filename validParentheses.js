function validParentheses(string){
    console.log(`atring length is ${string.length}`)
    //first check on even numbers
        if (string.length % 2 !== 0) {
            return false;
        }
        else if (string.length === 0) {
            console.log('trueee')
            return true;
            break;
        }
        else {
            let arr = string.split('');
            arr.forEach((letter, index) => {
                let openingPar = null;
                let closingPar = null;
                if (letter === '(') {
                    openingPar = index;
                    let i = arr.length - 1;
                    while (!i === '(') {
                        i--;
                    }
                    closingPar = i;
                }
                else {
                    return false
                }
                arr.shift();
                arr.pop();
                console.log(arr.join(''));
                validParentheses(arr.join(''));
            })
        }
    
}

console.log(validParentheses( "(())((()())())" ));
