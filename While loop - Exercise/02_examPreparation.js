function examPreparation(input) {
    let totalUnsatisfactoryGrades = Number(input[0]);
    let command = input[1];

    let gradeSum = 0;
    let unsatisfactoryGradeCount = 0;
    let problemCount = 0;

    let index = 2;
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
