/*funcion convencional*/

/*
function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}

*/

/*funcion flecha*/

/*

const addTwoNumbers =(number1, number2) => number1 + number2

console.log(addTwoNumbers(4, 8));

*/

//Quiero una funcion que tome un string, lo revierta, y despues extraiga un substring con los 3 primeros caracteres, y los convierta a mausculas//

/*

const stringTransform = (txt) =>
  txt.split("").reverse().join("").substring(0, 3).toUpperCase();
  console.log(stringTransform("Jorge"));

  */

  /*EJERCICIO convertir los siguientes codigos a flecha:
  function getTriangleArea(base, height) {

  let area = (base * height) / 2;

  return area;

} 

function checkIfIsEven(number) {

  let result = number % 2 === 0;

  return result;

}

function getRandomKoder(kodersArray) {

  let number = Math.floor(Math.random() * kodersArray.length);

  let koder = kodersArray[number];

  return koder;

}

*/
/*

const getTriangleArea = (base, height) => 
  (base*height)/2;
   
console.log(getTriangleArea(5, 2))

const checkIfIsEven = (number) =>
 number%2 === 0;

console.log(checkIfIsEven(5))

const getRandomKoder = (kodersArray) =>{
 let randomNumber = Math.floor(Math.random()*kodersArray.length);
 let koder = kodersArray[randomNumber];
 return koder;

}
 
*/

setTimeout(function() {
    console.log("hola");
   
} ,5000);

console.log("koders")