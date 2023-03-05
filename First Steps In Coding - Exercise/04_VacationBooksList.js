function pagesPerDay(arr) {
    let pagesPerDay = (Number([arr[0]]) / Number([arr[1]])) / Number([arr[2]]);
    console.log(pagesPerDay);
}
pagesPerDay(["212", "20", "2"]);