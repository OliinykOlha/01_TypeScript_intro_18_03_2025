let age: number = 30; // числа до 2 в 53 степени(в том числе NaN)

let age1: number | string = 30;
age1 = "50";

// Пример не явной типизации
// let x = 50;
// x ='50';

//  явная
let flag: boolean = false;

// number, string, boolean, null, undefined                         bigint, symbol

const arr: number[] = [1, 2, 3]; // массив

const arr1: number[] | string[] = []; // либо массив строк либо массив чисел
const arr2: (number | string)[] = []; // могут быть и строки и числа в одном массиве

interface IPerson {
  name: string;
  age: number;
}

// type Person = {
//     name: string,
//     age: number
// }

const person: IPerson = {
  age: 38,
  name: "Bill",
};

type Direction = "left" | "right" | "up" | "down";

let direction: Direction = "left";
direction = "right";
direction = "up";
direction = "down";



const sum = (a: number, b: number): string | number => {
    return a + b > 100 ? a + b : (a + b) + "";

};
console.log(sum(2, 5));
// console.log(sum('2', 5)); ошибка
// console.log(sum(true, 5));

