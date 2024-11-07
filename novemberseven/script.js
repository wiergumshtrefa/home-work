const prompt = require('prompt-sync')();  
 
let length = Number(prompt('Введите длину прямоугольника: '));  
let width = Number(prompt('Введите ширину прямоугольника: '));  
 
let perimeter = 2 * (length + width); 
 
console.log("Периметр прямоугольника: " + perimeter);
