function sequence(input) {
    let num = Number(input[0]);

    let num2 = 1;
    while (num2 <= num) {

        console.log(num2);
        num2 = num2 * 2 + 1;

    }

}
sequence(["31"]);