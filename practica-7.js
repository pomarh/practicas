/*  ########    EJERCICIO 1.    ####### */

/*
let area = 0
let base = 0
let height = 0

function calculateAreaTriangle (baseTriangle,heightTriangle) {
    for (let i = 0; i < 3; i++) {
        baseTriangle = parseFloat(prompt("Get into base:"))
        heightTriangle = parseFloat(prompt("get into height:"))
        if (baseTriangle > 0 && heightTriangle > 0)  {
            area = (baseTriangle * heightTriangle) / 2
            console.log(`the area Triangle ${i+1} is: ${area}`)
        } else {
            alert("get into a number greater than 0 ")
            i--
        } 
    }
    
}

calculateAreaTriangle(base, height);
*/


/*  ########    EJERCICIO 2.    ####### */
/*
let celsius = 0
let fahrenheit = 0

function convertToFahrenheit(celsiusConvert) {
    for (let i = 0; i < 5; i++) {
        celsiusConvert = parseFloat(prompt("get into the degrees celsius:"))
        if (!isNaN(celsiusConvert)) {
            fahrenheit =  celsiusConvert * (9/5) + 32
            console.log(`convert ${i+1}: ${celsiusConvert} celsius -  to ${fahrenheit} Fahreheit `)
        } else {
            alert("get into a number not a letter")
            i--
        } 
    }  
}

convertToFahrenheit(celsius)
*/

/*  ########    EJERCICIO 3.    ####### */
/*
let vocal 
let resVocal = 0
let count = 0

function counterVocals(vocalText) {
    for (let i = 0; i < 3; i++) {
        vocalText = prompt("write a text:")
        if (vocalText !== " " && /^[a-zA-Z]+$/.test(vocalText)) {
            for (const counttext of vocalText) {
                count++   
            }
            console.log(`the text ${i+1}: ${vocalText} = ${count} letters `)
            count = 0
        } else {
            alert("get into a text not a number or space")
            i--
        }
    }  
}

counterVocals(vocal)
*/

/*  ########    EJERCICIO 4.    ####### */
/*
let start = 0
let end = 0
let pair = 0
let odd = 0


function classifyPairOdd(startNum, endNum) {
    startNum = parseInt(prompt("Get into a number of start:"))
    endNum = parseInt(prompt("Get into a number of end:"))
    if (startNum < endNum) {
        for (let i = startNum ; i <= endNum ; i++) {
            if ((i % 2) === 0) {
                pair++    
            } else {
                odd++   
            }
        }
        console.log(`there are pairs: ${pair}`)
        console.log(`there are odd: ${odd}`)
    } else {
        alert("Get into a number start minor to end")
    }
}
classifyPairOdd(start, end)
*/

/*  ########    EJERCICIO 5.    ####### */


let sum = 0
let aux = 0

function greaterAndSum() {
    for (let i = 0; i < 5; i++) {
        let number = parseInt(prompt("get into a number:"))
        sum += number
        if (number > aux) {
            aux = number
        }
    }
    console.log(`the sum total number is: ${sum}`)
    console.log(`the number greater is: ${aux}`)
}

greaterAndSum()