function greeningPrice(input) {
    let priceForGreening = Number(input[0]) * 7.61;
    let discount = 0.18 * priceForGreening;
    let finalPrice = priceForGreening - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
greeningPrice(["150"]);