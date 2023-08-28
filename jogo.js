let ultimaJogada = '0';

function marcarJogada(identificador){
    const quadradoPequeno = document.getElementById(identificador);


    const jogada = quadradoPequeno.innerHTML;

    if (jogada != "") {
        return;
    }

    if (ultimaJogada == '0'){
        quadradoPequeno.innerHTML = 'X';
        ultimaJogada = 'X';
        return;
    }

    quadradoPequeno.innerHTML = '0';
    ultimaJogada = '0';

}
