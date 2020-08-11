function cost (mins) {
    switch (true) {
        case mins <= 65:
            return 30;
        case mins >= 65:
            let price = 30;
            mins = mins - 60;
            if (mins >= 30) {
                let remainderMin = mins % 30;
                let halfHours = (mins - remainderMin) / 30;
                price += (10 * halfHours);
                remainderMin <= 5 ? price : price += 10;
            }
            else {
                mins <= 5 ? price : price += 10;
            }
            return price;
    }
}


console.log(cost(84));