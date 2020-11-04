function solution(number) {
  let resultarr = [];
  let m = "M";
  switch (true) {
    case number >= 1000:
      resultarr.push(m.repeat(Math.floor(number / 1000)));
  }
  return resultarr.join("");
}

console.log(solution(3395));
