function titleCase(title, minorWords) {
        let newArr = [];
        let minorArr = [];
        if (minorWords) {
            minorArr = minorWords.toLowerCase().split(" ");
        }
        else if (!title) {
            return ''
        }
        title.toLowerCase().split(" ").forEach((elem, index) => {
            if (index === 0 || !minorArr.includes(elem)) {
                elem = elem.toLowerCase();
                elem = `${elem[0].toUpperCase()}${elem.slice(1)}`;
                newArr.push(elem);
            }
            else {
                newArr.push(elem);
            }

        })
        return newArr.join(" ");

}




console.log (titleCase('a clash of KINGS'));

