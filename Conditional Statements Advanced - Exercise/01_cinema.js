function ticketIncome(input) {
    let ticket = 0;
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    switch (type) {
        case "Premiere":
            ticket = 12.00;
            break;
        case "Discount":
            ticket = 5.00;
            break;
        default:
            ticket = 7.50;
            break;
    }
    let income = rows * columns * ticket;
    console.log(`${income.toFixed(2)} leva`);

}
ticketIncome(["Premiere",

    "10",

    "12"]);