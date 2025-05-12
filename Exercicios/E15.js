
let num1 = 0;
let num2 = 1;

console.log(" Sequência de Fibonacci (10 primeiros números):");

for (let i = 1; i <= 10; i++) {
    console.log(num1);

    let proximo = num1 + num2;
    num1 = num2;
    num2 = proximo;
}