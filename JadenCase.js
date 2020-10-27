

function jadenCase (str) {
  function capitalize(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  let result = [];
  str.split(" ").forEach(elem => result.push(capitalize(elem)))

  return result.join(" ");
}

console.log(jadenCase ("hello woRLld"))
