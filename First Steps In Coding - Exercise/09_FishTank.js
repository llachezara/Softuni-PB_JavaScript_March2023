function waterInLiters(input) {
    let lengthInCM = Number(input[0]);
    let widthInCM = Number(input[1]);
    let heightInCM = Number(input[2]);
    let percentFilled = Number(input[3]) / 100;
    let volumeOfTankInLeters = (lengthInCM * widthInCM * heightInCM) / 1000;
    let waterInLeters = volumeOfTankInLeters - percentFilled * volumeOfTankInLeters;
    console.log(waterInLeters);
}
waterInLiters(["85", "75", "47", "17"])

