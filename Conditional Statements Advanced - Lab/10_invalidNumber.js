//10
function validNumber(input) {
    let number = Number(input[0]);

    if (number <= 200 && number >= 100 || number == 0) {

    } else {
        console.log("invalid");
    }

}
validNumber(["75"]);