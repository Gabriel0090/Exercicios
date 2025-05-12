// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

let nota = Number(prompt('Informe sua nota: '));

if (nota >= 6) {

    console.log('Aprovado');

} else if (nota < 6) {

    let notaRecuperacao = Number(prompt('Voçe ficou em recuperação, informe sua nota da recuperação: '));

    if (notaRecuperacao >= 6) {

        console.log('Aprovado na recuperação');
    } else {

        console.log('Reprovado na recuperação');
    }
} else {

    console.log('Nota inválida');

}