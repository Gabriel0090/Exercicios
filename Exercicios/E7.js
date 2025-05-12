
// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let macas = Number(prompt('Quantidade de maçãs: '));


if (macas < 12){
    let valor1= macas * 0.30
    console.log(`O valor total de compra é: R$ ${valor1}  `)
} else if (macas => 12){
let valor2= macas * 0.25
    console.log(`O valor total de compra é: R$ ${valor2}  `)
}



