// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let valor1 = Number(prompt("Informe o primeiro valor: "));
let valor2 = Number(prompt("Informe o segundo valor: "));

if (valor1 === valor2) {
    console.log(" Os valores não podem ser iguais. Tente novamente.");
} else {
    if (valor1 < valor2) {
        console.log(` Ordem crescente: ${valor1}, ${valor2}`);
    } else {
        console.log(` Ordem crescente: ${valor2}, ${valor1}`);
    }
}