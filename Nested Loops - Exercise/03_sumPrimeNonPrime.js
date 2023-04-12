function sumPrimeNonPrime(input) {
    let command = input[0];
    let index = 0;

    let sumOfPrimeNumbers = 0;
    let sumOfNonPrimeNumbers = 0;
    let number = 0;
    while (command != "stop") {
        number = Number(command);
        index++;
        command = input[index];

        if (number < 0) {
            console.log("Number is negative.")
            continue;
        }

        let isPrime = true;
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime === false) {
            sumOfNonPrimeNumbers += number;
        } else {
            sumOfPrimeNumbers += number;
        }
    }
    console.log(`Sum of all prime numbers is: ${sumOfPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrimeNumbers}`)
}
sumPrimeNonPrime(["30",

"83",

"33",

"-1",

"20",

"stop"]);