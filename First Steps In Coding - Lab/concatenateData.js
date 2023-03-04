function concat(input) {
    let name = input[0] + " " + input[1];
    let age = input[2];
    let town = input[3];
    console.log(`You are ${name}, a ${age}-years old person from ${town}.`);
}
concat(["Daniel", "Ivailov", "20", "Sofia"]);