function barcodeGenerator(input) {
    let startNumber = input[0];
    let endNumber = input[1];

    let digit1OfStartNum = startNumber[0];
    let digit1OfEndNum = endNumber[0];

    let digit2OfStartNum = startNumber[1];
    let digit2OfEndNum = endNumber[1];

    let digit3OfStartNum = startNumber[2];
    let digit3OfEndNum = endNumber[2];

    let digit4OfStartNum = startNumber[3];
    let digit4OfEndNum = endNumber[3];

    let output = "";
    for (let i = digit1OfStartNum; i <= digit1OfEndNum; i++) {
        if (i % 2 !== 0) {
            for (let k = digit2OfStartNum; k <= digit2OfEndNum; k++) {
                if (k % 2 !== 0) {
                    for (let p = digit3OfStartNum; p <= digit3OfEndNum; p++) {
                        if (p % 2 !== 0) {
                            for (let j = digit4OfStartNum; j <= digit4OfEndNum; j++) {
                                if (j % 2 !== 0) {
                                    output += `${i}${k}${p}${j} `;
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    console.log(output);

}
// function barcodeGenerator(input) {
//     let startNumber = Number(input[0]);
//     let endNumber = Number(input[1]);

//     let evenNumber = false;
//     let output = "";
//     let fullyOdd = false;
//     for (let num = 3311; num <= endNumber; num++) {
//         let numString = String(num);
//         for (let i = 0; i < numString.length; i++) {
//             let digit = Number(numString[i]);
//             if (digit % 2 === 0) {
//                 evenNumber = true;
//                 fullyOdd = false;
//                 break;
//             } else {
//                 evenNumber = false;
//                 continue;
//             }
//         }

//         if (evenNumber === false) {
//             output += num + " ";
//         } else {
//             output += "";
//         }

//     }
//     console.log(output);
// }
barcodeGenerator(["2345",
    "6789"])