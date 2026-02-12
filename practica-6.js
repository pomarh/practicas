let user = "Funval"
let password = "Progra123"
let tries = 3
let balance = 1000

do {
    let userGuest = prompt(" Ingrese su usuario: ")
    let passwordGuest = prompt(" Ingrese su contraseña: ")
    if (userGuest === user && passwordGuest === password) {
        let continueMenu = true
        do {
            let menuOption = prompt(`
                Seleccione una opción:
                1- Retiro
                2- Deposito
                3- Ver Saldo
                4- Salir
                `)
            switch (menuOption) {
                case "1":
                    let withdrawal = parseFloat(prompt("Ingrese el monto a retirar:"))
                    if (withdrawal < balance) {
                        balance = balance - withdrawal
                    } else {
                        alert("No tienes Saldo suficiente para esta operación")
                    }
                    break;
                case "2":
                    let deposit = parseFloat(prompt("Ingrese el monto a depositar:"))
                    balance = balance + deposit
                    break;
                case "3":
                    alert("Tu saldo es: " + balance)
                    break;
                case "4":
                    alert("Gracias por usar nuestro servicio")
                    continueMenu = false
                    break;
            
                default:
                    alert("Ingrese una opcion valida")
                    break;
            }

        } while (continueMenu);
        break;
    } else {
        alert("Datos incorrectos, intente nuevamente")
        tries--
    }
    
} while (tries > 0);
if (tries===0) {
    alert("Exedió el número de intentos permitidos. Comuniquese con su banco")
}