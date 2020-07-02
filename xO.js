function XO(str) {
  let chars = str.toLowerCase().split("");
  let x = 0;
  let o = 0;
  for (let char of chars) {
    if (char.includes("x")) {
      x++;
    }
    else if (char.includes("o")) {
      o++;
    }
  }
  return x === o ? true : false;

  // if ( x === o) {
  //   console.log("true");
  // }
  // else {
  //   console.log("false");
  // }
}


XO("ooxx");
XO("xooxx")
XO("ooxXm")
XO("zpzpzpp")
XO("zzoo")

console.log("heyeheye")



// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
