var Ghost = function () {
    this.random = function () {
        let randomNum = Math.floor(Math.random() * 4);
        const arr = ['white', 'yellow', 'purple', 'red'];
        return arr[randomNum];
    };
    this.color = this.random();
  };


let ghost1 = new Ghost();

console.log(ghost1.color);

