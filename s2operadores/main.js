
/* SUMA */
function plusTwoNumbers (firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    return result;

}

let suma1 = plusTwoNumbers(11, 5);

console.log(suma1);

/* RESTA*/
function restTwoNumbers (Number1, Number2) {
    let result = Number1 - Number2;
    return result;

}

let resta1 = restTwoNumbers(10, 5);

console.log(resta1);

/*multiplicacion*/
function multTwoNumbers (Number1, Number2) {
    let result = Number1 * Number2;
    return result;

}

let multiplicacion1 = multTwoNumbers(10, 5);

console.log(multiplicacion1);

/*division*/
function divTwoNumbers (Number1, Number2) {
    let result = Number1 / Number2;
    return result;

}

let division1 = divTwoNumbers(10, 5);

console.log(division1);

/*modular*/
function modTwoNumbers (Number1, Number2) {
    let result = Number1 % Number2;
    return result;

}

let modul1 = divTwoNumbers(10, 3);

console.log(modul1);

/*bigger*/

function whoIsBigger(firstNumber, secondNumber){
    if(firstNumber > secondNumber ){
    return `${firstNumber} es el mayor`

    } else if (firstNumber < secondNumber){
        return `${secondNumber} es el mayor`
    }else {
        return `los numeros son iguales`
    }
}

