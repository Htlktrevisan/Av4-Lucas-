/*Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se ele recebe de acordo com o piso (maior ou igual o piso da categoria) ou se recebe abaixo do piso. (DESAFIO: Incluir uma terceira condição para caso receba exatamente igual ao piso) */

let salarioAnual
let pisoSalarialMensal
let salarioDefinitivo

salarioAnual = Number(prompt('Qual foi o seu salário anual'))
pisoSalarialMensal = Number(prompt('Qual foi o seu piso salarial mensal'))

salarioDefinitivo = salarioAnual/12

if (salarioDefinitivo > pisoSalarialMensal) {
    
    alert('Recebera de acordo com o piso.')

} else if(salarioDefinitivo < pisoSalarialMensal) {

    alert('Recebera abaixo do piso.')

} else {

    alert('Você vai receber exatamente igual ao piso')

}