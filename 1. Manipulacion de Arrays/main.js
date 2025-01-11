/*
1. Manipulación de Arrays:
Escribe una función llamada “procesarArray” que reciba un array de números y devuelva un nuevo array que contenga:
- Los números pares multiplicados por 2.
- Los números impares multiplicados por 3.
Ejemplo:
procesarArray([1, 2, 3, 4]); // Resultado: [3, 4, 9, 8]

*/

function procesarArray(array){
return array.map(numero => (numero % 2 === 0 ? numero * 2 : numero * 3));
}

console.log(procesarArray([1, 2, 3, 4]));
