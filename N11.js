/*Elabore um programa que converta uma quantidade de dólares para reais. Devem ser solicitados o valor em dólares e a cotação do dólar. Mostre a conversão para reais na tela. Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato. */

//Variaveis 
let dolar
let conotacaoDolar 
let real 

alert("Programa feito para conversão de dolar para reais")

//Entrada de Dados  
dolar = Number(prompt("Digite o valor em dolar"))
conotacaoDolar = Number(prompt("Digite a conotação em dolar")) //O termo cotação pode ser definido como o preço momentâneo de um ativo.? 

real = dolar * conotacaoDolar

if (real > 5) {

    alert(real+' Real, está caro')
    
}

else {

    alert(real+' Real, está barato')

}