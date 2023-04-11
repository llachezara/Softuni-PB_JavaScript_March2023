function sumOf2Numbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationsCounter = 0;
    let magicNumIsFound = false;
    let num1 = 0;
    let num2 = 0;
    for (num1 = startNumber; num1 <= endNumber; num1++) {
        for (num2 = startNumber; num2 <= endNumber; num2++) {
            combinationsCounter++;
            if (num1 + num2 === magicNumber) {
                magicNumIsFound = true;
                break;
            }
        }
        if (magicNumIsFound) {
            break;
        }
    }

    if (magicNumIsFound) {
        console.log(`Combination N:${combinationsCounter} (${num1} + ${num2} = ${magicNumber})`)
    }
    else {
        console.log(`${combinationsCounter} combinations - neither equals ${magicNumber}`);
    }
}
sumOf2Numbers(["88", "888", "1000"]);