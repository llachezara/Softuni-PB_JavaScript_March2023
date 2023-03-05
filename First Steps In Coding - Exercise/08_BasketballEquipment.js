/*
•	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
•	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
•	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
•	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
*/
function equipmentPrice(input) {
    let yearTax = Number([input[0]]);
    let sneakersPrice = yearTax - 0.4 * yearTax;
    let jerseysPrice = sneakersPrice - 0.2 * sneakersPrice;
    let ballPrice = 0.25 * jerseysPrice;
    let accessoriesPrice = 0.20 * ballPrice;
    console.log(yearTax + sneakersPrice + jerseysPrice + ballPrice + accessoriesPrice);
}
equipmentPrice(["365"]);