function pay(input) {
    let pricePerLuggageMoreThan20 = Number(input[0]);
    let luggageInKG = Number(input[1]);
    let daysTraveling = Number(input[2]);
    let luggageCount = Number(input[3]);

    let luggagePrice = 0;
    if (luggageInKG < 10) {
        luggagePrice = 0.2 * pricePerLuggageMoreThan20;
    } else if (luggageInKG >= 10 && luggageInKG <= 20) {
        luggagePrice = 0.5 * pricePerLuggageMoreThan20;
    }
    else {
        luggagePrice = pricePerLuggageMoreThan20;
    }

    if (daysTraveling > 30) {
        luggagePrice += 0.1 * luggagePrice;
    } else if (daysTraveling >= 7 && daysTraveling <= 30) {
        luggagePrice += 0.15 * luggagePrice;
    } else {
        luggagePrice += 0.4 * luggagePrice;
    }

    console.log(`The total price of bags is: ${(luggageCount*luggagePrice).toFixed(2)} lv.`)
}
pay(["30",
    "18",
    "15",
    "2"])
