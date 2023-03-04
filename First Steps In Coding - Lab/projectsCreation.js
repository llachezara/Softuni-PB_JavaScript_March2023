function hours(input) {
    let name = input[0];
    let projects = input[1];
    let projectHours = Number(input[1]) * 3;
    console.log(`The architect ${name} will need ${projectHours} hours to complete ${projects} project/s.`);
}
hours(["Lily", "5"]);	