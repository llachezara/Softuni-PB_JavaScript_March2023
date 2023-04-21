function catSroll(input) {
    let minPerDay = Number(input[0]);
    let strollCounts = Number(input[1]);
    let caloriesEaten = Number(input[2]);

    let totalStrollMinPerDay = strollCounts * minPerDay;
    let totalBurnedCaloriesPerDay = totalStrollMinPerDay * 5;
    const eatenCaloriesNorm = 0.5 * caloriesEaten;

    if ( totalBurnedCaloriesPerDay>=eatenCaloriesNorm) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCaloriesPerDay}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCaloriesPerDay}.`);
    }

}
catSroll(["15", "2", "500"])