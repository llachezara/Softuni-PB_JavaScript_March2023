function maxNumber(input) {
    let command = input[0];
    let number = Number(command);
    
    let maxNumber = number;
    let index = 0;
    while (command != "Stop") {
        index++;
        command = input[index];
        number = Number(command);

        if (maxNumber < number) {
            maxNumber = number;
        }
        
    }
    console.log(maxNumber)
}
maxNumber(["999", "Stop"]);