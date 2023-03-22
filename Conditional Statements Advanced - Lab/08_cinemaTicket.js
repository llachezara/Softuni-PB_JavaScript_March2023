//8
function cinemaTicket(input) {
    let day = input[0];
    let ticketPrice = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            ticketPrice = 12;
            console.log(ticketPrice);
            break;
        case "Wednesday":
        case "Thursday":
            ticketPrice = 14;
            console.log(ticketPrice);
            break;
        case "Sunday":
        case "Saturday":
            ticketPrice = 16;
            console.log(ticketPrice);
            break;
    }

}
cinemaTicket(["Monday"]);