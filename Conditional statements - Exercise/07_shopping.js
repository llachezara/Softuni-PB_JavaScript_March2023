function shopping(input) {
    let budget = Number(input[0]);

    let priceVideoCards = Number(input[1]) * 250;
    let priceProcessors = Number(input[2]) * 0.35 * priceVideoCards;
    let priceForRAM = Number(input[3]) * 0.1 * priceVideoCards;

    let sum = priceVideoCards + priceProcessors + priceForRAM;
    let sumToPay = sum;
    if (Number(input[1]) > Number(input[2])) {
        sumToPay -= 0.15 * sum;
    }

    
    if (sumToPay <= budget) {
        let output = budget - sumToPay;
        console.log(`You have ${output.toFixed(2)} leva left!`);
    } else {
        let output = sumToPay - budget;
        console.log(`Not enough money! You need ${output.toFixed(2)} leva more!`);
    }

}
shopping(["920.45", "3", "1", "1"]);