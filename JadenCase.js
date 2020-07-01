function capitalize(word){
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}


function jadenCase (str) {
  let words = str.split(" ");
  let result = [];
  for (let word of words) {
    result.push(capitalize(word));
  }

  return result.join(" ");
}

console.log(jadenCase ("hello woRLld"))
