function middleChar(str) {
  if (str.length % 2 === 0) {
    let middle = (str.length / 2);
    return str[middle - 1] + str[middle];
  }
  else {
    return str[Math.floor(str.length / 2)];
  }
}

middleChar("testing")

//option 2 with iterary operator
function middleChar(str) {
  return str.length % 2 === 0) ? str[(str.length / 2) - 1] + str[(str.length / 2)]: str[Math.floor(str.length / 2)]
}

middleChar("testing")
