function removeDuplicateWords (str) {
    let arr = str.split(" ");
    let intermed = [arr[0]];
    let result = [arr[0]];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            console.log(`check for j = ${j}`)
                if (arr[i] !== arr[j]) {
                    console.log(`${arr[i]} doesn't match ${arr[j]}`)
                }
        }
    }

  }



  console.log (removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))