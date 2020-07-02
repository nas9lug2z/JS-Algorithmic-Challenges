function accum(str) {
  let letter = str.split("");
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let together = letter[i].toUpperCase() + letter[i].toLowerCase().repeat(i);
    result.push(together);

  }
  return result.join("-");
}

accum("aBcDe");
