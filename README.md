# Prueba Técnica para el Cargo de Desarrollador Web Junior
## Parte 1: Fundamentos de JavaScript
   **Manipulación de Arrays:**
   - Se crea una función que reciba un array de números y procese los valores:
   - Los números pares deben multiplicarse por 2
   - Los números impares deben multiplicarse por 3
   - se utiliza el metodo map() para iterar sobre cada elemento del array, multiplicarlo y devolver un nuevo array con el producto de la multiplicacion .
   - Se utiliza el operador módulo (%) para determinar si un número es par o impar.
     num % 2 === 0: Verifica si el número es divisible entre 2 (par),si no se considera impar.
     
   **Promesas y manejo de asincronía:**
   - Se define una función **obtenerDatos** que retorna una nueva promesa, dentro de la promesa, se pasa una función con un parámetro llamado **resolve** que se utiliza para indicar que la promesa ha sido cumplida y para devolver el resultado.
   
   -La función **setTimeout** se utiliza para esperar un tiempo antes de ejecutar una acción, en este caso, después de 3 segundos se llama a resolve con el mensaje "Datos Obtenidos"
   
   - El método .then() se usa para manejar el resultado cuando la promesa se cumple.
   
   
   **Clases en JavaScript:**
   - Se crea una clase llamada **Persona** que sirve como plantilla para crear objetos con las propiedades **name** y **edad**.
    con un constructor que recibe los parámetros name (nombre) y edad, y los asigna a las propiedades del objeto usando this.name y this.edad.
   - El método saludar imprime un mensaje en consola con el nombre y la edad del objeto creado.

##-------------------------------------------------------------------------------------------------------------------------------------------
# PARTE 2: Ejercicio práctico con React.js y librerías
# Funcionalidades Principales

## Formulario:
- **Campos**:
  - Nombre
  - Correo electrónico
  - Mensaje

- **Validación de campos** con **Formik** (sin configuración avanzada).
- **Envío del formulario** mediante **Axios** (simula una petición a una API).
- Los **datos enviados** se almacenan en **Redux**.

## Lista de Formularios:
- Al enviar un formulario, los datos se guardan en el estado global de Redux.
- La **lista de formularios enviados** se muestra en una nueva página, recuperando los datos directamente del store de Redux.

## Navegación:
- El formulario permite navegar a la página de lista de formularios con un botón que redirige a `/lista`.

# Pasos Claves para la Solución

## Configuración del Proyecto:
- Se crea el proyecto utilizando **Vite** o **Create React App**.
- Se configura **Redux** para gestionar el estado global.

## Creación del Formulario:
- Se utiliza **Formik** para gestionar el formulario y validar los datos de entrada.
- Se usan **TextField** de **Material UI** para crear los campos del formulario.

## Manejo de Datos con Redux:
- Se crea un **slice en Redux** para almacenar los formularios enviados.
- Se utiliza **dispatch** para guardar los datos en el estado global después de enviar el formulario.

## Simulación de Petición con Axios:
- Se simula el envío de los datos a una API utilizando **Axios**.

## Visualización de la Lista de Formularios:
- Se crea un **componente** para mostrar los formularios enviados desde el store de Redux.

## Navegación entre Páginas:
- Se utiliza **React Router DOM** para navegar entre las páginas del formulario y la lista de formularios.

# Tecnologías Utilizadas

- **React.js**
- **Formik**
- **Redux**
- **Axios**
- **Material UI**
- **React Router DOM**

## PARTE 3
¿Si tuvieras que optimizar tu solución para manejar un volumen masivo de formularios enviados, ¿qué cambios implementarías?

R// Optimización para manejar un volumen masivo de formularios enviados
1. **Base de Datos Escalable**: Utilizar una base de datos como MongoDB o PostgreSQL en lugar de almacenar los datos en el estado global para manejar grandes volúmenes de datos.
2. **Paginación**: Implementar paginación en el frontend y backend para cargar solo los datos necesarios.