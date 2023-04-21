function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let purchasesCount = Number(input[2]);

    let fruitPrice = 0;
    switch (size) {
        case 'small':
            switch (fruit) {
                case 'Watermelon':
                    fruitPrice = 56;
                    break;

                case 'Mango':
                    fruitPrice = 36.66;
                    break;
                case 'Pineapple':
                    fruitPrice = 42.10;
                    break;
                case 'Raspberry':
                    fruitPrice = 20;
                    break;
            }
            fruitPrice *= 2;
            break;

        case 'big':
            switch (fruit) {
                case 'Watermelon':
                    fruitPrice = 28.70;
                    break;

                case 'Mango':
                    fruitPrice = 19.60;
                    break;
                case 'Pineapple':
                    fruitPrice = 24.80;
                    break;
                case 'Raspberry':
                    fruitPrice = 15.20;
                    break;
            }
            fruitPrice *= 5;
            break;
    }

    let totalPrice = purchasesCount * fruitPrice;
    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice *= 0.85;
    } else if (totalPrice > 1000) {
        totalPrice *= 0.5;
    } else {
        //No disccount
    }

    console.log(totalPrice.toFixed(2) + " lv.");
}
energyBooster(["Rasberry", "small", "50"]);