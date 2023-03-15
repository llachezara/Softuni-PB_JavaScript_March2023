function budgetForMovie(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let priceForClothes = Number(input[2]);
    let decor = 0.1 * budget;

    if (extras > 150) {
        priceForClothes = 0.9 * priceForClothes;
    }

    let sumLeft = budget - extras * priceForClothes - decor;
    if (sumLeft > 0) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${sumLeft.toFixed(2)} leva left.`)
    } else if (sumLeft < 0) {
        console.log("Not enough money!");
       console.log(`Wingard needs ${Math.abs(sumLeft).toFixed(2)} leva more.`);
    }

}
budgetForMovie(["9587.88",

"222",

"55.68"])
