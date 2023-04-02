function oldBooks(input) {
    let index = 0;
    const favoriteBook = input[index];

    index++;
    let nextBookName = input[index];

    let bookIsFound = false;
    while (nextBookName != 'No More Books') {
        if (nextBookName == favoriteBook) {
            bookIsFound = true;
            break;
        }
        index++;
        nextBookName = input[index];
    }
    if (bookIsFound) {
        console.log(`You checked ${index - 1} books and found it.`);
    } else {
        console.log('The book you search is not here!');
        console.log(`You checked ${index - 1} books.`);
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