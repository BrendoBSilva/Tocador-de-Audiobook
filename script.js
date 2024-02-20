const botaoPlayPause= document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const audioCapitulo= document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let taTocando = 0;
let capituloatual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle');
    botaoPlayPause.classList.add('bi-pause-circle');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle');
    botaoPlayPause.classList.add('bi-play-circle');
}

function tocarouPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa() {
    nomeCapitulo.innerText = 'Capitulo ' + capituloatual;
}

function proximafaixa() {
    if(capituloatual === numeroCapitulos) {
        capituloatual = 1;
    } else {
        capituloatual = capituloatual + 1
    }
    
    audioCapitulo.src = './books/dom-casmurro/' + capituloatual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

function voltarfaixa() {
    if(capituloatual === 1) {
        capituloatual = numeroCapitulos;
    } else {
        capituloatual = capituloatual + -1
    }
    
    audioCapitulo.src = './books/dom-casmurro/' + capituloatual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

botaoPlayPause.addEventListener('click',tocarouPausar);
botaoAvancar.addEventListener('click', proximafaixa);
botaoVoltar.addEventListener('click', voltarfaixa);