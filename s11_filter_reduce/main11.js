/* filter */
/*
let koders = [
    "angy",
    "anahi",
    "alejandro",
    "dante"
]

const getEvenNames = (kodersArray) => {
    let result = kodersArray.filter((koder) => koder.length % 2 ===0);
    return result;

};

let evenNames = getEvenNames(koders);
console.log(evenNames);

*/

/* reduce */

let numbers = [
    2,
    7,
    3,
    6
]

const getTotalSum = (numbersArray) => {
    let result = numbersArray.reduce(
    (accum, current) => {
        return accum + current;
    }, 0);
    return result;
};
let total = getTotalSum(numbers);
console.log(total)


