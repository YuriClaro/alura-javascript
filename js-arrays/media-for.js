// Array de notas
const notas = [10, 6.5, 8, 7.5];

 let somaDasNotas = 0;

 // for que vai somar todas as notas
 for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
 }

 // calculando e imprimindo a media 
 const media = somaDasNotas / notas.length;
 console.log(`A média das notas é ${media}.`);


