class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
        if (this.lives > 0) {
            if (n === this.number) {
                return true
            }
            else {
                this.lives--;
                return false
            }
        }
        else {
            throw 'Error!'
        }

    }
  }

  let guesser = new Guesser(10, 2);
  console.log(guesser.guess(10));
  console.log(guesser.guess(10))
  console.log(guesser.guess(10))
  console.log(guesser.guess(10))

