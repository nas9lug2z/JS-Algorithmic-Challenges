function meeting(s) {
  let unsortedArr = [];
  for (let item of s.split(";")) {
    unsortedArr.push({
      surname: item.split(":")[1].toUpperCase(),
      first_name: item.split(":")[0].toUpperCase(),
    });
  }
  unsortedArr.sort((a, b) => {
    if (a.surname === b.surname) {
      if (a.first_name > b.first_name) {
        return 1;
      } else if (a.first_name < b.first_name) {
        return -1;
      }
    } else if (a.surname > b.surname) {
      return 1;
    } else if (a.surname < b.surname) {
      return -1;
    }
  });
  let result = [];
  unsortedArr.forEach((elem) => {
    result.push(`(${elem.surname}, ${elem.first_name})`);
  });
  return result.join("");
}

console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
);
