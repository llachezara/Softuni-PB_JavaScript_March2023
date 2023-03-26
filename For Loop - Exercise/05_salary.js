function salary(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    let fine = 0;
    for (let i = 2; i <= input.length - 1; i++) {
        let website = input[i];

        if (website === "Facebook") {
            fine = 150;
        } else if (website === "Instagram") {
            fine = 100;
        } else if (website === "Reddit") {
            fine = 50;
        } else {
            fine = 0;
        }

        salary -= fine;
    }
    if (salary <= 0) {
        console.log(`You have lost your salary.`)
    } else {
        console.log(salary);
    }

}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);