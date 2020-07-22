function arrayElementParity (arr) {
    let elem;
    for (elem of arr){
        if (elem < 0) {
            elem = elem * -1;
        }
    }
    console.log(arr)
}
arrayElementParity([1, -1, 2, -2, 3]);