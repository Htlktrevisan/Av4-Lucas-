/*Em um jogo o seu personagem tem 100 de HP (vida). Criar um programa onde o usuário digite o valor de um dano (ataque sofrido pelo personagem). Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over". Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar de 21 a 50, mostrar "Dano moderado, vida estável" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!". */

//Variaveis
let hp = 100
let dano
let resultado

alert("Programa feito para usuario digitar o valor do dano que o personagem ira receber")

dano = prompt("Digite o dano que o personagem ira receber")

resultado = hp - dano

if (resultado > 51) {

    alert('Dano leve, vida boa!')
    
} else if (resultado >= 21 && resultado <= 50) {

    alert('Dano moderado, vida estável')
    
} else if (resultado >= 1 && resultado <= 20) {

    alert('Dano crítico, quase sem vida')

} else if (resultado <= 0) {

    alert('Game Over') 

}