// 1. Рекордът в секунди – реално число в интервала [0.00 … 100000.00]

// 2. Разстоянието в метри – реално число в интервала [0.00 … 100000.00]

// 3. Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]
function worldRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let delay = Math.floor(distance / 15) * 12.5;
    let time = distance * timePerMeter;
    let totalTime = delay + time;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let timeBehindRecord = totalTime - record;
        console.log(`No, he failed! He was ${timeBehindRecord.toFixed(2)} seconds slower.`);
    }
}
worldRecord(["55555.67", "3017", "5.03"]);