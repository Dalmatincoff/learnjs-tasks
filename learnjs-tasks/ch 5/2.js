//1
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");

alert( a + b );

//2
console.log( Math.round(6.35 * 10) / 10 );

//3
function readNumber() {
    let num;

    do {
        num = prompt("Введите число");
    } while ( !isFinite(num) );

    return num === null || num === 0 ? null : num;
}

console.log(readNumber());

//5
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
