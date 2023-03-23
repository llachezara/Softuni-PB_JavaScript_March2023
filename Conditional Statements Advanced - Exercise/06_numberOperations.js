//6
function operation(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let mathOperation = input[2];

    let result = 0;
    let evenOrOdd = "";
    switch (mathOperation) {
        case "+":
            result = num1 + num2;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} ${mathOperation} ${num2} = ${result} - ${evenOrOdd}`);
            break;
        case "-":
            result = num1 - num2;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} ${mathOperation} ${num2} = ${result} - ${evenOrOdd}`);
            break;
        case "/":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            }
            else {
                result = num1 / num2;
                console.log(`${num1} ${mathOperation} ${num2} = ${result.toFixed(2)}`);
            }

            break;
        case "%":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            }
            else {
                result = num1 % num2;
                console.log(`${num1} ${mathOperation} ${num2} = ${result}`);
            }
            break;
        case "*":
            result = num1 * num2;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} ${mathOperation} ${num2} = ${result} - ${evenOrOdd}`);
            break;
    }
}
operation(["123", "12", "/"]);