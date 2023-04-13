function specialNumbers(input) {
    let number = Number(input[0]);
    let startNumber = 1111;
    let endNumber = 9999;

    let output = '';
    let isSpecial = false;
    for (let i = startNumber; i <= endNumber; i++) {
        let specialNumber = String(i);
        for (let k = 0; k < specialNumber.length; k++) {
            let digitOfSpecialNumber = specialNumber[k];
            if (number % digitOfSpecialNumber === 0) {
                isSpecial = true;
            } else {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            output += i + ' ';
        }
    }
    console.log(output);
}
specialNumbers(["16"]);