/*
======    EJERCICIO 1. PARA CONDICIONALES     =======

nuestro amigo Gorge tiene una discoteta, esa discoteca quiere implementar un sistema de ingreso a sus sucursales
solo podran ingresar las personas mayores de edad y si es menor de edad entre 15 y 17 anios debera con el permiso de la mama o el papa 

DATOS DE ENTREGA
1ro  edad ususario si tiene mas de 18 ingresa
2do permiso de los padres

*/
/*
let edad = parseInt(prompt(" Ingrese su edad:"))
let permiso

if (edad >= 15 && edad < 18 ) {
    permiso = prompt("tiene permiso de sus papas")
    if (permiso === "si") {
        alert("puede entrar")
    } else {
        alert("no puede entrar")
    }
} else {
    if (edad >= 18 ) {
        alert("puede entrar")
    }else { 
        alert("no puede entrar ")
    }   
}
*/

/*==================================================================*/

/*
==========  EJERCICIO 2.    ==========

El duenio de una empresa de lacteos que tiene muchas sucursales este registrando el ingreso y perdidas que tiene cada sucursal siempre podra recibir datos positivos o negativos hasta que nuestro usuario coloque el numero 0
contar la cantidad de sucursales que tiene ingresos positivis y cuantas negativos

datos de entrada
5       2       5
10      0       3
32              0
-45
100
0

datos de salida
saliste del programa 
la cantidad de sucursales exitos sa son: 4
la cantidad de sucursales negativas son: 1
*/

let ingresos
let cont1 = 0
let cont2 = 0

do {
    ingresos = parseFloat (prompt("Registro de Ingresos: "))
        if (ingresos > 0 ) {
            cont1++
        }  else {
            cont2++
        }
} while (ingresos !== 0 );

alert(`
SALIO DEL PROGRAMA 
La cantidad de sucursales que ingresos positivos son: ${cont1}
La cantidad de sucursales que ingresos positivos son: ${cont2}`)