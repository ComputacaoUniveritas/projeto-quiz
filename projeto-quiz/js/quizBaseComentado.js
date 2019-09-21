//Função que inicia a pontuação, recebe as perguntas e acompanha o index do array com as perguntas 
function Quiz(questoes) {
    this.pontuacao = 0;
    this.questoes = questoes;
    this.questoesIndex = 0;
}

//Função que busca o index do array questoes, que está com as perguntas
Quiz.prototype.getQuestoesIndex = function() {
    return this.questoes[this.questoesIndex];
}

//Função que verifica se a resposta está correta em seguida adiciona ponto
//e movimenta o Index do array questoes adiante
Quiz.prototype.suposicao = function(resposta) {
    if(this.getQuestoesIndex().respostaCorreta(resposta)) {
        this.pontuacao++;
    }
 
    this.questoesIndex++;
}

// Se o index do array questao for igual ao número de perguntas, terminou passa a ser true
Quiz.prototype.terminou = function() {
    return this.questoesIndex === this.questoes.length;
}

// Função construtora das perguntas, para montagem das questões e respostas no HTML
function Questao(texto, opcoes, resposta) {
    this.texto = texto;
    this.opcoes = opcoes;
    this.resposta = resposta;
}
 
//Função que verifica se a resposta está correta
Questao.prototype.respostaCorreta = function(respostas) {
    return this.resposta === respostas;
}

//Função que constroi o quiz e verifica se ele já terminou para mostrar o resultado
function montaQuiz() {
    if(quiz.terminou()) {
        //Mostra o resultado
        mostrarResultado();
    }
    else {
        // Mostra a pergunta
        var elemento = document.getElementById("questao");
        elemento.innerHTML = quiz.getQuestoesIndex().texto;
 
        // Mostra as opções
        var opcoes = quiz.getQuestoesIndex().opcoes;
        for(var i = 0; i < opcoes.length; i++) {
            var elemento = document.getElementById("opcoes" + i);
            elemento.innerHTML = opcoes[i];
            suposicao("btn" + i, opcoes[i]);
        }
        mostrarProgresso();
    }
};

//Função que verifica se a resposta está correta e depois passa a próxima pergunta.
function suposicao(id, suposicao) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.suposicao(suposicao);
        montaQuiz();
    }
};
 
//Função que mostra número da pergunta e quantas são no total
function mostrarProgresso() {
    var numeroDaQuestaoAtual = quiz.questoesIndex + 1;
    var elemento = document.getElementById("progresso");
    elemento.innerHTML = "Pergunta " + numeroDaQuestaoAtual + " de " + quiz.questoes.length;
};

//Função que mostra o resultado, com total de pontos
function mostrarResultado() {
    var fimDeJogoHTML = "<h1>Resultado:</h1>";
    fimDeJogoHTML += "<h2 id='pontuacao'> Sua pontuação foi: " + quiz.pontuacao + " de "+ quiz.questoes.length+"</h2>";
    fimDeJogoHTML += "<button id='voltar' onClick= window.location.reload();>Recomeçar!</button>";
    var elemento = document.getElementById("quiz");
    elemento.innerHTML = fimDeJogoHTML;
};
 
// Array com as questões, opções e resposta correta.
var questoes2 = [
    new Questao("Pergunta 1",
        ["a.", "b.","c.", "d.", "e."],
        "a."),
    new Questao("Pergunta 2",
        ["a.", "b.","c.", "d.", "e."],
        "a."),
     new Questao("Pergunta 3", 
        ["a.", "b.","c.", "d.", "e."],
        "a."),
    new Questao("Pergunta 4",
        ["a.", "b.","c.", "d.", "e."],
        "a."),
    new Questao("Pergunta 5", 
        ["a.", "b.","c.", "d.", "e."],
        "a.")
];
 
// Variavel quiz recebe a função Quiz
var quiz = new Quiz(questoes);
 
// Objeto que inicia o questionário
montaQuiz();
