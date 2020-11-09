function solution(number) {
  let resultarr = [];
  let decoder = (singleNumber) => {
    //Rules
    console.log(`running decoder on ${singleNumber.letter}`);

    if (singleNumber.repeated === true) {
      let toBePushed = singleNumber.letter.repeat(
        Math.floor(number / singleNumber.value)
      );
    }
    else {
      let 
      let toBePushed = 
    }
    resultarr.push(toBePushed);
    number = number % singleNumber.value;
  };

  class RomanNumber {
    constructor(value, letter, repeated) {
      this.value = value;
      this.letter = letter;
      this.repeated = repeated;
    }
  }
  let romanNumbers = [];
  const i = new RomanNumber(1, 'I', true);
  const v = new RomanNumber(5, 'V', false);
  const x = new RomanNumber(10, 'X', true);
  const l = new RomanNumber(50, 'L', false);
  const c = new RomanNumber(100, 'C', true);
  const d = new RomanNumber(500, 'D', false);
  const m = new RomanNumber(1000, 'M', true);

  romanNumbers.push(m, d, c, l, x, v, i);

  //Rules
  romanNumbers.forEach((obj) => {
    number >= obj.value ? resultarr.push(decoder(obj)) : '';
  });

  return resultarr.join('');
}
//
console.log(solution(3649));
