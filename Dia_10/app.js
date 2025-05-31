/*
   🚀 Reto 03 - Repasar los operadores logicos && ( y )

   Para capturar la edad, deben de usar un propmt

   Estamos en una fiesta, y solo se permite el ingreso de personas entre los 18 hasta 50 años

    edad >= 18
    edad <= 50

   Se mostrara mediante un alert:
   * Bienvenido a la fiesta
   * Lo sentimos, por esta ocasion
5
    🔴 Tip: No olvidar castear los numeros a Number
*/

// let edad = Number(prompt("¿Cual es tu edad?"))

// if(edad >= 18 && edad <= 50){
//    alert("Bienvenido a la fiesta")
// }else{
//    alert("Lo sentimos, por esta ocasion")
// }

/*
   🌟 Funciones

   Usamos la palabra =>  function NOMBRE ( parametros) {}
*/

// Funcion sin parametros
function saludar() {
   // Aqui va tu codigo a ejecutarse
   alert("Hola desde la funcion saludar")
}

// saludar() // Esto es la ejecucion

// Funcion con parametros
// Parametros => Son los valores que nosotros pasamos a la funcion

function areaRectangulo(base, altura) {
   let area = base * altura
   alert(`El area del rectangulo es ${area}`)
}

// areaRectangulo(50, 8) // Ejecutar la funcion

/*
 Crear una funcion que me indique si un numero es positivo o negativo
*/

function esPositONegativo(numero) {
   // Viene toda la logica
   if (numero > 0) {
      alert("Positivo")
   } else {
      alert("Negativo")
   }
}

esPositONegativo(-50)
