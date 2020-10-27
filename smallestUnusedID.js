function nextId(ids){
    let theSmallest = 0;
    let arr = new Set(ids)
    while (arr.has(theSmallest)) {
        theSmallest++
    }
    return theSmallest;
}


console.log(nextId([0,1,2,3,5]))