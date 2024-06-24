/*Crie uma programa que verifique se uma pessoa pode dirigir. Deve ser perguntada a a idade da pessoa e se ela tiver idade suficiente para dirigir (18 anos ou mais), exiba "Você pode dirigir", caso contrário, exiba "Você ainda não pode dirigir". */

// declarar variáveis
let idadePessoa

// Contexto
alert('Esse site confere se vc tem idade suficiente para dirigir')

// Entrada de dados
idadePessoa = Number(prompt('Digite sua idade'))

// Dados 
if(idadePessoa > 18){
    alert('Vc pode fazer a carteira para dirigir')
}
else if (idadePessoa < 18){
    alert('Vc ainda n pode fazer sua carteira')
}