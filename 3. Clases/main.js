/*Crea una clase “Persona” con:
- Propiedades: “nombre” y “edad”.
- Un método “saludar” que imprima en consola “Hola, soy {nombre} y tengo {edad} años.” */ 

class Persona {

constructor (name, edad){
this.name = name;
this.edad = edad;
}

saludar(){
console.log(`Hola, soy ${this.name} y tengo ${this.edad} años`)
}
}

const persona = new Persona ("Emanuel", 20)
persona.saludar();