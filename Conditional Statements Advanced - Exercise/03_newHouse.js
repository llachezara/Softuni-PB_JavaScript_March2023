function flowers(input) {
    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);

    let flowerPrice = 0;
    let totalPrice = 0, discount = 0;
    switch (type) {
        case "Roses":
            totalPrice = count * 5;
            if (count > 80) {
                totalPrice *= 0.9;
            }
            break;
        case "Dahlias":
            totalPrice = count * 3.80;
            if (count > 90) {
                totalPrice *= 0.85;
            }
            break;
        case "Tulips":
            totalPrice = count * 2.80;
            if (count > 80) {
                totalPrice *= 0.85;
            }
            break;
        case "Narcissus":
            totalPrice = count * 3;
            if (count < 120) {
                totalPrice *= 1.15;
            }
            break;
        case "Gladiolus":
            totalPrice = count * 2.5;
            if (count < 80) {
                totalPrice *= 1.2;
            }
            break;

    }

    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${count} ${type} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyLeft = totalPrice - budget;
        console.log(`Not enough money, you need ${moneyLeft.toFixed(2)} leva more.`);
    }
}
flowers(["Narcissus", "119", "360"])