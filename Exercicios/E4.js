// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require('prompt-sync')();

console.log('===MENU===')
console.log('1- 💡 Dica Aleatória do Dia')
console.log('2- 🎲 Jogar um dado')
console.log('3- 📅 Ver Data e Hora Atuais')
console.log('4- ❌ Sair')

const escolha = prompt("Escolha uma opção (1-4): ");

switch (escolha) {

    case "1":
        console.log("Não fique triste, fique feliz.")

    case "2":
        const dado = Math.floor(Math.random() * 6) + 1;
        console.log(`🎲 Você rolou o dado e obteve: ${dado}`);
        break;
    case "3":
        console.log("📅 Data e Hora atual:", new Date().toLocaleString());
        break;
    case "4":
        console.log("❌ Você escolheu sair.");
        break;
    default:
        console.log("❌ Opção inválida. Por favor, escolha entre 1 e 4.");
        break;


}



