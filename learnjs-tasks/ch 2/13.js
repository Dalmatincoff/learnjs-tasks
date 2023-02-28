//1
let i = 3;

while (i) {
    alert( i-- ); // 3 2 1
}

//2
let i = 0;
while (++i < 5) alert( i ); // 1 2 3 4

let i = 0;
while (i++ < 5) alert( i ); //  1 2 3 4 5

//3
for (let i = 0; i < 5; i++) alert( i ); // 0 1 2 3 4

for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4

//4
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log( i );
    }
}

//5
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}

//6
let num;

do {
    num = prompt("Введите число больше 100?");
} while (num <= 100 && num);

//7
let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++){
            if (i % j == 0) continue nextPrime;
        }

        console.log( i );
    }