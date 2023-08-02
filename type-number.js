
// Definindo os valores 
const forma = "triângulo";
const altura = 8;
const base = 5;
var area;

// Verificando se é quadrado ou não
if (forma === "quadrado") {
    area = altura * base;
} else {
    area = (base * altura) / 2;
}

//Imprimindo
console.log(area);