function oldBooks(input) {
    const favoriteBook = input[0];
    let nextBookName = input[1];

    let index = 1;
    let bookIsFound = false;
    while (nextBookName != 'No More Books') {
        if (nextBookName == favoriteBook) {
            bookIsFound = true;
            break;
        }
        index++;
        nextBookName = input[index];
    }

    let outputText = `You checked ${index - 1} books`;
    if (bookIsFound) {
        console.log(outputText + ` and found it.`);
    } else {
        console.log('The book you search is not here!');
        console.log(outputText + `.`);
    }

}
oldBooks(["Bourne",

    "True Story",

    "Forever",

    "More Space",

    "The Girl",

    "Spaceship",

    "Strongest",

    "Profit",

    "Tripple",

    "Stella",

    "The Matrix",

    "Bourne"]);
