function cakes(recipe, available) {
    //check how many portions is possible to cook
    let possiblePortions = [];
    for (let necessaryIngredient in recipe) {
        let ingredientCounter = 0;
        for (let availableIngredient in available) {
            if (necessaryIngredient === availableIngredient) {
                 possiblePortions.push(Math.floor(available[availableIngredient]/recipe[necessaryIngredient]));

            }
            else {
                //add a counter for not matching a necessary ingredient
                ingredientCounter++;
            }
            //check is necessary ingredient doesn't match any of available through the counter
            if (ingredientCounter === Object.keys(available).length) {
                return 0;
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


  cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
