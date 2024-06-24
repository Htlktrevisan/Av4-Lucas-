/*Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!". */

//Variaveis
let nomeDaPessoa
let idadeDaPessoa
let comorbidade

alert("Programa feito para saber nome e idade da pessoa e se tem comobidade, para saber se pode se vacinar")

//entrada de Dados 
nomeDaPessoa = prompt('Digite seu nome:')
idadeDaPessoa = Number('Digite sua idade')
comorbidade = Number(prompt('Você tem comorbidade? \n [1] Sim \n [2] Não'))

if (idadeDaPessoa >= 60 || comorbidade == 1) {

    alert('Pode se vacinar!')
    
} else {

    alert('Não pode vacinar!')
    
}
