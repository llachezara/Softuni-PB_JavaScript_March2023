function sumSeconds(input){
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totalMin= Math.floor((firstTime+secondTime+thirdTime)/60);
    let seconds =(firstTime+secondTime+thirdTime)%60;

    if(seconds<10){
        console.log(`${totalMin}:0${seconds}`);

    }else
    console.log(`${totalMin}:${seconds}`);

}
sumSeconds(["22","7","34"]);