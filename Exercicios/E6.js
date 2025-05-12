// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();

let valorA = Number(prompt('Informe o valor de A: '));
let valorB = Number(prompt('Informe o valor de B: '));
let valorC = Number(prompt('Informe o valor de C: '));


if (valorA < valorB + valorC && valorB < valorA + valorC && valorC < valorA + valorB) {

    if (valorA === valorB && valorB === valorC) {
        console.log(" Triângulo Equilátero (todos os lados iguais).");
    }
    else if (valorA === valorB || valorA === valorC || valorB === valorC) {
        console.log(" Triângulo Isósceles (dois lados iguais).");
    }
    else {
        console.log(" Triângulo Escaleno (todos os lados diferentes).");
    }

}