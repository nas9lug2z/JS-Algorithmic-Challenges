function chessboard(number) {
    let hashSp = "# ";
    let spaceHa = " #";
      for (let i=0; i < (number/2); i++){
        if (number % 2 === 0) {
          console.log(spaceHa.repeat(number/2));
          console.log(hashSp.repeat(number/2));
        }
        else {
          console.log(spaceHa.repeat(number/2) + " ");
          console.log(hashSp.repeat(number/2) + "#");
        }
      }
  }
  chessboard(10);