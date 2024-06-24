/*Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário. */

//Declaração de variáveis
let salarioFuncionario 
let anosDeServico
let salarioBonus

//Entrada de dados
salarioFuncionario = Number(prompt('Digite seu salário'))
anosDeServico = Number(prompt('Digite quantos anos de empresa vc tem'))


//cálulos
salarioBonus = (salarioFuncionario * 0.05) + salarioFuncionario

//saída de dados
if(anosDeServico >= 5 ){
    alert('Vc ganhou o bônus de 5% \n'+ salarioBonus) 
}
else if(anosDeServico < 5){
    alert('Vc n ganhou o bonus')
}
