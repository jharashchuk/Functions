// Задание 2! Массив уникальных случайных цифр.
// * Создадим массив для семи элементов;
// * Заполним его случайными цифрами от 0 до 10;
// * Цифры в массиве не должны повторяться;
// * Вывести этот массив в консоль;
// * Упорядочить массив;
// * Еще раз вывести его в консоль.

let arr = [];

function generateArray(arr) {
    while (arr.length < 7) {    
        let rand = Math.floor(Math.random() * 10);  
        if (!arr.includes(rand)) {
            arr.push(rand);
        }         
    }      
    console.log(arr);
}
generateArray(arr);

function sortArray(arr) {
    return arr.sort((a, b) => a-b);
}

console.log(sortArray(arr));
