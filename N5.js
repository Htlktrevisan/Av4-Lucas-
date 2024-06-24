/*Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média. (DESAFIO: Incluir "Recuperação", sendo a média entre 5 e 7, e "Reprovado" apenas para médias abaixo de 5) */

//Declarar variáveis
let notaProva1
let notaProva2
let notaProva3 
let media 

notaProva1 = Number(prompt("Qual foi a sua nota:"))
notaProva2 = Number(prompt("Qual foi a sua nota:"))
notaProva3 = Number(prompt("Qual foi a sua nota:"))

media = (notaProva1 + notaProva2 + notaProva3) / 3

if (media > 7) {

    alert('Aprovado!')
    
} else if (media < 5) {

    alert('Reprovado!')
    
}

else if (media < 7 && media > 5) {

    alert('Recuperação!')

}
