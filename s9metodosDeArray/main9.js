/* forEach */

//ejemplo: escribir en consola la primer letra del nombre de cada uno de los koders 

let Koders = ["Angy", "Anahi", "Alejandro", "Dante"]

/* const printInitials = (arrayToiterate) => {
    for (let i = 0; i < arrayToiterate.length; i++) {
        let initial = arrayToiterate[i].charAt(0);
        console.log(initial);
    }
};

*/

const printInitials = (kodersArray) => {
    kodersArray.forEach((koder, index, array) => console.log(koder.charAt(0)));
};

printInitials(Koders);