import fs from 'fs';
import chalk from 'chalk';
import { text } from 'stream/consumers';

console.log(chalk.blue('olá mundo'));

function trataErro(erro) {
    throw new Error(erro);
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }       
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivos/texto.md');
