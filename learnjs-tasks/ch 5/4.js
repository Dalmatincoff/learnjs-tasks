//1
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4

//2
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");

//3
let arr = ["a", "b"];

arr.push(function() {
    alert( this );
});

arr[2](); // a,b,function()

//4
function sumInput() {

    let numbers = [];

    while (true) {

        let num = prompt();

        if (num === "" || num === null || !isFinite(num)) break;

        numbers.push(+num);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert( sumInput() );

//5
function getMaxSubSum(arr) {
    let maxSum = 0;
    let temp = 0;

    for (let item of arr) {
        temp += item;
        maxSum = Math.max(maxSum, temp);
        if (temp< 0) temp = 0;
    }

    return maxSum;
}