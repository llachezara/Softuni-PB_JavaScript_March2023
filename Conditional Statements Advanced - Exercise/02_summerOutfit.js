function outfitGenerator(input) {
    let degrees = Number(input[0]);
    let timeOfTheDay = input[1];
    let Outfit, Shoes;

    if (10 <= degrees && degrees <= 18) {
        switch (timeOfTheDay) {
            case "Morning":
                Outfit = "Sweatshirt";
                Shoes = "Sneakers";
                break;
            case "Afternoon":
            case "Evening":
                Outfit = "Shirt";
                Shoes = "Moccasins";
                break;
        }
    } else if (18 < degrees && degrees <= 24) {
        switch (timeOfTheDay) {
            case "Morning":
            case "Evening":
                Outfit = "Shirt";
                Shoes = "Moccasins";
                break;
            case "Afternoon":
                Outfit = "T-Shirt";
                Shoes = "Sandals";
                break;
        }
    } else if (degrees >= 25) {
        switch (timeOfTheDay) {
            case "Morning":
                Outfit = "T-Shirt";
                Shoes = "Sandals";
                break;
            case "Afternoon":
                Outfit = "Swim Suit";
                Shoes = "Barefoot";
                break;
            case "Evening":
                Outfit = "Shirt";
                Shoes = "Moccasins";
                break;
        }
    }
    console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`);
}
outfitGenerator(["22",

    "Afternoon"]);