function foodForPets(input) {
    let numberOfDays = Number(input[0]);
    let totalFoodForAllDays = Number(input[1]);

    let totalFoodEaten = 0;
    let totalFoodEatenByDog = 0;
    let totalFoodEatenByCat = 0;
    let treats = 0;
    let day = 0;

    let dailyFoodEatenByDog = 0;
    let dailyFoodEatenByCat = 0;
    for (let index = 2; index < 2+numberOfDays*2; index++) {

        if (index % 2 == 0) {
            dailyFoodEatenByDog = Number(input[index]);

            totalFoodEatenByDog += dailyFoodEatenByDog;

            totalFoodEaten += dailyFoodEatenByDog;
        } else {
            dailyFoodEatenByCat = Number(input[index]);

            totalFoodEatenByCat += dailyFoodEatenByCat;
            totalFoodEaten += dailyFoodEatenByCat;

            day++;

            if (day % 3 == 0 && day !== 0) {
                treats += 0.1 * (dailyFoodEatenByCat + dailyFoodEatenByDog);
            }
        }
    }

    let totalfoodEatenPercent = (totalFoodEaten * 100) / totalFoodForAllDays;
    let totalFoodPercentEatenByDog = (totalFoodEatenByDog * 100) / totalFoodEaten;
    let totalFoodPercentEatenByCat = (totalFoodEatenByCat * 100) / totalFoodEaten;

    console.log(`Total eaten biscuits: ${Math.round(treats)}gr.`);
    console.log(`${totalfoodEatenPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${totalFoodPercentEatenByDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${totalFoodPercentEatenByCat.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["4", "1000", "100", "30", "110", "25", "120", "35","100","20"]);