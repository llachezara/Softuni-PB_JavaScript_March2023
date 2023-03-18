/*
квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle).

· Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му

· Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му

· Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга

· Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея

Резултатът да се закръгли до 3 цифри след десетичната запетая
*/
function area(input) {
    let figure = input[0];
    let area;
    if (figure == "square") {
        let side = Number(input[1]);
        area = side * side;

    } else if (figure == "rectangle") {
        let a = Number(input[1]);
        let b=Number(input[2]);

        area=a*b;

    } else if (figure == "circle") {
        let r=Number(input[1]);
        area =Math.PI*r*r;

    } else {
        //if input is triangle
        let side = Number(input[1]);
        let h = Number(input[2]);

        area = (side * h) / 2;
    }
    console.log(area.toFixed(3));
}
area(["circle", "6"]);