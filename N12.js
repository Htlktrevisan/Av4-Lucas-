/*Faça um programa no qual o usuário digite a cor que está no semáforo (verde, amarelo, vermelho). Caso seja digitado verde, mostre na tela "Pode seguir!", se for digitado amarelo, mostre "Alerta, pare!" e se for digitado vermelho, mostre "Pare imediatamente!". */

//Variaveis 
let corSemaforo

alert("Programa feito para o usuario digitar a cor no semáforo")

//Entrada de Dados 
corSemaforo = prompt('Digite a cor do semáforo! \n [1] Verde\n [2] Amarelo\n [3] Vermelho')

if (corSemaforo == 1) {

    alert('Pode seguir!')
    
} else if (corSemaforo == 2) {

    alert('Alerta, pare!')
    
} else if (corSemaforo == 3) {

    alert('Pare imediatamente!')
    
}