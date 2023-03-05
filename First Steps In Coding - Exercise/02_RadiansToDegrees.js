// градус = радиан * 180 / π. 
function radiansToDegres(input) {
    let degrees = Number(input[0]) * 180 / Math.PI;
    console.log(degrees);
}
radiansToDegres(["3.1416"]);