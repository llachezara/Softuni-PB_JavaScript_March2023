function cleverLily(input) {
    let years = Number(input[0]);
    let priceForWashingMachine = Number(input[1]);
    let priceForToy = Number(input[2]);

    let toyCount = 0, evenYears = 0, money = 0;
    let sum = 0;
    for (let i = 1; i <= years; i++) {
        if (i % 2 != 0) {
            toyCount++;
        } else {
            evenYears++;
            sum += evenYears * 10;
        }
    }

    let moneyFromToys = toyCount * priceForToy;
    sum += moneyFromToys - evenYears;

    if (sum >= priceForWashingMachine) {
        console.log(`Yes! ${(sum - priceForWashingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceForWashingMachine - sum).toFixed(2)}`);
    }
}
cleverLily(["10",

    "170.00",

    "6"]);