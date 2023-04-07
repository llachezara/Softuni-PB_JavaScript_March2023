function readText(input) {
    let command = input[0];
    let index = 0;
    while (command != 'Stop') {

        console.log(command);
        index++;
        command = input[index];
    }

}
readText(["Nakov",

    "SoftUni",

    "Sofia",

    "Bulgaria",

    "SomeText",

    "Stop",

    "AfterStop",

    "Europe",

    "HelloWorld"])