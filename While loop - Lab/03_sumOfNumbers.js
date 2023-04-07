function sum(input) {
    let givenSum = Number(input[0]);
    let index = 1;

    let num = Number(input[index]);
    let sum = num;
    while (sum < givenSum) {
        index++;
        num = Number(input[index]);
        sum+=num;
    }
    console.log(sum);
}
sum(["20", "1", "2", "3", "4", "5", "6"]);