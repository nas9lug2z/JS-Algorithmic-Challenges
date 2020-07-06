function songDecoder(song){
  let word = [];
  word = song.split("WUB");
  for (let i=0; i < song.length; i++) {
    if (word[i] === "") {
      word.splice(i, 1);
    }
  }
   return word.join(" ");
}


songDecoder("AWUBWUBWUBBWUBWUBWUBC")
  // =>  WE ARE THE CHAMPIONS MY FRIEND
