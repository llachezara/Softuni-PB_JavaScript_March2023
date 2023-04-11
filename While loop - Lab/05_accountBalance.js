function accountBalance(input) {
    let data = input[0];
    let index = 0;
    let installementPayment = 0;
    let totalMoneyFromInstallements = 0;
    while (data != "NoMoreMoney") {
        installementPayment = Number(data);
        
        if (installementPayment < 0) {
            console.log("Invalid operation!")
            break;
        }

        console.log(`Increase: ${installementPayment.toFixed(2)}`);
        totalMoneyFromInstallements += installementPayment;

        index++;
        data = input[index];
    }
    console.log(`Total: ${totalMoneyFromInstallements.toFixed(2)}`)
}
accountBalance(["120", "45.55", "-150"]);