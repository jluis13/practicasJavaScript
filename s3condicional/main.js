/* IF*/

/*
function testIf(number){
    if (number ===10){
        console.log("primer condicion");
        console.log("ganaste 10 puntos")
        
    }else if (number === 5){
        console.log("ganaste 5 puntos")
    }else {
        console.log("no ganaste nada")
    }
}

testIf(9)
testIf(6)
testIf(12)

*/

/*switch*/

/*

function testIf (number){

switch (number) {
    case number >10:
        console.log("ganaste 10 puntos");
        break;
    case "5":
        console.log("ganaste 5 puntos");
        break;
    case "3":
        console.log("ganaste 3 puntos");
        break;
    default:
        console.log("no ganaste nada");    
        break;    
}
}

testIf("5");

*/

/*EJERCICIO */
/*
function consejero (animal){
    switch (animal){
        case "perro":
            console.log("se llama milaneso")
            break;
        case "gato":
            console.log("se llama michiflais")
            break;
        case "ave":
            console.log("piolin") 
            break;
        default:
            console.log("especie no reconocida")

    }
}
consejero("gato")
*/

/*EJERCICIO 2*/

function dados (number1, number2){
    if(number1 === 2 && number2 ===2){
        console.log("Haz ganado")
    }else if (number1 === 4 && number2 ===6){
        console.log("Haz ganado")
    }else if (number1 === 1 && number2 === 1){
        console.log("haz ganado")
    }else if (number1 >6){
        console.log("ingresa numeros validos")
    }else if (number2 >6){
        console.log("ingresa numeros validos")
    }else
    console.log("haz perdido")    
}
let= dados(0,7) 
