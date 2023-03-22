//7
function officeSchedule(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if (hour <= 18 && hour >= 10) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;
            default:
                console.log("closed");
                break;
        }
    } else {
        console.log("closed");
    }
}
officeSchedule(["11",

"Monday"]);