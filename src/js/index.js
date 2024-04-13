/*
Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

Passo 2 - identificar o clique no botão

Passo 3 - adicionar a classe ativo nos projetos escondidos

Objetivo 2 - esconder o botão de mostrar mais

Passo 1 - pegar o botão e esconder ele

*/



// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

//Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

const botaoMostrarPersonagens = document.querySelector('.btn-mostrar-personagens');
const personagensInativo = document.querySelectorAll('.personagem:not(.ativo)');

botaoMostrarPersonagens.addEventListener('click', () => {
    //Passo 3 - adicionar a classe ativo nos projetos escondidos
    personagensInativo.forEach(personagensInativo => {
        console.log(personagensInativo);
        personagensInativo.classList.add('ativo');
    });

    //Objetivo 2 - esconder o botão de mostrar mais
    //Passo 1 - pegar o botão e esconder ele
    botaoMostrarPersonagens.classList.add("remover");
});