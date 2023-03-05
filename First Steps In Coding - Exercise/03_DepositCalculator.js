// сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let sum = depositSum + Number(input[1]) * ((depositSum * Number(input[2]) / 100) / 12);
    console.log(sum);
}
depositCalculator(["200", "3", "5.7"]);