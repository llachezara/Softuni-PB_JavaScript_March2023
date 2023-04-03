function steps(input) {
    let stepsGoal = 10000;
    let index = 0;
    let command = input[0];
    index++;

    let stepsFromGoingOut = 0;
    let stepsFromGoingHome = Number(command);
    let goalReached = false;

    let totalSteps = 0;
    while (command !== 'Going home') {
        stepsFromGoingHome = Number(command);

        if (totalSteps >= stepsGoal) {
            goalReached = true;
            break;
        } else {
            totalSteps += stepsFromGoingHome;
        }

        command = input[index];
        index++;
    }

    let stepsInDifference = 0;
    if (command == 'Going home') {
        stepsFromGoingOut = Number(input[index]);
        totalSteps += stepsFromGoingOut;

        if (totalSteps < stepsGoal) {
            stepsInDifference = stepsGoal - totalSteps;
            console.log(`${stepsInDifference} more steps to reach goal.`);
        } else {
            goalReached = true;
        }
    }

    if (goalReached == true) {
        stepsInDifference = totalSteps - stepsGoal;
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsInDifference} steps over the goal!`);
    }
}
steps(["1000",
    "1500",
    "2000",
    "6500"]);

/*

*/ 