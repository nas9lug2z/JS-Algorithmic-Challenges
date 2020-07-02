function squareDigits(num) {
  let numString = num.toString().split("");
  let resultstr = [];
  for (i = 0; i < numString.length; i++) {
    let indnum = Number(numString[i]);
    resultstr.push(Math.pow(indnum, 2).toString())
  }
  return Number(resultstr.join(""));
}

squareDigits(1234);
