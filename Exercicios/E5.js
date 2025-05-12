// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')();

let peso = Number(prompt('Informe seu PESO (kg): '));
let altura = Number(prompt('Informe sua ALTURA (m): '));
if (altura > 3) {
    altura = altura / 100;
    console.log(`✅ Convertido para metros: ${altura}m`);
}

let imc = peso / (altura * altura);

console.log("Seu IMC é:", imc.toFixed(2));


if (imc < 18.5) {
    console.log(`Você está com baixo peso.`);
}
else if (imc > 18.5 && imc <= 24) {
    console.log(`Você está com peso adequado.`);
}
else if (imc >= 25 && imc <= 29.9) {
    console.log(`Você está com sobrepeso.`);
}
else if (imc > 30) {
    console.log(`Você está com obesidade.`);

}