function traveling(input) {
    let data = input[0];

    let destination = "";
    let totalSum = 0;
    let money = 0;
    let neededMoney = 0;
    
    let index = 0;
    while (data != "End") {
        destination = data;
        index++;

        neededMoney = Number(input[index]);

        index++;
        data = input[index];
        while (Number(data) != NaN) {
            money = Number(data);
            totalSum += money;

            if (totalSum >= neededMoney) {
                totalSum = 0;
                money = 0;
                break;
            }
            index++;
            data = input[index];
        }

        console.log("Going to " + destination + "!");
        index++;
        data = input[index];
    }
}
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);