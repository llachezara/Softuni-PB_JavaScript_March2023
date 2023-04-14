function cinemaTickets(input) {
    let command = input[0];
    let movieName = command;

    let totalPlaces = 0;
    let placesTaken = 0;
    let totalTickets = 0;

    let studentTickets = 0;
    let kidTickets = 0;
    let standardTickets = 0;

    let movieTheaterFilledPercent = 0;
    let standardThicketPercent = 0;
    let studentThicketPercent = 0;
    let kidThicketPercent = 0;

    let index = 0;
    while (command != "Finish") {
        movieName = command;
        index++;
        command = input[index];
        totalPlaces = Number(command);

        index++;
        command = input[index];
        let filledMovieTheater = false;
        while (command != "End") {

            if (placesTaken === totalPlaces) {
                filledMovieTheater = true;
                break;
            }

            placesTaken++;
            switch (command) {
                case "standard":
                    standardTickets++;
                    break;
                case "student":
                    studentTickets++;
                    break;
                case "kid":
                    kidTickets++;
                    break;
            }

            index++;
            command = input[index];
        }

        movieTheaterFilledPercent = (placesTaken / totalPlaces) * 100;
        totalTickets += placesTaken;

        standardThicketPercent = (standardTickets / totalTickets) * 100;
        studentThicketPercent = (studentTickets / totalTickets) * 100;
        kidThicketPercent = (kidTickets / totalTickets) * 100;

        console.log(`${movieName} - ${movieTheaterFilledPercent.toFixed(2)}% full.`);

        if (filledMovieTheater) {
            placesTaken = 0;
            continue;
        }
        index++;
        command = input[index];
        placesTaken = 0;
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentThicketPercent.toFixed(2)}% student tickets.`);

    console.log(`${standardThicketPercent.toFixed(2)}% standard tickets.`);

    console.log(`${kidThicketPercent.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Shutter Island", "9", "standard", "standard", "standard", "student", "student", "student", "kid", "kid", "kid", "Rush", "9", "standard", "standard", "standard", "student", "student", "student", "kid", "kid", "kid", "Deadpool", "9", "standard", "standard", 'standard', 'student', "student", "student", "kid", "kid", "kid", "Finish"]);