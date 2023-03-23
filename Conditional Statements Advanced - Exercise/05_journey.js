//5
function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let place = "";
    let price = budget;
    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                price = 0.3 * budget;
                place = "Camp";
                break;
            case "winter":
                place = "Hotel";
                price = 0.7 * budget;
                break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer":
                price = 0.4 * budget;
                place = "Camp";
                break;
            case "winter":
                place = "Hotel";
                price = 0.8 * budget;
                break;
        }

    } else if (budget > 1000) {
        destination = "Europe";
        place = "Hotel";
        price = 0.9 * budget;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}
journey(["300", "summer"])