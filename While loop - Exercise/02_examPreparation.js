function examPreparation(input) {
    let index = 0;
    let totalUnsatisfactoryGrades = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let gradeSum = 0;
    let unsatisfactoryGradeCount = 0;
    let problemCount = 0;

    let currentProblem = command;
    while (command !== 'Enough') {
        currentProblem = command;
        let gradeFromCurrentProblem = Number(input[index]);


        if (gradeFromCurrentProblem <= 4) {
            unsatisfactoryGradeCount++;
            if (unsatisfactoryGradeCount == totalUnsatisfactoryGrades) {

                break;
            }

        }

        problemCount++;
        gradeSum += gradeFromCurrentProblem;

        index++;
        command = input[index];
        index++;
    }

    if (unsatisfactoryGradeCount == totalUnsatisfactoryGrades) {
        console.log(`You need a break, ${unsatisfactoryGradeCount} poor grades.`);
    } else {
        console.log(`Average score: ${(gradeSum / problemCount).toFixed(2)}`);
        console.log(`Number of problems: ${problemCount}`);
        console.log(`Last problem: ${currentProblem}`);
    }

}
examPreparation(["2",

    "Income",

    "3",

    "Game Info",

    "6",

    "Best Player",

    "4"]);