function sumToN(N) {
    let sum =0;
    for (let i =1; i <= N; i++){
    sum += i
    }
    return sum
}

const promt = require ('prompt-sync')();
let num = Number (promt("введите число N:"));
console.log(sumToN(num));
