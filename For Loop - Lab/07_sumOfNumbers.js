function sumOfNumbers(input){
    let number = input[0];
    let sumOfDigits=0;

    for (let i = 0; i < number.length; i++) {
        let digit = Number(number[i]);
        sumOfDigits+=digit;
    }
    console.log(`The sum of the digits is:${sumOfDigits}`);
}
sumOfNumbers(["564891"]);