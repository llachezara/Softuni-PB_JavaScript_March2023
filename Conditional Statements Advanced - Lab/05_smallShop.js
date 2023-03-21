function totalPrice(input) {
    let product = input[0];
    let city = input[1];
    let quality = Number(input[2]);

    let priceForProduct = 0;
    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee":
                    priceForProduct = 0.50;
                    break;
                case "water":
                    priceForProduct = 0.80;
                    break;
                case "beer":
                    priceForProduct = 1.20;
                    break;
                case "sweets":
                    priceForProduct = 1.45;
                    break;
                case "peanuts":
                    priceForProduct = 1.60;
                    break;

            }
            break;
        case "Plovdiv":
            switch (product) {
                case "coffee":
                    priceForProduct = 0.40;
                    break;
                case "water":
                    priceForProduct = 0.70;
                    break;
                case "beer":
                    priceForProduct = 1.15;
                    break;
                case "sweets":
                    priceForProduct = 1.30;
                    break;
                case "peanuts":
                    priceForProduct = 1.50;
                    break;
            }
            break;
        case "Varna":
            switch (product) {
                case "coffee":
                    priceForProduct = 0.45;
                    break;
                case "water":
                    priceForProduct = 0.70;
                    break;
                case "beer":
                    priceForProduct = 1.10;
                    break;
                case "sweets":
                    priceForProduct = 1.35;
                    break;
                case "peanuts":
                    priceForProduct = 1.55;
                    break;


            }
            break;

    }

    let finalPrice = priceForProduct * quality;
    console.log(finalPrice);


}
totalPrice(["sweets", "Sofia", "2.23"]);