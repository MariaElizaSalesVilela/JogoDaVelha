const body = document.querySelector("body");

function criarTabuleiro(){
    const div = document.createElement("div");
    
    const board = div.cloneNode(true);
    board.classList.add("board");
    body.appendChild(board);

    const cell = div.cloneNode(true);
    cell.classList.add("cell");

    const quadrados = Array(9).fill(0);
    quadrados.forEach((_, index) => {
        let identificador = index + 1;
        cell.setAttribute("id", identificador);
        cell.setAttribute("onclick", `marcarJogada(${identificador})`);
        board.appendChild(cell.cloneNode(true));


    });
    
}

criarTabuleiro();
