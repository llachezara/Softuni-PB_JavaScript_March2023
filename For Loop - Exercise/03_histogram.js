function histogram(input) {
    let totalNumbers = Number(input[0]);
    let numsSmallerThan200 = 0;
    let numsto399 = 0;
    let numsto599 = 0;
    let numsto799 = 0;
    let numsBiggerThan800 = 0;

    for (let i = 1; i <= totalNumbers; i++) {
        let num = Number(input[i]);

        if (num < 200) {
            numsSmallerThan200++;
        } else if (num <= 399) {
            numsto399++;
        } else if (num <= 599) {
            numsto599++;
        } else if (num <= 799) {
            numsto799++;
        } else if (num >= 800 && num <= 1000) {
            numsBiggerThan800++;
        }
    }

    let p1 = numsSmallerThan200 / totalNumbers * 100;
    let p2 = numsto399 / totalNumbers * 100;
    let p3 = numsto599 / totalNumbers * 100;
    let p4 = numsto799 / totalNumbers * 100;
    let p5 = numsBiggerThan800 / totalNumbers * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
histogram(["7", "800", "801", "250", "199", "399", "599", "799"])