function persistence(num) {
  let counter = 0;
  while (num >= 10) {
      //convert whole number into an array of strings strarr
      let strarr = [];
      strarr = num.toString().split("");
      //convert all individual items of the string array to numbers in a new array of numbers numarr
      let numarr = [];
      for (let i = 0; i < strarr.length; i++) {
        numarr.push(Number(strarr[i]));
      }
      //multiply every number
      let multres = numarr[0];
      for (let i = 1; i < numarr.length; i++) {
        let intermediary = multres;
        multres = intermediary * numarr[i];
      }
      //increase counter by 1 because of 1 round of multiplication
      counter++;
      //return result of multiplication to cross check is the number is < 10
      num = multres;
  }
  console.log (counter);
}


persistence(39) //=== 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

persistence(999) //=== 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
//
persistence(4) //=== 0 // because 4 is already a one-digit number
