function boatRent(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = input[2];

    let boatPrice = 0;
    switch (season) {
        case "Spring":
            boatPrice = 3000;
            if (fisherman <= 6) {
                boatPrice *= 0.9;
            } else if (fisherman >= 7 && fisherman <= 11) {
                boatPrice *= 0.85;
            } else if (fisherman >= 12) {
                boatPrice *= 0.75;
            }
            break;
        case "Summer":
        case "Autumn":
            boatPrice = 4200;
            if (fisherman <= 6) {
                boatPrice *= 0.9;
            } else if (fisherman >= 7 && fisherman <= 11) {
                boatPrice *= 0.85;
            } else if (fisherman >= 12) {
                boatPrice *= 0.75;
            }
            break;
        case "Winter":
            boatPrice = 2600;
            if (fisherman <= 6) {
                boatPrice *= 0.9;
            } else if (fisherman >= 7 && fisherman <= 11) {
                boatPrice *= 0.85;
            } else if (fisherman >= 12) {
                boatPrice *= 0.75;
            }
            break;
    }

    if (fisherman % 2 == 0) {
        if (season === "Spring" || season === "Summer" || season === "Winter") {
            boatPrice *= 0.95;
        }
    }

    let moneyLeft = 0;
    if (budget >= boatPrice) {
        moneyLeft = budget - boatPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        moneyLeft = boatPrice - budget;
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva.`);
    }

}
boatRent(["300", "Spring", "10"])