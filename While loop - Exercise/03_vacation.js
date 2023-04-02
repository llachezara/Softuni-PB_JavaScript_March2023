function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;

    let budget = Number(input[index]);
    index++;
    let action = input[index];
    index++;

    let consecutiveSpendDays = 0;
    let totalDaysPassed = 0;

    let money = Number(input[index]);
    while (budget < moneyNeeded) {
        money = Number(input[index]);
        index++;

        totalDaysPassed++;
        if (action == 'spend') {
            consecutiveSpendDays++;

            if (consecutiveSpendDays == 5) {
                break;
            }

            if (budget - money < 0) {
                budget = 0;
            } else {
                budget -= money;
            }

        } else if (action == 'save') {
            consecutiveSpendDays = 0;
            budget += money;
        }



        action = input[index];
        index++;
    }

    if (budget >= moneyNeeded) {
        console.log(`You saved the money for ${totalDaysPassed} days.`);
    } else {
        console.log(`You can't save the money.`);
        console.log(totalDaysPassed);
    }
}
vacation(["2000",

    "1000",

    "spend",

    "1200",

    "save",

    "2000"]);