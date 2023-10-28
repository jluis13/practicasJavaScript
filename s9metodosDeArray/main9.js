/* forEach */

//ejemplo: escribir en consola la primer letra del nombre de cada uno de los koders 

/* const printInitials = (arrayToiterate) => {
    for (let i = 0; i < arrayToiterate.length; i++) {
        let initial = arrayToiterate[i].charAt(0);
        console.log(initial);
    }
};

*/
/*
let Koders = ["Angy", "Anahi", "Alejandro", "Dante"]

const printInitials = (kodersArray) => {
    kodersArray.forEach((koder, index, array) => console.log(koder.charAt(0)));
};

printInitials(Koders);

*/

/*TAREA: */

let koders = [
 {

    name : "Karla Ameyali",
    lastname : "Hernandez Lorenzo",
 },
 {

    name : "Angela Donaji",
    lastname :"Garcia Garcia",
 },
 {

    name : "Armando",
    lastname :"García Miranda",
 },	
]
 /*
const getInitials2 = (kodersArray) => {
    let koderInitials = [];
    kodersArray.forEach((koder) => {
      //console.log(koder);
      let { name, lastname } = koder;
      //console.log(name);
      let nameArray = name.split(" ");
      //console.log(nameArray);
      let nameInitials = "";
      let lastnameInitials = "";
      nameArray.forEach((word) => {
        console.log(word);
        let initial = word.charAt(0);
        console.log(initial);
        nameInitials += `${initial}. `;
      });
  
      let lastnameArray = lastname.split(" ");
      lastnameArray.forEach((word) => {
        let initial = word.charAt(0);
        console.log(initial);
        lastnameInitials += `${initial}. `;
      });
      console.log(nameInitials);
      console.log(lastnameInitials);
      koderInitials.push(`${nameInitials} ${lastnameInitials}`);
    });
    console.log(koderInitials);
  };
  
  console.log(getInitials2(otherArray)); */