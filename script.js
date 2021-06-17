var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');


mudarJogador('X');

function escolherQuadrado(id){

    if(vencedor !== null){
        return;
    }

var quadrado = document.getElementById(id);
if(quadrado.innerHTML !== '-'){
    return;
}

quadrado.innerHTML = jogador;
quadrado.style.color = '#000';

if(jogador === 'X'){
    jogador = 'O';
}else{
    jogador = 'X';
}
mudarJogador(jogador);
checaVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checaSequencial(quadrado1, quadrado2, quadrado3)){
        mudacorQuadrado(quadrado1, quadrado2, quadrado3)
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencial(quadrado4, quadrado5, quadrado6)){
        mudacorQuadrado(quadrado4, quadrado5, quadrado6)
        mudarVencedor(quadrado4);
        return;
    }
    if(checaSequencial(quadrado7, quadrado8, quadrado9)){
        mudacorQuadrado(quadrado7, quadrado8, quadrado9)
        mudarVencedor(quadrado7);
        return;
    }
    if(checaSequencial(quadrado1, quadrado4, quadrado7)){
        mudacorQuadrado(quadrado1, quadrado4, quadrado7)
        mudarVencedor(quadrado4);
        return;
    }
    if(checaSequencial(quadrado2, quadrado5, quadrado8)){
        mudacorQuadrado(quadrado2, quadrado5, quadrado8)
        mudarVencedor(quadrado2);
        return;
    }
    if(checaSequencial(quadrado3, quadrado6, quadrado9)){
        mudacorQuadrado(quadrado3, quadrado6, quadrado9)
        mudarVencedor(quadrado3);
        return;
    }
    if(checaSequencial(quadrado1, quadrado5, quadrado9)){
        mudacorQuadrado(quadrado1, quadrado5, quadrado9)
        mudarVencedor(quadrado41);
        return;
    }
    if(checaSequencial(quadrado3, quadrado5, quadrado7)){
        mudacorQuadrado(quadrado3, quadrado5, quadrado7)
        mudarVencedor(quadrado3);

    }
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudacorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencial(quadrado1, quadrado2, quadrado3){
    var Eiqual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        Eiqual = true;
    }
    return Eiqual;
}
function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i<= 9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X');
}