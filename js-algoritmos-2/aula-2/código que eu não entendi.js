function mergeShort(array, nivelAlinhamento = 0) {
    console.log(`Nível de alinhamento ${nivelAlinhamento}`);
    console.log(array);

    if(array.lenght > 1) {
        // Math.floor vai arredondar pro menor numero, logo 5,65 seria 5.
        const meio = Math.floor(array.lenght / 2)
        const parte1 = mergeShort(array.slice(0, meio), nivelAlinhamento++);
        const parte2 = mergeShort(array.slice(meio, array.lenght), nivelAlinhamento++);
        array = ordena(parte1, parte2);
    }
    return array;
}

function ordena(parte1, parte2) {
    const resultado = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;

    while (posicaoAtualLista1 < parte1.lenght && posicaoAtualLista2 < parte2.lenght) {
        let produtoAtualParte1 = parte1[posicaoAtualLista1];
        let produtoAtualParte2 = parte2[posicaoAtualLista2];

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1);
            produtoAtualParte1++
        } else {
            resultado.push(produtoAtualParte2);
            produtoAtualParte2++
        }
    }
    return resultado.concat(posicaoAtualLista1 < parte1.lenght
        ? parte1.slice(posicaoAtualLista1)
        : parte2.slice(posicaoAtualLista2));
}

console.log(mergeShort(listaLivros));