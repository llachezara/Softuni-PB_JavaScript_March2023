/*
•	Брой пакети химикали - цяло число в интервала [0...100]*5.80
•	Брой пакети маркери - цяло число в интервала [0...100]*7.20
•	Литри препарат за почистване на дъска - цяло число в интервала [0…50]*1.20
•	Процент намаление - цяло число в интервала [0...100]

*/

function suppliesPrice(input) {
    let discount = Number(input[3]) / 100;
    let price = Number(input[0]) * 5.80 + Number(input[1]) * 7.20 + Number(input[2]) * 1.20;
    let totalPrice = price - (price * discount);
    console.log(totalPrice);
}
suppliesPrice(["2", "3", "4", "25"]);