function puppyCare(input) {
    let dogFoodNeededInGrams = Number(input[0]) * 1000;
    let index = 1;
    let command = input[index];
    let totalEatenFoodInGrams = 0;
    while (command !== "Adopted") {
        let eatenFood = Number(command);
        totalEatenFoodInGrams += eatenFood;

        index++;
        command = input[index];
    }

    let foodInDifferenceInGrams = 0;
    if (totalEatenFoodInGrams <= dogFoodNeededInGrams) {
        foodInDifferenceInGrams = dogFoodNeededInGrams - totalEatenFoodInGrams;
        console.log(`Food is enough! Leftovers: ${foodInDifferenceInGrams} grams.`);
    } else {
        foodInDifferenceInGrams = totalEatenFoodInGrams - dogFoodNeededInGrams;
        console.log(`Food is not enough. You need ${foodInDifferenceInGrams} grams more.`);
    }
}
puppyCare(["4", "1000","1000","1000",  "Adopted"])