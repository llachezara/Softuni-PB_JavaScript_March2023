function agencyProfit(input) {
    let name = input[0];
    let totalAdultsTickets = Number(input[1]);
    let totalKidsTickets = Number(input[2]);

    let pricePerAdultTicket = Number(input[3]);
    let pricePerKidsTicket = 0.3 * pricePerAdultTicket;

    let priceForService = Number(input[4]);

    let totalPrice = totalAdultsTickets * (pricePerAdultTicket + priceForService) + totalKidsTickets * (pricePerKidsTicket + priceForService);

    let agencyProfit = 0.2 * totalPrice;
    console.log(`The profit of your agency from ${name} tickets is ${agencyProfit.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40"])
