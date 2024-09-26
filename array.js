const valores = [7.7,10,12,4];
console.log(valores[0],valores[3])

console.log(valores[4]) 
/*Estou Chamando uma Indice que nao existe dentro da array
o JavaScript Apenas Definira que o Index 4 é UndeFined*/

/*Caso eu queria Atribuir um Valor dentro da Indice [4], 
Faça esse seguinte Codigo */

valores[4] = 10
console.log(valores[0],valores[4])

console.log(valores)

// Apagando um elemento de dentro da array

delete valores[0] 
console.log(valores)

console.log( typeof valores)