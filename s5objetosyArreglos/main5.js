
/* objeto*/
/*
let perro = {
    nombre: "milaneso",
    color: "negro",
    edad: 10,
    raza: "callerman",
    ladrar: function () {
        console.log("guau")
    },

};

*/

//decosntruccion

/*let { nombre, color, raza, fechaNacimiento, rascar } = perro;
console.log(nombre, color, raza);*/

//notacion del punto
/*
let nombreDelPerro = perro.nombre;
let colorDelPerro = perro.color;
let razaDelPerro = perro.raza;
*/

/*EJERCICIO
1. SE REQUIERE GENERAR LAS INICIALES DE UNA PERSONA USANDO SU NOMBRE COMPLETO.
-> Israel Salinas Martinez
<- I. S. M.

2. Teniendo en cuenta el siguiente text: "Si esperas a estar listo, esperaras toda la vidad"
Queremos obtener una nueva frase que contenga solo palabras en posicion non
-> "Esperas estar esperaras la"

3. Se requiere solicitar el nombre, edad y correo de una persona, y crear una lista de personas
*/


/*ejercicio 3: */

/*
let people = []

function createPerson( name, age, email){
    let person = {};
    person.name = name;
    person.age =age;
    person.email = email;
    console.log(person);
    people.push(person);
    console.log(people);
}

createPerson("anais Laguna", 20, "al@gmail.com");
createPerson("Oswaldo Herrera", 35, "oh@gmail.com");

*/

/*ejercicio 2:
forma 1*/

function createNewPhrase(phrase){
    let wordsArray = phrase.split(" ");
    let newPhrase = " ";
    let limit = wordsArray.length;
    for (let i = 0; i< limit; i++) {
        if (i % 2!==0){
            newPhrase += wordsArray[i] + " ";
        }
    }
    return newPhrase;
}
let result = createNewPhrase(
    "Si esperas a estar listo, te quedaras toda la vida esperando"

);

console.log(result);

/*forma 2:*/


function createNewPhrase2(phrase) {
    let result = phrase.split(" ").reduce(function (accum, current, index){
        return index % 2 !== 0 ? accum + current + " " : accum;

    }, "");
    return result
}
 
console.log(result);
