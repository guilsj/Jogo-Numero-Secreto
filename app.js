// variaveis
let listaNumeroSorteado = [];
let numLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

// texto da tela
function textoNaTela(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0});
}

// mensagem inicial
function mensagemInicial() {
    textoNaTela('h1', 'Jogo do número secreto');
    textoNaTela('p', 'Escolha um numero entre 1 e 10');
}

mensagemInicial();

// gerador de numero aleatorio
function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
    if (listaNumeroSorteado.length == numLimite) { // limpa lista de numero sorteado quando estiver cheia
        listaNumeroSorteado = [];
    }
    if (listaNumeroSorteado.includes(numeroEscolhido)) { // analisa se o numero aleatorio ja esta na lista de numeros sorteados
        return numeroAleatorio();
    } else {
        listaNumeroSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

// verificar chute
function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
    if (chute == numeroSecreto) {
        textoNaTela('h1', 'Acertou!');
        textoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute < numeroSecreto) {
        textoNaTela('p', `O número secreto é maior que ${chute}`);
        limparTela();
    } else {
        textoNaTela('p', `O número secreto é menor que ${chute}`);
        limparTela();
    }
    tentativas++;
}

// novo jogo
function novoJogo() {
    limparTela();
    mensagemInicial();
    tentativas = 1;
    numeroSecreto = numeroAleatorio();
}

//limpar tela
function limparTela() {
    chute = document.querySelector('input'). value = '';
}
