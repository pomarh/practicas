/*
=======     EJERCICIO 1.     ========
*/


/*

let nota_1 = parseInt(prompt("Ingresar nota-1: "))
let nota_2 = parseInt(prompt("Ingresar nota-2: "))
let nota_3 = parseInt(prompt("Ingresar nota-3: "))
let nota_4 = parseInt(prompt("Ingresar nota-4: "))

let promedio = 0

promedio = (nota_1 + nota_2 + nota_3 + nota_4) / 4

if (promedio >= 90) {
    console.log(`EXELENTE! su Promedio es de: ${promedio} `)
} else if (promedio >= 75){
        console.log(`Bueno su Promedio es de: ${promedio}`)
} else if (promedio >= 60) {
        console.log(`Regular su promedio es de: ${promedio}`)
} else {
    console.log(`Insuficiente su promedio es de : ${promedio}`)
}
*/


/*
=======     EJERCICIO 2.     ========
*/
/*
let edad = parseInt(prompt("Insgrese su edad: "))
let estudiante = prompt("es ud. estudiante (si o no):")
let distancia = parseInt(prompt("Ingrese la distancia (en Kilometros):"))
let descuento = 0

if (estudiante === "si") { 
    if (edad < 18) {
        if (distancia > 30) {
            descuento = 10 * 0.6
            console.log(`
            Es menor de edad: ${edad} 
            estudiante: ${estudiante}
            distancia:  ${distancia} km. 
            pago total: ${descuento}`)
        } else {
            descuento = 10 * 0.5
            console.log(`
            Es menor de edad: ${edad}
            estudiante: ${estudiante} km
            pago total: ${descuento} `)
        }
    }else {
        if (edad >= 18 && edad <= 60) {
            if (distancia > 30) {
                descuento = 10*0.85
                console.log(`
                Es mayor de edad: ${edad} 
                Estudiante: ${estudiante} 
                distancia: ${distancia} km
                pago total: ${descuento} `)
            }else {
                descuento = 10*0.75
                console.log(`
                Es mayor de edad: ${edad} 
                Estudiante: ${estudiante} 
                distancia: ${distancia} km
                pago total: ${descuento} `)
            }   
        }  
    }
} else {
    if (edad >= 18 && edad <= 60) {
        if (distancia > 30) {
            let adicional = 1 
            descuento = 10 + adicional
            console.log(`
            Es mayor de edad: ${edad} 
            Estudiante: ${estudiante} 
            distancia: ${distancia} km
            pago total: ${descuento} `)
        }else {
            descuento = 10 
            console.log(`
            Es mayor de edad: ${edad} 
            Estudiante: ${estudiante} 
            distancia: ${distancia} km
            pago total: ${descuento} `)
        }
        
    } else {
        if (distancia > 30) {
            descuento = 10*0.5
            console.log(`
            Es mayor de edad ${edad} 
            Estudiante: ${estudiante}
            distancia: ${distancia} km 
            pago total: ${descuento} `)
        } else {
            descuento = 10*0.4
            console.log(`
            Es mayor de edad ${edad} 
            Estudiante: ${estudiante} 
            distancia: ${distancia} km 
            pago total: ${descuento} `)
        }
    }  
}
*/

/*
=======     EJERCICIO 3.     ========
*/

/*
let opcion = parseInt(prompt(`Elija una opcion:

1. Convertir de Celsius a Fahrenheit
2. Convertir de Fahrenheit a Celsius
3. Convertir de Metros a Kilometros
4. Convertir de Kilometros a metros`))

let Celsius
let Fahrenheit
let metros
let Kilometros
let resultado

switch (opcion) {
    case 1:
        Celsius =  prompt("Ingreses los grado Celsius:")
        resultado = (Celsius * (9/5)) + 32
        alert("los grado a Fahrenheit son: " + resultado + " Fahrenheit1")
        break;
    case 2:
        Fahrenheit =  prompt("Ingreses los grado Fahrenheit:")
        resultado = (Fahrenheit - 32) * 5/9
        alert("los grado a Celsius son: " + resultado + " Celsius")
        break;
    case 3:
        metros =  prompt("Ingreses los metros:")
        resultado = metros / 1000
        alert("los grado a Celsius son: " + resultado + " Kilometros")
        break;
    case 4:
        Kilometros =  prompt("Ingreses los kilometros:")
        resultado = Kilometros * 1000
        alert("los grado a Celsius son: " + resultado + " metros")
        break;

    default:
        alert("No es una opcion")
        break;
}
*/


/*
=======     EJERCICIO 4.     ========
*/

/*
let precioTotal = parseFloat(prompt(`Ingrese el PRECIO TOTAL de su compra:`))

let targeta = prompt("Tiene tarjeta?: ")
let totalDeCompra 

if (precioTotal > 500) {
    if (targeta === "si") {
        totalDeCompra = precioTotal * 0.85
        alert(`
        total a pagar: ${totalDeCompra} 
        tiene el descueto de 10% porque supero los 500
        y tiene el descuento de 5% mas porque tiene tarjeta`)
    }else {
        totalDeCompra = precioTotal * 0.9
        alert(`
        total a pagar: ${totalDeCompra} 
        tiene el descueto de 10% porque supero los 500`)
    }
} else {
    if (targeta === "si") {
        totalDeCompra = precioTotal * 0.95
        alert(`
        total a pagar: ${totalDeCompra} 
        tiene el descuento de 5% porque tiene tarjeta`)
    } else{
        alert(`
        total a pagar: ${precioTotal} 
        no tiene ningun descuento`)
    }
}
*/

/*
=======     EJERCICIO 5.     ========
*/

let nacimiento = parseInt(prompt("Ingrese su año de nacimiento:"))
let añoactual = parseInt(prompt("Ingrese el año actual"))
let cumplioAños = prompt("ya cumplio años este año: ")
let edadActual

edadActual = añoactual - nacimiento

if (cumplioAños === "no" ) {
    if ( edadActual < 18) {
        edadActual = edadActual - 1
        alert( `
        su edad es: ${edadActual}
        es menor de edad`)
    } else {
        if (edadActual >= 18 && edadActual <= 30) {
            edadActual = edadActual - 1
            alert( `
            su edad es: ${edadActual}
            Adulto joven`)
        }else{
            if (edadActual >= 31 && edadActual <= 59) {
                edadActual = edadActual - 1
                alert( `
                su edad es: ${edadActual}
                Adulto `)
            }else {
                edadActual = edadActual - 1
                alert( `
                su edad es: ${edadActual}
                Adulto `)
            }
        }
    }
} else{
    if ( edadActual < 18) {
        alert( `
        su edad es: ${edadActual}
        es menor de edad`)
    } else {
        if (edadActual >= 18 && edadActual <= 30) {
            alert( `
            su edad es: ${edadActual}
            Adulto joven`)
        }else{
            if (edadActual >= 31 && edadActual <= 59) {
                alert( `
                su edad es: ${edadActual}
                Adulto `)
            }else {
                alert( `
                su edad es: ${edadActual}
                Adulto `)
            }
        }
    }
}
