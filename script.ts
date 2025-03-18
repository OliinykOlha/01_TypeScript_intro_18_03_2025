let age: number = 30; // числа до 2 в 53 степени(в том числе NaN)

let age1: number | string = 30;
age1 = '50';

// Пример не явной типизации
// let x = 50;
// x ='50';


//  явная
let flag: boolean = false;


// number, string, boolean, null, undefined                         bigint, symbol


const arr: number[] = [1, 2, 3]; // массив

const  arr1: number[] | string[] = []; // либо массив строк либо массив
const  arr2: (number|string)[] = [];   // могут быть и строки и числа в одном массиве