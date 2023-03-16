
function toyShop(input) {
    let priceForExcursion = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let lorries = Number(input[5]);

    let toyCount = puzzles + dolls + bears + minions + lorries;
    let moneyEarned = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + lorries * 2;


    if (toyCount >= 50) {
        moneyEarned = moneyEarned - 0.25 * moneyEarned;
    }

    let profit = 0.9 * moneyEarned;

    let moneyLeftOrNotEnough;

    if (profit >= priceForExcursion) {
        moneyLeftOrNotEnough = profit - priceForExcursion;
        console.log(`Yes! ${moneyLeftOrNotEnough.toFixed(2)} lv left.`);

    }
    else {
        moneyLeftOrNotEnough = priceForExcursion - profit;
        console.log(`Not enough money! ${moneyLeftOrNotEnough.toFixed(2)} lv needed.`);
    }

}
toyShop(["320", "8", "2", "5", "5", "1"]);
