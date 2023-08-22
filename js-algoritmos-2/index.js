const {edFolha, edGalho} = require('./arrays.js');

function juntarListas(lista1, lista2) {
    listaFinal = [];
    let listaPosicaoAtual1 = 0;
    let listaPosicaoAtual2 = 0;

    while (listaPosicaoAtual1 < lista1.lenght && listaPosicaoAtual2 < lista2.lenght) {
        
        if (lista1[listaPosicaoAtual1].preco < lista2[listaPosicaoAtual2].preco) {
            listaFinal.push(lista1[listaPosicaoAtual1]);
            listaPosicaoAtual1++;
        } else if (lista2[listaPosicaoAtual2].preco < lista1[listaPosicaoAtual1].preco) {
            listaFinal.push(lista2[listaPosicaoAtual2]);
            listaPosicaoAtual2++;
        } else {
            listaFinal.push(lista1[listaPosicaoAtual1]);
            listaFinal.push(lista2[listaPosicaoAtual2]);
            listaPosicaoAtual1++
            listaPosicaoAtual2++
        }  
    }

    while (lista1[listaPosicaoAtual1] || lista2[listaPosicaoAtual2]) {
        
        if (lista1[listaPosicaoAtual1]) {
            listaFinal.push(lista1[listaPosicaoAtual1])
            listaPosicaoAtual1++;
        } else {
            listaFinal.push(lista2[listaPosicaoAtual2]);
            listaPosicaoAtual2++;
        }
    }
     return listaFinal;
}

console.log(juntarListas(edFolha, edGalho))