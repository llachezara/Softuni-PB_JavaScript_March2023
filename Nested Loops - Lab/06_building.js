function building(input) {
    let totalFloors = Number(input[0]);
    let apartmentsPerFloor = Number(input[1]);

    for (let floor = totalFloors; floor >= 1; floor--) {
        let letter = "";
        if (floor % 2 == 0) {
            letter = "O"
        } else {
            letter = "A";
        }

        if (floor == totalFloors) {
            letter = "L"
        }

        let numberOfApartment = "";
        for (let digit = 0; digit < apartmentsPerFloor; digit++) {
            numberOfApartment += letter + floor.toString() + digit.toString() + " ";
        }
        console.log(numberOfApartment);
    }

}
building(["4", "4"]);