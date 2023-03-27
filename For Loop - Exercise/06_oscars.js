function oscars(input) {
    let name = input[0];
    let points = Number(input[1]);
    let pointsNeededForOscar = 1250.5;

    let evaluatorsCount = Number(input[2]);
    let evaluator = '';
    let evaluatorPoints = 0;
    for (let i = 3; i < input.length; i++) {
        if (points >= pointsNeededForOscar) {
            break;
        } else {
            if (i % 2 != 0) {
                evaluator = input[i];
                evaluatorPoints = Number(input[i + 1]);

                let plusPoints = (evaluator.length * evaluatorPoints) / 2;
                points += Number(plusPoints);
            }
        }
    }

    let pointsInDifference = 0;
    if (points >= pointsNeededForOscar) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        pointsInDifference = (pointsNeededForOscar - points).toFixed(1);
        console.log(`Sorry, ${name} you need ${pointsInDifference} more!`);
    }
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);