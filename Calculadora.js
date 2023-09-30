const prompt = require('prompt -sync')()



let num1, num2
let operacao
function soma(num1, num2) {
    return num1 + num2
}
function sub() {
    return num1 - num2
}
function multi() {
    return num1 * num2
}
function div() {
    return num1 / num2
}

num1 = parseFloat(prompt())
num2 = parseFloat(prompt())
console.log("OPERAÇÕES DISPONÍVEIS +,-,*,/")
operacao = prompt("Digite a operação")
switch (operacao) {
    case '+': console.log("o resultado da soma é " + soma(num1, num2)); break;
    case '-': console.log("o resultado da subtração é " + sub(num1, num2)); break;
    case '*': console.log("o resultado da mutiplicação é " + multi(num1, num2)); break;
    case '/': console.log("o resultado da divisão é " + div(num1, num2));break;
    default: console.log("OPERAÇÃO NÃO DISPONÍVEL");break;

}

 




