const prompt = require('prompt-sync')();

let numero = Number(prompt("Informe um número: "));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);