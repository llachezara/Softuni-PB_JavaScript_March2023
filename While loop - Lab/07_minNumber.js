function maxNumber(input) {
    let command = input[0];
    let number = Number(command);

    let minNumber = number;
    let index = 0;
    while (command != "Stop") {
        index++;
        command = input[index];
        number = Number(command);

        if (minNumber > number) {
            minNumber = number;
        }

    }
    console.log(minNumber)
}
maxNumber(["100",

    "99",

    "80",

    "70",

    "Stop"]);