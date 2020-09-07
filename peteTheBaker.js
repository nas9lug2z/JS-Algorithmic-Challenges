function cakes(recipe, available) {
    console.log(Object.keys(available).length)

    //check how many portions is possible to cook
    let possiblePortions = [];
    for (let necessaryIngredient in recipe) {
        //check if there are any ingredients available at all
        if (Object.keys(available).length === 0) {
            return 0;
        }
        let ingredientCounter = 0;
        for (let availableIngredient in available) {
            switch(true) {
                case recipe[necessaryIngredient] === 0:
                    return 0;
                case necessaryIngredient === availableIngredient:
                    possiblePortions.push(Math.floor(available[availableIngredient]/recipe[necessaryIngredient]));
                    break;
                case necessaryIngredient !== availableIngredient:
                    //add a counter for not matching a necessary ingredient
                    ingredientCounter++;
                    //check is necessary ingredient doesn't match any of available through the counter
                    if (ingredientCounter === Object.keys(available).length) {
                    return 0;
                    break;
                }
            }
        }
}

    //check what is the maximum available possibility to cook with all ingredients
    let maxPossible = possiblePortions[0];
    for (let option of possiblePortions) {
        if (option < maxPossible) {
            maxPossible = option;
        }
    }
    return maxPossible;


}


// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {}))