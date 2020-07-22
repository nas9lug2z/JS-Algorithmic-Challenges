function meeting(s) {
    let unsortedArr = [];
    //let's create objects
    //we need a for loop and assign values to objects
    for (let item of s.split(";")) {
        unsortedArr.push(
            {
                "surname": item.split(":")[1],
                "first_name": item.split(":")[0]
            }
        )

    }
    console.log(unsortedArr);
}


meeting ("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")