//9
function skiTrip(input) {
    let stayDays = Number(input[0]);
    let accomodation = input[1];
    let rating = input[2];

    let pricePerNight = 0;
    if (accomodation == 'room for one person') {
        pricePerNight = 18;
    } else if (accomodation == 'apartment') {
        pricePerNight = 25;
    } else if (accomodation == 'president apartment') {
        pricePerNight = 35;
    }

    let totalPrice = (stayDays - 1) * pricePerNight;

    switch (accomodation) {
        case 'room for one person':
            //No discount
            break;
        case 'apartment':
            if (stayDays < 10) {
                totalPrice *= 0.7; //30% discount 
            } else if (stayDays >= 10 && stayDays <= 15) {
                totalPrice *= 0.65; //35% discount
            } else if (stayDays > 15) {
                totalPrice *= 0.5; //50% discount
            }
            break;
        case 'president apartment':
            if (stayDays < 10) {
                totalPrice *= 0.9; //10% discount
            } else if (stayDays >= 10 && stayDays <= 15) {
                totalPrice *= 0.85; //15% discount
            } else if (stayDays > 15) {
                totalPrice *= 0.8; //20% discount
            }
            break;
    }


    rating == 'positive' ? totalPrice *= 1.25 : totalPrice *= 0.9; //if true totalPrice+25%, else 10% discount

    console.log(totalPrice.toFixed(2));

}
skiTrip(["30", "president apartment", "negative"]);