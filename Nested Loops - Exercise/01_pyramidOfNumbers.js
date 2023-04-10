function pyramid(input) {
    let n = Number(input[0]);

    let currentNumber = 1;
    let isBigger = false;
    let printCurrentLine = "";
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (currentNumber > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += currentNumber + " ";
            currentNumber++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }

}
pyramid(["15"])