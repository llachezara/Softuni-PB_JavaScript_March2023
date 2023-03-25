function commission(input) {
    let town = input[0];
    let sells = Number(input[1]);

    switch (town) {
        case "Sofia":
            if (sells >= 0 && sells <= 500) {
                sells *= 0.05;
            } else if (sells > 500 && sells <= 1000) {
                sells *= 0.07;
            } else if (sells > 1000 && sells <= 10000) {
                sells *= 0.08;
            } else if (sells > 10000) {
                sells *= 0.12;
            } else {
                sells = 1;
            }

            if (sells === 1) {
                console.log("error");
            } else {
                console.log(sells.toFixed(2));
            }

            break;
        case "Varna":
            if (sells >= 0 && sells <= 500) {
                sells *= 0.045;
            } else if (sells > 500 && sells <= 1000) {
                sells *= 0.075;
            } else if (sells > 1000 && sells <= 10000) {
                sells *= 0.1;
            } else if (sells > 10000) {
                sells *= 0.13;
            } else {
                sells = 1;
            }

            if (sells === 1) {
                console.log("error");
            } else {
                console.log(sells.toFixed(2));
            }
            break;
        case "Plovdiv":
            if (sells >= 0 && sells <= 500) {
                sells *= 0.055;
            } else if (sells > 500 && sells <= 1000) {
                sells *= 0.08;
            } else if (sells > 1000 && sells <= 10000) {
                sells *= 0.12;
            } else if (sells > 10000) {
                sells *= 0.145;
            } else {
                sells = 1;
            }

            if (sells === 1) {
                console.log("error");
            } else {
                console.log(sells.toFixed(2));
            }
            break;
        default:
            console.log("error");
            break;
    }
}
commission(["Kaspichan", "100"]);