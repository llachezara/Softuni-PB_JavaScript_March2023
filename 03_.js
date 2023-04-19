function dogrami(input) {
    let count = Number(input[0]);
    let size = input[1];
    let deliveryOrNot = input[2];
    const deliveryPrice = 60;

    if (count < 10) {
        console.log("Invalid order");
    } else {

        let pricePerOne = 0;
        let totalPrice = 0;
        switch (size) {
            case "90X130":
                pricePerOne = 110;
                totalPrice = count * pricePerOne;
                if (count > 30 && count <= 60) {
                    totalPrice *= 0.95;
                } else if (count > 60) {
                    totalPrice *= 0.92;
                }
                break;
            case "100X150":
                pricePerOne = 140;
                totalPrice = count * pricePerOne;
                if (count > 40 && count <= 80) {
                    totalPrice *= 0.94;
                } else if (count > 80) {
                    totalPrice *= 0.90;
                }
                break;
            case "130X180":
                pricePerOne = 190;
                totalPrice = count * pricePerOne;
                if (count > 20 && count <= 50) {
                    totalPrice *= 0.93;
                } else if (count > 50) {
                    totalPrice *= 0.88;
                }
                break;
            case "200X300":
                pricePerOne = 250;
                totalPrice = count * pricePerOne;
                if (count > 25 && count <= 50) {
                    totalPrice *= 0.91;
                } else if (count > 50) {
                    totalPrice *= 0.86;
                }
                break;
        }

        if (deliveryOrNot === "With delivery") {
            totalPrice += deliveryPrice;
        } else {

        }

        if (count > 99) {
            totalPrice *= 0.96;
        }

        console.log(`${totalPrice.toFixed(2)} BGN`)
    }

}
dogrami(["105",
"100X150",
"With delivery"])
