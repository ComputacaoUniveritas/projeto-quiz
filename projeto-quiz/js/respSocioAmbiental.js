function Quiz(questoes) {
    this.pontuacao = 0;
    this.questoes = questoes;
    this.questoesIndex = 0;
}

Quiz.prototype.getQuestoesIndex = function() {
    return this.questoes[this.questoesIndex];
}

Quiz.prototype.suposicao = function(resposta) {
    if(this.getQuestoesIndex().respostaCorreta(resposta)) {
        this.pontuacao++;
    }
 
    this.questoesIndex++;
}

Quiz.prototype.terminou = function() {
    return this.questoesIndex === this.questoes.length;
}

function Questao(texto, opcoes, resposta) {
    this.texto = texto;
    this.opcoes = opcoes;
    this.resposta = resposta;
}

Questao.prototype.respostaCorreta = function(respostas) {
    return this.resposta === respostas;
}

function montaQuiz() {
    if(quiz.terminou()) {
        mostrarResultado();
    }
    else {
        var elemento = document.getElementById("questao");
        elemento.innerHTML = quiz.getQuestoesIndex().texto;

        var opcoes = quiz.getQuestoesIndex().opcoes;
        for(var i = 0; i < opcoes.length; i++) {
            var elemento = document.getElementById("opcoes" + i);
            elemento.innerHTML = opcoes[i];
            suposicao("btn" + i, opcoes[i]);
        }
        mostrarProgresso();
    }
};

function suposicao(id, suposicao) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.suposicao(suposicao);
        montaQuiz();
    }
};

function mostrarProgresso() {
    var numeroDaQuestaoAtual = quiz.questoesIndex + 1;
    var elemento = document.getElementById("progresso");
    elemento.innerHTML = "Pergunta " + numeroDaQuestaoAtual + " de " + quiz.questoes.length;
};

function mostrarResultado() {
    var fimDeJogoHTML = "<h1>Resultado:</h1>";
    fimDeJogoHTML += "<h2 id='pontuacao'> Sua pontuação foi: " + quiz.pontuacao + " de "+ quiz.questoes.length+"</h2>";
    fimDeJogoHTML += "<button id='voltar' onClick= window.location.reload();>Recomeçar!</button>";
    var elemento = document.getElementById("questionario");
    elemento.innerHTML = fimDeJogoHTML;
};

var questoes = [
    new Questao("Sob o ponto de vista de quatro correntes do pensamento econômico, em qual delas a proposta de ação é a criação de taxa de poluição e venda de licenças para poluir?",
        ["a. Neoclássicos", "b. Pigouvianos","c. Economistas ecológicos", "d. Biologia natural", "e. Ecodesenvolvimentistas"],
        "a. Neoclássicos"),
    new Questao("Expressada em hectares globais (gha), permite comparar diferentes padrões de consumo e verificar se estão dentro da capacidade ecológica do planeta. Um hectare global significa um hectare de produtividade média mundial para terras e águas produtivas em um ano. Qual é esta metodologia de contabilidade ambiental que avalia a pressão do consumo das populações humanas sobre os recursos naturais?",
        ["a. Calculadora ecológica", "b. Footwork calculator","c. Análise de impacto ambiental", "d. Pegada ecológica", "e. Calculadora ambiental"],
        "d. Pegada ecológica"),
    new Questao("Sobre a educação ambiental, observe as afirmações abaixo:<br> I – A educação ambiental conduz os profissionais a uma estagnação e um conservadorismo comportamental em relação às questões ambientais.<br> II – A educação ambiental é uma importante ferramenta para o gerenciamento das questões ambientais de uma organização.<br> III – A educação ambiental desenvolvida pelas organizações é normalmente praticada fora dos seus limites, geralmente nas escolas da sua área de influência.<br> Está correto o que se afirma apenas em:", 
        ["a. I e II", "b. Todas as afirmativas são falsas","c. I e III", "d. I, II e III", "e. II e III"],
        "e. II e III"),
    new Questao("Na corrente de pensamento econômico dos Pigouvianos eles indicam que deve haver um mecanismo que possibilite a internalização monetária das externalidades (poluição). Para os Pigouvianos, este mecanismo é uma:",
        ["a. Causa dos problemas ambientais", "b. Política ambiental","c. Política econômica", "d. Solução", "e. Proposta de ação"],
        "d. Solução"),
    new Questao("Está embasada na busca de um equilíbrio entre o homem e o ambiente, com vistas às construções de um futuro planejado sob uma lógica de desenvolvimento e progresso. O texto se refere a(o):", 
        ["a. Sustentabilidade", "b. Educação social","c. Educação ambiental", "d. IDH", "e. Desenvolvimento sustentável"],
        "c. Educação ambiental"),
    new Questao("O movimento de consumidores utiliza certas estratégias – boicotes, cooperativas, rotulagens etc. – como formas de politização do consumo.<br>Trata-se de um tipo de pressão política que extrapola as ações nos locais de trabalho para atuar nas relações de consumo.<br>Os direitos básicos do consumidor estão sintetizados no artigo 6º do Código de Defesa do Consumidor.<br>Qual das alternativas abaixo NÃO é um dos direitos básicos do consumidor:", 
        ["a. Proteção da vida, saúde e segurança", "b. Restrição à justiça e aos órgãos administrativos de defesa do consumidor","c. Proteção contra a publicidade enganosa e abusiva e métodos comerciais ilegais", "d. Educação para o consumo", "e. Informação adequada e clara sobre produtos e serviços"],
        "b. Restrição à justiça e aos órgãos administrativos de defesa do consumidor"),
    new Questao("“O consumo tem ganhado na formação e fortalecimento das nossas identidades e na construção das relações sociais. Assim, o nível e o estilo de consumo se tornam a principal fonte de identidade cultural, de participação na vida coletiva, de aceitação em um grupo e de distinção com os demais”. O texto refere-se a", 
        ["a. Sociedade dos bens e serviços", "b. Sociedade do consumo","c. Participação social", "d. Consumo regulamentado", "e. Evolução social"],
        "b. Sociedade do consumo"),
    new Questao("Antes de começar a execução do seu projeto, todo empreendimento deve obter três licenças, as quais são fundamentais para se garantir o respeito ao meio ambiente e ao trabalho, segundo os princípios adequados de preservação e recuperação ambiental. Observe os tópicos a seguir:<br>• Autoriza a instalação do empreendimento<br>• Concedida após análise e aprovação do projeto executivo<br>• Prazo de validade: até 06 anos<br>Estes elementos referem-se a qual licença?", 
        ["a. Licença de execução", "b. Licença de operação","c. Licença prévia", "d. Licença de instalação", "e. Licença de implantação"],
        "d. Licença de instalação"),
    new Questao("Sobre o meio ambiente, observe as afirmações abaixo:<br>I - O meio ambiente, comumente chamado apenas de ambiente, envolve todas as coisas vivas e não-vivas ocorrendo na Terra, ou em alguma região dela, que afetam os ecossistemas e a vida dos humanos.<br>II - Completo conjunto de unidades ecológicas que funcionam como um sistema natural mesmo com uma massiva intervenção humana e outras espécies do planeta, incluindo toda a vegetação, animais, microorganismos, solo, rochas, atmosfera e fenômenos naturais que podem ocorrer em seus limites.<br>III - Recursos e fenômenos físicos universais que não possuem um limite claro, como ar, água, e clima, assim como energia, radiação, descarga elétrica, e magnetismo, que não se originam de atividades humanas.<br>Está CORRETO o que se afirma apenas em:", 
        ["a. I, II e III", "b. I e II","c. Todas as afirmativas são falsas", "d. II e III", "e. I e III"],
        "a. I, II e III"),
    new Questao("Dentre os principais métodos de avaliação de impactos ambientais, um deles tem as seguintes características: reúne uma equipe multidisciplinar de especialistas no assunto ou na área em questão e é utilizado nos casos de escassez de dados, fornecendo orientação para outras avaliações.<br>Qual é este método?", 
        ["a. Método das matrizes", "b. Método das listagens","c. Método ad hoc", "d. Método das interações", "e. Método dos modelos"],
        "c. Método ad hoc")
];

var quiz = new Quiz(questoes);

montaQuiz();
