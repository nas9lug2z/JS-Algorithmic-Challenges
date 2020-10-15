function removeDuplicateWords (str) {
        const set = new Set(str.split(" "));
        return Array.from(set).join(" ");

  }



  console.log (removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))