//7
function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studioPricePerNight = 0;
    let apartmentPricePerNight = 0;

    let totalStudioPrice = 0;
    let totalApartmentPrice = 0;

    if (nights > 14) {
        totalApartmentPrice = 0.90;
    }

    if (month == 'May' || month == 'October') {
        studioPricePerNight = 50;
        apartmentPricePerNight = 65;

        if (nights > 7 && nights <= 14) {
            totalStudioPrice = 0.95;
        } else if (nights > 14) {
            totalStudioPrice = 0.70;
        }

    } else if (month == 'June' || month == 'September') {
        studioPricePerNight = 75.20;
        apartmentPricePerNight = 68.70;

        if (nights > 14) {
            totalStudioPrice = 0.80;
        }

    } else if (month == 'July' || month == 'August') {
        studioPricePerNight = 76;
        apartmentPricePerNight = 77;
    }

    if (totalApartmentPrice == 0) {
        totalApartmentPrice = nights * apartmentPricePerNight;
    } else {
        totalApartmentPrice *= nights * apartmentPricePerNight;
    }

    if (totalStudioPrice == 0) {
        totalStudioPrice = nights * studioPricePerNight;
    } else {
        totalStudioPrice *= nights * studioPricePerNight;
    }

    console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);

}
hotelRoom(["August", "20"]);