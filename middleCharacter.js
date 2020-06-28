function middleChar(str) {
  if (str.length % 2 === 0) {
    let middle = (str.length / 2);
    return str[middle - 1] + str[middle];
  }
  else {
    let middle = Math.round(str.length / 2);
    return str[middle - 1];
  }
}

middleChar("abcdefg")
