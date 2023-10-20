function createWords (text){
    let charCount = text.lenght;
    let oddWord =""; //para los nones
    let evenWord=""; //para los pares

    for (let i = 0; i <= charCount; i++){
        //str.charAt(5)

        let currentChar = text.charAt(i);

        i % 2 !== 0 ? (oddWord += currentChar) : (evenWord += currentChar);

    }
    console.log("con nones", oddWord);
    console.log("con pares", evenWord);

}

createWords("gato");

/*EJERCICIO:
- Crear una función que reciba un texto, y un número, si el número excede la cantidad de caracteres del texto, devolver un mensaje de error
  si el número no excede la cantidad de caracteres, devolver un string que contenga los caracteres desde 0 hasta el número indicado
  Israel, 3
  -> Isra

  - Teniendo el texto: "La mejor forma de predecir el futuro es creándolo"
    crear una función que me devuelva la cantidad de palabras cuya longitud sea par, y la cantidad de palabras cuya longitud sea non.
    
    -pares: 6
    -nones: 3

  .split
  */
 /*
 function texto (texto, numero){
    if (numero > texto.lenght){
        return "Texto muy largo"

    }else {
        return texto >= 4 ? ""
    }
 }
*/

/* substring  ejemplo 1:*/

/*
function getSubstring(txt, finalIndex){
    let result =  txt.substring(0, finalIndex);
    return result;

}

let substringTest = getSubstring("Tezcaltitlipca", 4)
console.log(substringTest);

*/

/* ejemplo 2: */

function getSubstring(txt, finalIndex){
    let result = 
       txt.length > finalIndex
         ? txt.substring(0, finalIndex)
          : "El texto es mas pequeño que el numero indicado";
    return result;
}

let substringTest = getSubstring("Tezcaltlipoca", 50);
console.log(substringTest);

 