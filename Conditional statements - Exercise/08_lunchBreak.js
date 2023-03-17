function enoughTime(input) {
    let name = input[0];
    let durationOfEpisode = Number(input[1]);
    let durationOfBreak = Number(input[2]);

    let timeSpent = 0.25 * durationOfBreak + 0.125 * durationOfBreak;
    let timeLeft = durationOfBreak - timeSpent;

    let time;
    if (timeLeft >= durationOfEpisode) {
        time = timeLeft - durationOfEpisode;
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(time)} minutes free time.`);
    } else {
        time = durationOfEpisode - timeLeft;
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(time)} more minutes.`);
    }
}
enoughTime(["Teen Wolf",

    "48",

    "60"]);