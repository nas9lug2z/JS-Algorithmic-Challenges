function solution(number){
  //create an array of numbers
  let arr = [];
  //add to rray all divisibles by 3
  for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          arr.push(i);
      }
  }
  let result = 0;
  for (let eachNum of arr) {
    result += eachNum;
  }
  return result;
}

solution(10);