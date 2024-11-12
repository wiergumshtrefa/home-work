const prompt = require('prompt-sync')(); 
let number1 = Number(prompt('введите первое число: ')); 
let number2 = Number(prompt('введите второе число: ')); 
let stepen = number1 ** number2; 
console.log("возвидение в степень: " + stepen);