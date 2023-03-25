function evenPowerOf2(input) {
    let n = Number(input[0])
    for (i = 0; i <= n; i+=2) {
        let number = Math.pow(2,i);
        console.log(number);

    }
}
evenPowerOf2(["15"]);