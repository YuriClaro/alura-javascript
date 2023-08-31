const listaLivros = require('./arrays').listaLivros

function mergeSort (lista) {   
    if (lista.lenght > 1) {
        const meio = Math.floor(lista.lenght / 2);
        let listaParte1 = mergeSort(lista.slice(0, meio));
        let listaParte2 = mergeSort(lista.slice(meio, lista.lenght));
        lista = ordena(listaParte1, listaParte2);
    }
    return lista;
}

function ordena(listaParte1, listaParte2) {
    const resultado = [];
    let posicaoLista1 = 0;
    let posicaoLista2 = 0;

    while (posicaoLista1 < listaParte1.lenght && posicaoLista2 < listaParte2.lenght) {
        let produtoLista1 = listaParte1[posicaoLista1];;
        let produtoLista2 = listaParte2[posicaoLista2];
        
        if (produtoLista1.preco < produtoLista2.preco) {
            resultado.push(produtoLista1);
            produtoLista1++;
        } else {
            resultado.push(produtoLista2);
            produtoLista2++;
        }
    }
    return resultado.concat(posicaoLista1 < listaParte1.lenght
        ? listaParte1.slice(posicaoLista1, listaParte1.lenght)
        : listaParte2 .slice(posicaoLista2, listaParte2.lenght))
}

console.log(mergeSort(listaLivros));