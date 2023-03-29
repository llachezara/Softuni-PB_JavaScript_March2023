function hike(input) {
    let totalHikingGroups = Number(input[0]);
    let totalHikers = 0;

    let musalaHikers = 0;
    let monblanHikers = 0;
    let kilimanjaroHikers = 0;
    let k2Hikers = 0;
    let everestHikers = 0;

    for (let i = 1; i <= totalHikingGroups; i++) {

        const hikersInGroup = Number(input[i]);
        totalHikers += hikersInGroup;

        if (hikersInGroup <= 5) {
            musalaHikers += hikersInGroup;
        } else if (hikersInGroup >= 6 && hikersInGroup <= 12) {
            monblanHikers += hikersInGroup;
        } else if (hikersInGroup >= 13 && hikersInGroup <= 25) {
            kilimanjaroHikers += hikersInGroup;
        } else if (hikersInGroup >= 26 && hikersInGroup <= 40) {
            k2Hikers += hikersInGroup;
        } else {
            everestHikers += hikersInGroup;
        }
    }

    function convertToPercent(mountHikers, totalHikers) {
        let hikersPercentInGroup = (mountHikers / totalHikers) * 100;
        return hikersPercentInGroup.toFixed(2);
    }
    /*musalaHikers /= totalHikers / 100;
    monblanHikers /= totalHikers / 100;
    kilimanjaroHikers /= totalHikers / 100;
    k2Hikers /= totalHikers / 100;
    everestHikers /= totalHikers / 100;
*/
    console.log(convertToPercent(musalaHikers, totalHikers) + '%');
    console.log(convertToPercent(monblanHikers, totalHikers) + '%');
    console.log(convertToPercent(kilimanjaroHikers, totalHikers) + '%');
    console.log(convertToPercent(k2Hikers, totalHikers) + '%');
    console.log(convertToPercent(everestHikers, totalHikers) + '%');

}
hike(["5",

    "25",

    "41",

    "31",

    "250",

    "6"]);