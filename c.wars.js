function initials(n){
  let arr = n.split(" ");
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i][0].toUpperCase() + ".");
  }
  //capitalize last word
  function capitalizeFirst (str) {
      let firstLetter = str.slice(0, 1);
      return firstLetter.toUpperCase() + str.slice(1, str.length);
  }
  result.push(capitalizeFirst(arr[arr.length-1]));
  return result.join("");
}


console.log(initials('Barack hussain obama'))