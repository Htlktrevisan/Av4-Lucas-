/*Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno. */

//Variaveis
let lado1
let lado2
let lado3

alert("Programa feito para ler tres lados de um triangulo")

//Entrada de Dados
lado1 = Number(prompt("Digite o valor do lado 'a' do triângulo"))
lado2 = Number(prompt("Digite o valor do lado 'b' do triângulo"))
lado3 = Number(prompt("Digite o valor do lado 'c' do triângulo")) 

if (lado1 == lado2 == lado3) {

    alert('Triângulo equilátero')
    
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {

    alert('Triângulo isóceles')
    
} else {

    alert('Triângulo escaleno')

}