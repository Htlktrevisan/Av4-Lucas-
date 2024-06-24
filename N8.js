/*Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25). */

//Variaveis 
let altura 
let peso 
let IMC

alert("programa feito para colocar altura e peso do usuario e no final mostrar em IMC")

//Entrada de Dados
altura = Number(prompt('Qual é altura (Metros)'))
peso = Number(prompt('Qual é o peso (Kilos)'))

    IMC = peso/(altura*altura)

if (IMC > 25) {

    alert('Acima do peso')
    
} else if (IMC > 18 && IMC < 25) {

    alert('Peso ideal')
    
}
else if(IMC < 18){

    alert('Abaixo do peso')

}