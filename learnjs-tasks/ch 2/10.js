//1
if ("0") { // выведется
    console.log( 'Привет' );
}

//2
let name = prompt('Какое "официальное" название JavaScript?', '');

if (name === 'ECMAScript') {
    console.log('Верно!');
} else {
    console.log('Не знаете? ECMAScript!');
}

//3
let num = prompt('Введите число');

if(num > 0){
    console.log(1);
} else if (num < 0) {
    console.log(-1);
} else{
    console.log(0);
}

//4
let result = (a+b < 4) ? 'Мало' : 'Много';

//5
let message = login == 'Сотрудрник' ? 'Привет' :
    login == 'Директор' ? 'Здрайствуйте' :
        login == '' ? 'Нет логина' :
            '';