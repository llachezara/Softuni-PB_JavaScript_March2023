//8
function onTime(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let totalArrivalMin = arrivalHour * 60 + arrivalMin;
    let totalExamMin = examHour * 60 + examMin;

    if (totalArrivalMin <= totalExamMin) {
        if (totalArrivalMin === totalExamMin || totalArrivalMin >= totalExamMin - 30) {
            console.log("On time");
            if (totalArrivalMin >= totalExamMin - 30) {
                console.log(`${totalExamMin - totalArrivalMin} minutes before the start`);
            }
        } else if (totalArrivalMin < totalExamMin - 30 && totalArrivalMin > totalExamMin - 60) {
            console.log("Early");
            console.log(`${totalExamMin - totalArrivalMin} minutes before the start`);

        } else if (totalArrivalMin <= totalExamMin - 60) {
            let totalTime = totalExamMin - totalArrivalMin;
            let hours = Math.floor(totalTime / 60);
            let min = totalTime % 60;

            console.log("Early");
            if (min >= 10) {
                console.log(`${hours}:${min} hours before the start`);
            } else {
                console.log(`${hours}:0${min} hours before the start`);
            }

        }
    } else {
        console.log("Late");
        if (totalArrivalMin < totalExamMin + 60) {
            console.log(`${totalArrivalMin - totalExamMin} minutes after the start`);

        } else if (totalArrivalMin >= totalExamMin + 60) {
            let totalTime = totalArrivalMin - totalExamMin;
            let hours = Math.floor(totalTime / 60);
            let min = totalTime % 60;

            if (min >= 10) {
                console.log(`${hours}:${min} hours after the start`);
            } else {
                console.log(`${hours}:0${min} hours after the start`);
            }


        }
    }
}
onTime(["11", "30", "11", "12"]);