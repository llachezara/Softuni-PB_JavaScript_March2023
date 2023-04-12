function trainTheTrainers(input) {
    let judgesCount = Number(input[0]);
    let command = input[1]
    let index = 1;

    let nameOfPresentation = '';
    let grade = 0;
    let sumOfgrades = 0;
    let totalSum = 0;
    let gradeCounter = 0;
    while (command != "Finish") {
        nameOfPresentation = command;

        for (let i = 1; i <= judgesCount; i++) {
            index++;
            command = input[index];

            grade = Number(command);
            gradeCounter++;
            sumOfgrades += grade;
        }

        let averageOfGradesFromPresentation = sumOfgrades / judgesCount;
        console.log(nameOfPresentation + ` - ${averageOfGradesFromPresentation.toFixed(2)}.`);
        totalSum += sumOfgrades;
        sumOfgrades = 0;

        index++;
        command = input[index];
    }

    let averageOfAllGrades = totalSum / gradeCounter;
    console.log(`Student's final assessment is ${averageOfAllGrades.toFixed(2)}.`);

}
trainTheTrainers(["3",

    "Arrays",

    "4.53",

    "5.23",

    "5.00",

    "Lists",

    "5.83",

    "6.00",

    "5.42",

    "Finish"]);