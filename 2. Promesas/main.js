/*
2. Promesas y manejo de asincronía:
Escribe una función “obtenerDatos” que simule la obtención de datos desde una API utilizando “Promise”. La función debe retornar los datos proporcionados después de 2 segundos.
obtenerDatos().then((data) => console.log(data));
// Resultado esperado: "Datos obtenidos"

*/ 

function obtenerDatos (){
 
 return new Promise ((resolve) => {
  setTimeout(() => {
    resolve("Datos Obtenidos")
  }, 3000);
 });
}

obtenerDatos().then((data) => {
console.log(data)
});


