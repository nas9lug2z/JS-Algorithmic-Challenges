function squareDigits(num) {
  let numString = num.toString().split("");
  let resultstr = [];
  for (i = 0; i < numString.length; i++) {
    let indnum = Number(numString[i]);
    resultstr.push(Math.pow(Number(numString[i]), 2))
  }
  console.log(Number(resultstr.join("")));
}

squareDigits(1234);
