function fruitShop(input) {
    let fruit = input[0];
    let dayOfWeek = input[1];
    let count = Number(input[2]);

    let fruitPrice = 1;
    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit == "banana") {
                fruitPrice = 2.50;
            } else if (fruit == "apple") {
                fruitPrice = 1.20;
            } else if (fruit == "orange") {
                fruitPrice = 0.85;
            } else if (fruit == "grapefruit") {
                fruitPrice = 1.45;
            } else if (fruit == "kiwi") {
                fruitPrice = 2.70;
            } else if (fruit == "pineapple") {
                fruitPrice = 5.50;
            } else if (fruit == "grapes") {
                fruitPrice = 3.85;
            } else {
                fruitPrice = 0;
            }
            if (fruitPrice === 0) {
                console.log("error")
            } else {
                console.log((fruitPrice * count).toFixed(2))
            }
            break;
        case "Saturday":
        case "Sunday":
            if (fruit == "banana") {
                fruitPrice = 2.70;
            } else if (fruit == "apple") {
                fruitPrice = 1.25;
            } else if (fruit == "orange") {
                fruitPrice = 0.90;
            } else if (fruit == "grapefruit") {
                fruitPrice = 1.60;
            } else if (fruit == "kiwi") {
                fruitPrice = 3.00;
            } else if (fruit == "pineapple") {
                fruitPrice = 5.60;
            } else if (fruit == "grapes") {
                fruitPrice = 4.20;
            } else {
                fruitPrice = 0;
            }
            if (fruitPrice === 0) {
                console.log("error")
            } else {
                console.log((fruitPrice * count).toFixed(2))
            }
            break;
        default:
            console.log("error");
            break;
    }
}
fruitShop(["pineapple","Sunday","1.65"]);