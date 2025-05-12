// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;

for (;;) {
    let numero = Number(prompt("Digite um número decimal (ou 0 para finalizar): "));
    if (numero === 0) break; 

    soma += numero;
    contador++;
}

console.log(contador > 0 ? 
    ` A média aritmética é: ${(soma / contador).toFixed(2)}` : 
    " Nenhum número foi digitado.");

