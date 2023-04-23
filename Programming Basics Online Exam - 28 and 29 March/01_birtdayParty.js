function party(input) {
    let rent = Number(input[0]);
    let cakePrice = operation(0.2, rent);
    let drinksPrice = operation(0.55, cakePrice);
    let animatorPrice = Math.round(operation(0.333333, rent));

    function operation(number, numToMultipluWith) {
        var factor = numToMultipluWith;
        var num = number;
        var b = num.toString().split('.');

        let divider = (Math.pow(10, b[1].length));
        var answer = b[0] * factor + b[1] * (factor / divider);
        return answer;
    }

    let sum = (rent + cakePrice + drinksPrice + animatorPrice);
    console.log(sum);

}
party(['3720'])