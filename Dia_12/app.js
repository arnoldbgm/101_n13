/*
   ¿Cuando debo de usar un propmt?
Un propmt se debe de utilizar cuando se solicita informacional cliente
Ejm:
   * Solicitar un nombre
   * Solicitar que escriba su edad
   * Solicitar que me indique que opcion desesa usar
*/

// let nombreUsuario = prompt("Cual es tu nombre")

/*
   ¿Cuando usar un alert?
El alert es una alerta grafica, la cual contiene informacion, se usa por lo usual para alertar al usuario o para mostrar variables
Ejm:
   * Mostrar el nombre ingresado
   * Mostrar la edad ingresada
   * Mostrar una variable
*/

// alert("El usuario ingreso exitosamente")

/*
   Condicionales - Estructuras de control
Las condicionales son estructuras que me permiten decidir como sera el flujo de mi aplicativo
*/

// if(edadUsuario >= 18){
//    // Esto solo se ejecuta cuando sea V
//    //Es el codigo que se va a ejecutar
//    alert("Usted puede pasar es mayor de edad")
// } else {
//    // Esto se ejecuta cuando la condicion es F
//    alert("Usted es menor de edad, RETIRESE")
// }

//  Adultes 18 a +
//  Adolescencia 12 a 17
//  Niños de 0 a 11

// Para crear el numero al azar entre 1 y 10
let numeroAlzar = (Math.floor(Math.random() * 10) + 1)
console.log(numeroAlzar)

let numeroCliente = Number(prompt("Introduce el numero al azar"))
let intentos = 1

while (intentos <= 3) {
   if (numeroCliente === numeroAlzar) {
      alert("Ganaste")
      break
   } else {
      alert("Perdiste")
   }
   // Si el numero esta a +- 3 numeros de distancia esta cerca
   // Si el numero esta a +- 4 numeros de distancia esta lejos

   if(numeroCliente - numeroAlzar <= 3 && numeroCliente >= -3){
      alert("Estas cerca 🔥")
   } else{
      alert("Estas lejos")
   }

   // En ningun momento del bucle le digo que se vuelva a mostrar un propmt
   numeroCliente = Number(prompt("Vuelve a colocar otro numero"))

   intentos = intentos + 1
}


