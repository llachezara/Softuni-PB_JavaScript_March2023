function balls(input) {
    let ballsCount = Number(input[0]);
    let colorOfBall = "";

    let points = 0;

    let redBallsCount = 0;
    let orangeBallsCount = 0;
    let yellowBallsCount = 0;
    let blackBallsCount = 0;
    let whiteBallsCount = 0;
    let otherColorBallsCount = 0;
    for (let i = 1; i <= ballsCount; i++) {
        colorOfBall = input[i];
        switch (colorOfBall) {
            case "red":
                redBallsCount++;
                points += 5;
                break;
            case "orange":
                orangeBallsCount++;
                points += 10;
                break;
            case "yellow":
                yellowBallsCount++;
                points += 15;
                break;
            case "white":
                whiteBallsCount++;
                points += 20;
                break;
            case "black":
                blackBallsCount++;
                points = Math.floor(points / 2);
                break;
            default:
                otherColorBallsCount++;
                break;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redBallsCount}`);
    console.log(`Orange balls:${orangeBallsCount}`);
    console.log(`Yellow balls: ${yellowBallsCount}`);
    console.log(`White balls: ${whiteBallsCount}`);
    console.log(`Other colors picked: ${otherColorBallsCount}`);
    console.log(`Divides from black balls: ${blackBallsCount}`);

}
balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])