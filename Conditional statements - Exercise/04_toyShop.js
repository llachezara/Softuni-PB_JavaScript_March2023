
function toyShop(input) {
    let priceForExcursion = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let lorries = Number(input[5]);

    let toyCount = puzzles + dolls + bears + minions + lorries;
    let priceForToys = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + lorries * 2;

    let finalPrice;
    if (toyCount >= 50) {
        finalPrice = priceForToys - 0.25 * priceForToys;
    } else {
        finalPrice = priceForToys;
    }

    let rent = 0.1 * finalPrice;
    let profit = finalPrice - rent;

    let moneyLeftOrNotEnough;

    if (profit > priceForExcursion) {
        moneyLeftOrNotEnough = profit - priceForExcursion;
        console.log(`Yes! ${moneyLeftOrNotEnough.toFixed(2)} lv left.`);

    }
    else if (priceForExcursion > profit) {
        moneyLeftOrNotEnough = priceForExcursion - profit;
        console.log(`Not enough money! ${moneyLeftOrNotEnough.toFixed(2)} lv needed.`);
    }

}
toyShop(["320", "8", "2", "5", "5", "1"]);