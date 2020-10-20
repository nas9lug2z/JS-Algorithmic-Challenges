function validParentheses(string){
    let arr = string.split('');
    while (arr.length > 1) {
        if (arr[0] === '(') {
            let j = 0;
            while (arr[j] === '('){
                j++
            }
            arr.splice(j, 1);
            arr.shift();
        }
        else {
            return false;
        }
    }
    return (arr.length === 0 ? true : false) 
}

console.log(validParentheses( "()" ));
