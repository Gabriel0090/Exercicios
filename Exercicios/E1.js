
// //1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')();89

while (true) {
    let numero = Number(prompt('Informe o número desejado (ou digite uma letra para encerrar): '));

    if (isNaN(numero)) {
        console.log("Encerrando o programa...");
        break;
    }

    if (numero % 2 === 0) {
        console.log(`${numero} é par.`);
    } else {
        console.log(`${numero} é ímpar.`);
    }

    console.log(""); 
}
