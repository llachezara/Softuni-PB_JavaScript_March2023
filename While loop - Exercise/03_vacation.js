function vacation(input) {
    const moneyNeeded = Number(input[0]);
    let budget = Number(input[1]);

    let consecutiveSpendDays = 0;
    let totalDaysPassed = 0;

    let index = 2;
    while (budget < moneyNeeded) {
        action = input[index++];
        money = Number(input[index++]);

        totalDaysPassed++;
        if (action == 'spend') {
            consecutiveSpendDays++;

            if (consecutiveSpendDays == 5) {
                break;
            }

            if (budget < money) {
                budget = 0;
            } else {
                budget -= money;
            }

        } else if (action == 'save') {
            consecutiveSpendDays = 0;
            budget += money;
        }

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
