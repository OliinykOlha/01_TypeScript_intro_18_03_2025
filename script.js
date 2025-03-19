var age = 30; // числа до 2 в 53 степени(в том числе NaN)
var age1 = 30;
age1 = "50";
// Пример не явной типизации
// let x = 50;
// x ='50';
//  явная
var flag = false;
// number, string, boolean, null, undefined                         bigint, symbol
var arr = [1, 2, 3]; // массив
var arr1 = []; // либо массив строк либо массив чисел
var arr2 = []; // могут быть и строки и числа в одном массиве
// type Person = {
//     name: string,
//     age: number
// }
var person = {
    age: 38,
    name: "Bill",
};
var direction = "left";
direction = "right";
direction = "up";
direction = "down";
var sum = function (a, b) {
    return a + b > 100 ? a + b : (a + b) + "";
};
console.log(sum(2, 5));
// console.log(sum('2', 5)); ошибка
// console.log(sum(true, 5));
