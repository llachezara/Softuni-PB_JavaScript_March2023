function graduation(input) {
    let nameOfStudent = input[0];

    let excluded = false;
    let index = 1;
    let yearGrade = Number(input[index]);
    let schoolYear = 1;
    let sum = 0;
    while (index <= input.length - 1) {
        sum += yearGrade;

        if (yearGrade < 4) {
            excluded = true;
            break;
        }

        schoolYear++;
        index++;
        yearGrade = Number(input[index]);
    }
    if (excluded) {
        console.log(`${nameOfStudent} has been excluded at ${schoolYear} grade`);
    } else {
        let averageGrade = sum / 12;
        console.log(`${nameOfStudent} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);