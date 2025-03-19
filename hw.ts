// Переменные разных типов
let productName: string = "Laptop";
let price: number = 1499.99; 
let inStock: boolean = true; 
let discount: null | number  = null; 
let warranty: undefined | string; 

// Переменная, которая может быть числом или строкой
let productCode: number | string = 1010;
productCode = "A1010";

// Массив чисел (цены товаров)
const prices: number[] = [499, 1299, 799, 2499, 1599];
// prices.push("2000"); 

// Массив строк (названия товаров)
const products: string[] = ["Phone", "Tablet", "Monitor", "Keyboard", "Mouse"];

// Массив, содержащий только числа или только строки
const ids1: number[] | string[] = ["ID001", "ID002", "ID003"]; // Только строки
const ids2: number[] | string[] = [101, 102, 103]; // Только числа

// Массив с числами и строками одновременно
const mixedValues: (number | string)[] = [1, "two", 3, "four", 5, "six"];

// Массив булевых значений
const toggles: boolean[] = [true, false, false, true, true];

// Проверка значений (в TS тут должны появиться ошибки при несоответствии типов)
// price = "Expensive"; // Ошибка в TS
//  inStock = "yes"; // Ошибка в TS
//  prices.push("Free"); // Ошибка в TS
// products.push(100); // Ошибка в TS