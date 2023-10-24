/* .indexOf --> devuelve el valos de la posicion */

/*
const str = "Programando con Grover"

const result = str.indexOf("con");

  console.log(result);
  */

  /* .includes --> devuelve un falso o verdadero si la palabra se encuentra  */
/*
const str = "Programando con Grover"

let result = str.indexOf("con");
result = str.includes("con")

  console.log(result);
   
  */

  /* .slice ---> devuelve las letras que se buscan */

  /*

let str = "Programando con Grover"

  
result = str.slice(1, 4);
  
console.log(result);
*/

/* .substring ---> obtine un conjunto de caracteres desde un indice en especifico  */
/*

let str = "Programando con Grover"
  
result = str.substring(4, 2);
  
console.log(result);
*/

/* .substr ---> la longitud de cuantos caracteres se quieren obtener  */

/*

let str = "Programando con Grover"
  
result = str.substr(5, 4);
  
console.log(result);
*/

/* .charAt ---> se obtiene una letra dependiendo del indice  */

/*

let str = "Programando con Grover"
  
result = str.charAt(16);
  
console.log(result);
*/

/* .repeat ---> repite las veces los caracteres que se indican    */

/*
let str = "Programando con Grover"
  
result = str.repeat(16);
  
console.log(result);

*/

/* .split --->  dividir el conjunto de caracteres  */
/*

let str = "Programando con Grover"
  
result = str.split(" ");
  
console.log(result);
*/

/* .startsWith ---> con que caracter esta empezando    */

/*

let str = "Programando con Grover"
  
result = str.startsWith("Pro");
  
console.log(result);
*/

/* .endsWith ---> con que caracter finaliza  */
/*

let str = "Programando con Grover"
  
result = str.endsWith("over");
  
console.log(result);

*/

/* .search ---> para buscar  */
/*

let str = "Programando con Grover"
  
result = str.search("over");
  
console.log(result);
*/

/* .toLowercase ---> convierte todo en minusculas  */

/*

let str = "Programando con Grover"
  
result = str.toLocaleLowerCase();
  
console.log(result);

*/


/* .toUpperCase ---> convierte todo en mayusculas  */

/*

let str = "Programando con Grover"
  
result = str.toUpperCase();
  
console.log(result);

*/

/* .replace --->  reemplaza otro caracter */

/*
let str = "Programando con Grover"
  
result = str.replace("Programando", "Programmer");
  
console.log(result);

*/


/* .trim --->  elimina espacios al principio y al final de un string */

/*

let str2 = " Programando con Grover "
  
result = str2.trim();
  
console.log(result);

*/

/*
 Math.random() --->  elije un valor aleatorio
   Math.floor() -----> convierte el valor de punto flotante a entero
   
   Podemos elegir un valor de un array dada usando su índice en JavaScript. 
   Para elegir un valor aleatorio de un array dada, necesitamos generar un índice aleatorio en el rango de 0 a la longitud del array. 
   Podemos generar un valor aleatorio usando la función Math.random() y para establecer el rango de este valor aleatorio, 
   tenemos que multiplicarlo por la longitud del array que podemos obtener usando la función length.

El valor aleatorio generado por la función Math.random() es un valor de punto flotante. Para convertir el valor de punto flotante a entero, 
tenemos que usar la función Math.floor(). La función Math.floor() convierte un número de punto flotante en un entero 
que será menor que el número dado. Por ejemplo, creemos un array de cinco valores, escojamos un valor aleatorio y lo mostraremos en la consola. 
Vea el código a continuación.
*/
/*

var myArray = ['one', 'two', 'three', 'four', 'five'];
var rand = Math.floor(Math.random()*myArray.length);
var rValue = myArray[rand];
console.log(rValue)
*/

