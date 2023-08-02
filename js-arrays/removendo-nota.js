// Declarando um array
const notas = [10, 6, 8, 5.5, 10];

// O pop elimina o ultimo elemento no array
notas.pop();

// Fazendo a média das notas de um array com o length
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// Imprimindo o resultado
console.log(`A media é ${media}.`);