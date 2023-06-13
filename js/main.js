function mudaImagem(id) {
    document.querySelector('[data-imagem]').src = 'img/robotron_' + id + '.png'; 
}

const controle = document.querySelectorAll('[data-controle]');
const estatistica = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        atualizaEstatistica(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca);
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    })

})

function manipulaDados(operacao, controle) {
    const contador = controle.querySelector('[data-contador]');
    if (operacao === "+") {
        contador.value = parseInt(contador.value) + 1;
    } else if (contador.value > 0) {
        contador.value = parseInt(contador.value) - 1;
    }
}


function atualizaEstatistica(operacao, controle, parteRobo) {
    const contador = controle.querySelector('[data-contador]');
    estatistica.forEach((elemento) => {
        if (operacao === "+") {
            elemento.textContent = parseInt(elemento.textContent) + pecas[parteRobo][elemento.dataset.estatistica];
        } else if (contador.value > 0) {
            elemento.textContent = parseInt(elemento.textContent) - pecas[parteRobo][elemento.dataset.estatistica];
        }
    })
}


