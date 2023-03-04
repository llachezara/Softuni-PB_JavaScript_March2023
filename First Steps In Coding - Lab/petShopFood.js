function animalsFoodPrice(input) {
    let foodDogsPrice = Number(input[0]) * 2.5;
    let foodCatsPrice = Number(input[1]) * 4.0;
    let price = foodDogsPrice + foodCatsPrice;
    console.log(`${price} lv.`);
}
animalsFoodPrice(["5", "4"]);