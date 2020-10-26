function generateHashtag (str) {
    const capitalize = string => {
        let newArr = [];
        string.split(" ").forEach(elem => {
            elem = `${elem[0].toUpperCase()}${elem.slice(1)}`;
            newArr.push(elem);
        })
        return newArr.join(" ");
    }

    let arr = [];
    str.split(' ').forEach(element => {
        if (element) {
            arr.push(element);
        }
    })
    arr.forEach((element, index) => arr.splice(index, 1, capitalize(element)));

    let result = `#${arr.join('')}`;
    if (result.length <= 1 || result.length > 140) {
        return false
    }
    else {
        return result
    }
  }

 console.log(generateHashtag("code" + " ".repeat(140) + "wars"))