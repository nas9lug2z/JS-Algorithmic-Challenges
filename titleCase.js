function titleCase(title, minorWords) {
    //function to return a capitalized string
    function firstLetterToUpperCase(str) {
        let word = str.split("");
        word[0] = word[0].toUpperCase();
        return word.join("");
    }
    //make all lowercase first
    title = title.toLowerCase();
    let arr = title.split(" ");
    let result = [];
    //loop through every word of the array
    for (let i = 0; i < arr.length; i++) {
        //capitalize the first word anyway
        if (i === 0) {
            result.push(firstLetterToUpperCase(arr[i]));
        }
        //check if the word is not the first word and is an exception
        if (minorWords != undefined) {
            minorWords = minorWords.toLowerCase();
            let minorArr = minorWords.split(" ");
            for (let exception of minorArr){
                if (i != 0 && arr[i] === exception) {
                    result.push(arr[i]);
                }
              }
        }
        //if the word is not an exception then capitalize the first letter
        if (result.length < i + 1) {
            result.push(firstLetterToUpperCase(arr[i]));
        }
  }
  return result.join(" ");
}




console.log (titleCase('the quick brown fox'));

