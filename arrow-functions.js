// Function
function apresentarNomeFunction(nome) {
    return `Meu nome é ${nome} com function`
};

function somaDePequenosNumeros (num1, num2) {
    if (num1 >= 10 || num2 >= 10) {
        return `Somente numeros até 9`
    } else {
        return num1 + num2;
    }
}

// Arrow function
const apresentarNomeArrow = nome => `Meu nome é ${nome} com arrow`;
const soma = (num1, num2) => num1 + num2;
const somaDePequenosNumerosArrow = (num1, num2) = (num1 >= 10 || num2 >= 10 ? `Somente numeros até 9` : num1 + num2);

// Impressão
console.log(apresentarNomeFunction('Yuri'));
console.log(apresentarNomeArrow('Yuri'));
console.log(soma(2,2));
console.log(somaDePequenosNumeros(10,10))
console.log(somaDePequenosNumeros(10,9))
console.log(somaDePequenosNumeros(9,10))
console.log(somaDePequenosNumeros(9,9))
