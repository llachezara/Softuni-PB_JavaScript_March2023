/*
1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
3.	Количество разредител (в литри) - цяло число в интервала [1…30]
4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]

*/

function pricePerHour(input) {
    let nylonPrice = (Number(input[0]) + 2) * 1.50;
    let paintPrice = (Number(input[1]) + 0.1 * Number(input[1])) * 14.50;
    let paintThinner = Number(input[2]) * 5;
    let hours = Number(input[3]);
    let priceForMaterials = (nylonPrice + paintPrice + paintThinner + 0.40);
    let priceForWorkman = 0.3 * priceForMaterials * hours;
    console.log(priceForMaterials + priceForWorkman);
}
pricePerHour(["10", "11", "4", "8"])