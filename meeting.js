function meeting(s) {
    let unsortedArr = [];
    for (let item of s.split(";")) {
        unsortedArr.push(
            {
                "surname": item.split(":")[1],
                "first_name": item.split(":")[0]
            }
        )

    }
    unsortedArr.sort(function (a, b) {
        let surA = a.surname.toLowerCase();
        let surB = b.surname.toLowerCase();
        surA > surB ? return: -1 : return 1;
    })


}


meeting ("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")