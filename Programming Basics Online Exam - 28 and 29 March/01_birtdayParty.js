function party(input) {
let rent = Number(input);
let cakePrice = 0.2 * rent;
let drinksPrice = 0.55 * cakePrice;
let animatorPrice = rent / 3;
let sum = rent + cakePrice + drinksPrice + animatorPrice;
console.log(sum);
}
party(2250);
