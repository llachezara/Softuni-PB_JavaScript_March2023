function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let volume = width * length * height;

    let index = 3;
    let command = input[index];
    let takenSpace = Number(command);

    let noSpaceLeft = false;
    while (command != "Done") {
        takenSpace = Number(command);
        if (volume - takenSpace <= 0) {
            noSpaceLeft = true;
            break;
        }

        volume -= takenSpace;
        index++;
        command = input[index];
    }
    if (noSpaceLeft) {
        let neededSpace = Math.abs(volume - takenSpace);
        console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);
    } else {
        console.log(`${volume} Cubic meters left.`);
    }
}
moving(["10",

    "1",

    "2",

    "4",

    "6",

    "Done"])