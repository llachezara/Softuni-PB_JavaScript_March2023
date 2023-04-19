function bestPlayer(input) {
    let command = input[0];
    let playerName = "";
    let goalsScored = 0;

    index = 0;
    let theMostScoredGoals = 0;
    let madeHatTrick = false;
    let bestPlayerName = "";
    while (command != "END") {
        command = input[index];
        playerName = command;

        command = input[++index];
        goalsScored = Number(command);

        if (theMostScoredGoals < goalsScored) {
            theMostScoredGoals = goalsScored;
            bestPlayerName = playerName;
        } else {

        }

        if (theMostScoredGoals >= 3 && theMostScoredGoals < 10) {
            madeHatTrick = true;
        } else if (theMostScoredGoals >= 10) {
            madeHatTrick = true;
            break;
        }

    }

    console.log(`${bestPlayerName} is the best player!`);
    if (madeHatTrick === false) {
        console.log(`He has scored ${theMostScoredGoals} goals.`);
    } else {
        console.log(`He has scored ${theMostScoredGoals} goals and made a hat-trick !!!`);
    }
}
bestPlayer(["Petrov",
"2",
"Drogba",
"11"])