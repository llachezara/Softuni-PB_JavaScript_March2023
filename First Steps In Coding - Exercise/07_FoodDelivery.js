/*
•	Пилешко меню –  10.35 лв. 
•	Меню с риба – 12.40 лв. 
•	Вегетарианско меню  – 8.15 лв. 
*/

function foodDeliveryPrice(input) {
    let totalFoodPrice = Number(input[0]) * 10.35 + Number(input[1]) * 12.40 + Number(input[2]) * 8.15;
    let dessertPrice = 0.2 * totalFoodPrice;
    let priceToBePayed = totalFoodPrice + dessertPrice + 2.5;
    console.log(priceToBePayed);
}
foodDeliveryPrice(["2", "4", "3"]);