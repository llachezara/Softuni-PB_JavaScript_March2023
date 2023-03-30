function ranklist(input) {
    const numberOfTournaments = Number(input[0]);
    const initialPoints = Number(input[1]);
    let totalPoints = initialPoints;

    let winnedTournaments = 0;
    for (let i = 2; i <= numberOfTournaments + 1; i++) {
        const position = input[i];

        if (position == "W") {
            totalPoints += 2000;
            winnedTournaments++;
        } else if (position == "F") {
            totalPoints += 1200;
        } else if (position == "SF") {
            totalPoints += 720;
        }
    }

    const averageReceivedPoints = (totalPoints - initialPoints) / numberOfTournaments;

    winnedTournamentsPercent = (winnedTournaments / numberOfTournaments) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averageReceivedPoints)}`);
    console.log(`${winnedTournamentsPercent.toFixed(2) + '%'}`);

}
ranklist(["5", "1400", "F", "SF", "W", "W", "SF"]);