/*Elabore um programa que leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são: a) Ter pelo menos 65 anos b) Ter trabalhado pelo menos 30 anos c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos */

//Variaveis
let idade
let idadeTrabalhada

alert("Programa feito para ler a idade e o tempo de serviço de uma pessoa, para saber se pode se aposentar ou não")

idade = Number(prompt("Digite sua idade"))
idadeTrabalhada = Number(prompt("Digite sua idade Trabalhada "))

if (idade >= 65 || idadeTrabalhada>= 30 || idade >= 60 && idadeTrabalhada >= 25) {

    alert('Você tera direito a aposentadoria!')
    
} else {

    alert('Você não tera direito a aposentadoria!')
    
}