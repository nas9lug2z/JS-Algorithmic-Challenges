function romanNumeralEncoder(num) {
    let arr = Array.from(String(num), Number);
    let result = "";
    switch(true) {
        case arr.length >= 4:
            for (let i = 0; i < (arr.length - 3); i++) {
                result += "M";
            }
    }
    console.log(result);
}

romanNumeralEncoder(1395);