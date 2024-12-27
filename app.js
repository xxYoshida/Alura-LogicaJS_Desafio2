//Desafio 1

// Pergunta Inicial sobre qual o Dia Da Semana
let diaDaSemana = prompt('Que dia da semana é hoje?').trim().toLowerCase();

// Loop para continuar pedindo até que o usuário insira um dia válido
while (
    diaDaSemana !== 'sabado' &&
    diaDaSemana !== 'sábado' &&
    diaDaSemana !== 'domingo' &&
    diaDaSemana !== 'segunda' &&
    diaDaSemana !== 'terca' &&
    diaDaSemana !== 'terça' &&
    diaDaSemana !== 'quarta' &&
    diaDaSemana !== 'quinta' &&
    diaDaSemana !== 'sexta'
) {
    alert('Insira um dia da semana!');
    diaDaSemana = prompt('Que dia da semana é hoje?').trim().toLowerCase();
    console.log(diaDaSemana);
}

/* Função para remover acentos

function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

*/


//Mensagem exibida para o usuario

if (diaDaSemana == 'sabado' || diaDaSemana == 'domingo') {
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
} 

//Desafio 2

let numero = prompt("Digite um número:");

if (numero > 0) {
    alert("O número é positivo.");
} else if (numero < 0) {
    alert("O número é negativo.");
} else {
    alert("O número é zero.");
}

//Desafio 3 

let pontuacao = prompt("Digite a sua pontuação:");
pontuacao = parseInt(pontuacao); // Converte a pontuação para um número inteiro

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

//Desafio 4

let saldoConta = 250;
alert(`Seu saldo é de R$${saldoConta}.`);

//Desafio 5

let nome = prompt("Qual é o seu nome?");
alert(`Bem-vindo, ${nome}!`);



