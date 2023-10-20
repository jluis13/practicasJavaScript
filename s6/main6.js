/*Ejercicio*/

let koders = [
    {
      name: "Said Barrera",
      generation: 12,
      score: 9.2,
    },
    {
      name: "Helena Fuentes",
      generation: 8,
      score: 8.7,
    },
    {
      name: "Gerardo Cabrera",
      generation: 12,
      score: 9.9,
    },
    {
      name: "Brenda Guerrero",
      generation: 8,
      score: 8.4,
    },
    {
      name: "Alejandro Fuentes",
      generation: 7,
      score: 8.6,
    },
    {
      name: "Sandra Tellez",
      generation: 9,
      score: 9.9,
    },
  ];
  
  /*
  1.- Entregar el promedio general del score de los koders
  2.- Obtener una nueva lista que contenga únicamente aquellos koders cuyo score sea mayor que 9
  3.- Saber cuantos koders hay de alguna generación específica:
        1 -> no hay koders de esta generación
        9 -> hay 1 koder de la generación 9
        12 -> hay 2 koders de la generación 12
  */


        function contarKodersPorGeneracion(koders, generacion) {

            const kodersDeGeneracion = koders.filter(koder => koder.generation === generacion);
        
            return kodersDeGeneracion.length;
        
          }       
          
        
          const generacion1 = contarKodersPorGeneracion(koders, 1);
        
          const generacion9 = contarKodersPorGeneracion(koders, 9);
        
          const generacion12 = contarKodersPorGeneracion(koders, 12);
        
          
        
          console.log("Generación 1:", generacion1, "koders");
        
          console.log("Generación 9:", generacion9, "koders");
        
          console.log("Generación 12:", generacion12, "koders");