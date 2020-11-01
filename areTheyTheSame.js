function comp(a, b) {
  if (a === null || b === null) {
    return false;
  }
  a.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    }
  });
  b.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    }
  });
  let aSquared = [];
  let isFalse = false;
  if (a.length === b.length) {
    aSquared = a.map((x) => x * x);
    aSquared.forEach((elem, index) => {
      if (elem !== b[index]) {
        isFalse = true;
      }
    });
  } else {
    return false;
  }
  return isFalse ? false : true;
}

a = [46, 43, 70, 12, 95];
b = [2116, 1850, 4900, 144, 9025];

console.log(comp(a, b));
