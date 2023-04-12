function equalSumsNumbers(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let sumOfOddPositions = 0;
    let sumOfEvenPositions = 0;
    let output = "";
    for (let num = startNum; num <= endNum; num++) {
        num = String(num);
        for (let i = 0; i < num.length; i++) {
            if ((i + 1) % 2 == 0) {
                sumOfEvenPositions += Number(num[i]);
            } else {
                sumOfOddPositions += Number(num[i]);
            }
        }

        if (sumOfEvenPositions === sumOfOddPositions) {
            output += num + " ";
        }

        sumOfEvenPositions = 0;
        sumOfOddPositions = 0;
        num = Number(num);
    }
    console.log(output);
}
equalSumsNumbers(["100115", "100120"])