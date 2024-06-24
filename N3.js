/*Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais. */

// Declaração varíaveis
let primeiroNumero
let segundoNumero

// Contexto 
alert("Esse aplicativo indica se o número é maior , menor ou igual")

// Entrada de dados
primeiroNumero = Number(prompt('Digite o primeiro número'))
segundoNumero = Number(prompt('Digite o segundo número'))

//Dados
if(primeiroNumero > segundoNumero){
    alert('Seu primeiro número é maior q o segundo')
}
else if(segundoNumero > primeiroNumero){
    alert('Seu segundo número é maior que o primeiro')
}
else{
    alert('Os dois números são iguais')
}