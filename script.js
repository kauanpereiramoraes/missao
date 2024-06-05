<script src="script.js"></script>
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Assim que terminou a temporada, o corinthians planeja fazer uma reformulação no elenco , então ele está pensando em contratar dois meias, Quais contratar?",
        alternativas: [
            "igor Coronado",
            "Rodrigo Garro"
        ]
    },
    {
        enunciado: "Com a divida do Corinthians, ele planeja diminuir a divida com a entradado novo presidente, quem seria um bom nome para a presidencia do Corinthians?",
        alternativas: [
            "augusto Melo",
            "André Negão"
        ]
    },
    {
        enunciado: "com a saída do Cassio do Corinthians, o timão busca colocar um goleiro do elenco corintiano,qual seria um bom nome? "
    ",
        alternativas: [
            "Carlos Miguel",
            "Felipe Longo"
        ]
    },
    {
        enunciado: "Com o fim do Paulistão, o corinthians busca melhorar seu elenco, e com isso busca um novo treinador, Qual seria o melhor nome?",
        alternativas: [
            "Antonio Oliveira",
            "Mano Menezes"
        ]
    },
    {
        enunciado: "O corinthians buca um titulo que ainda é inedito na sua enorme pratileira de troféus, e com isso e ele ganhar esse titulo, ele vai se consagrar campeão de tudo, Qual titulo que falta?",
        alternativas: [
            "Sudamericana",
            "Libertadores"
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
