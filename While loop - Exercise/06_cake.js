function cake(input) {
    let lengthOfCake = Number(input[0]);
    let widthOfCake = Number(input[1]);

    let totalPiecesOfCake = lengthOfCake * widthOfCake;

    let index = 2;
    let command = input[index];
    let noPiecesLeft = false;
    let pieces = Number(command);
    while (command != "STOP") {
        pieces = Number(command);

        if (totalPiecesOfCake - pieces <= 0) {
            noPiecesLeft = true;
            break;
        }
        totalPiecesOfCake -= pieces;

        index++;
        command = input[index];
    }
    if (noPiecesLeft == false) {
        console.log(`${totalPiecesOfCake} pieces are left.`);
    } else {
        let piecesLeft = Math.abs(totalPiecesOfCake - pieces);
        console.log(`No more cake left! You need ${piecesLeft} pieces more.`);
    }
}

cake(["10",

    "2",

    "2",

    "4",

    "6",

    "STOP"]);