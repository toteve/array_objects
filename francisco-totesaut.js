// Propiedad intelectual: Esta prueba fue desarrollada por TCIT el año 2014 y registrada bajo propiedad intelectual, cualquier publicación o difamación podría estar sujeta a acciones legales. Hay otras empresas que nos han copiado esta prueba, no aceptes imitaciones, exige el original xD
// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes, tampoco subirla a repositorios de github públicos

// Sección de declaraciones, NO EDITAR

// Responsables de los cuarteles
const paddockManagers = [
  { id: 1, taxNumber: '132254524', name: 'JUAN TAPIA BURGOS'},
  { id: 2, taxNumber: '143618668', name: 'EFRAIN SOTO VERA'},
  { id: 3, taxNumber: '78903228', name: 'CARLOS PEREZ GONZALEZ'},
  { id: 4, taxNumber: '176812737', name: 'ANDRES VIÑALES CIENFUEGOS'},
  { id: 5, taxNumber: '216352696', name: 'OSCAR PEREZ ZUÑIGA'},
  { id: 6, taxNumber: '78684747', name: 'JOAQUIN ANDRADE SANDOVAL' }
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
  { id: 1, name: 'PALTOS' },
  { id: 2, name: 'AVELLANOS' },
  { id: 3, name: 'CEREZAS' },
  { id: 4, name: 'NOGALES' },
]

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [
  { paddockManagerId: 6, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 1200 },
  { paddockManagerId: 1, farmId: 3, paddockTypeId: 4, harvestYear: 2019, area: 500 },
  { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 20000 },
  { paddockManagerId: 2, farmId: 2, paddockTypeId: 3, harvestYear: 2021, area: 8401},
  { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2020, area: 2877 },
  { paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvestYear: 2017, area: 15902 },
  { paddockManagerId: 3, farmId: 3, paddockTypeId: 2, harvestYear: 2018, area: 1736 },
  { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2020, area: 2965 },
  { paddockManagerId: 4, farmId: 3, paddockTypeId: 4, harvestYear: 2018, area: 1651 },
  { paddockManagerId: 5, farmId: 1, paddockTypeId: 1, harvestYear: 2018, area: 700 },
  { paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvestYear: 2019, area: 7956 },
  { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 3745 },
  { paddockManagerId: 6, farmId: 1, paddockTypeId: 3, harvestYear: 2021, area: 11362 },
  { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2021, area: 300 },
  { paddockManagerId: 3, farmId: 2, paddockTypeId: 2, harvestYear: 2020, area: 19188 },
  { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 17137 },
  { paddockManagerId: 4, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 100 },
  { paddockManagerId: 2, farmId: 1, paddockTypeId: 3, harvestYear: 2019, area: 11845 },
  { paddockManagerId: 5, farmId: 2, paddockTypeId: 1, harvestYear: 2018, area: 15969 },
  { paddockManagerId: 1, farmId: 3, paddockTypeId: 1, harvestYear: 2029, area: 10420 },
  { paddockManagerId: 5, farmId: 2, paddockTypeId: 3, harvestYear: 2010, area: 3200 },
  { paddockManagerId: 6, farmId: 1, paddockTypeId: 2, harvestYear: 2012, area: 10587 },
  { paddockManagerId: 2, farmId: 2, paddockTypeId: 2, harvestYear: 2018, area: 16750 }
];

const farms = [
  { id: 1, name: 'AGRICOLA SANTA ANA' },
  { id: 2, name: 'VINA SANTA PAULA' },
  { id: 3, name: 'FORESTAL Y AGRICOLA LO ENCINA' }
];

/*
  SECCIÓN PROBLEMAS
    - No promover la copia:
	  - No preguntar en StackOverflow, foros, o similares ya que estas preguntas/respuestas quedan disponibles a otros candidatos
	  - No subir a repositorios públicos (github, o similares)
	  - Otros sitios como codepen o editores de texto on-line (codepen, repl, o similares), dejan guardado el código, por lo que les pedimos tampoco usar editores on-line, la mejor forma de debuggear su código es usando un intérprete de javascript como node y ejecutarlo de manera local
	  - Para nosotros es fácil detectar pruebas con copia, no pierda su tiempo intentando hacerlo
	  - Posteriormente, se evaluará conocimiento en es6 en entrevistas presenciales
    - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
    - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
    - Debe usar nombres explicativos para sus variables.
    - Usar sintaxis ES6.
    - Los resultados son evaluados con un test automatizado, revise que sus retornos sean con la estructura de datos solicitada en cada pregunta.
	- Métodos menos verbosos, DRY, y buenas prácticas en el código mejoran el puntaje final de su prueba
	- Si necesita hacer supuestos que afecten las respuestas entregadas, por favor déjelos escritos en el cuerpo del correo cuando envíe su prueba (No en este archivo). Supuestos que contradigan lo solicitado, no serán considerados como válidos.
	- Su prueba debe ejecutarse sin errores con: node nombre-apellido.js
  - Su prueba debe ejecutarse sin errores en la consola del inspector de Google Chrome
*/
// Tip: Una hectárea equivale a 10.000m2

// 0 Arreglo con los ids de los responsables de cada cuartel
function listPaddockManagerIds() {
  return paddockManagers.map((paddockManager) => paddockManager.id);
};

// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {

    // creamos nuevo arreglo usando map solo con name y taxnumber, lo ordenamos con sort por name 
    const final = paddockManagers.map((paddockManager) => { return ({ name: paddockManager.name, rut: paddockManager.taxNumber }) })
        .sort((a, b) => {
            let x = a.name;
            let y = b.name;
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        });

    return final


};

// 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
function sortPaddockTypeByTotalArea() {
    // CODE HERE

    final = [];
    let hectareas;
    // recorremos el arreglo de tipo de cultivos
    paddockType.forEach((pt) => {
        hectareas = 0.00;

        // recorremos paddocks, ubicando los que coincidan en id, para acumular area cultivada en m2 convertida a hectareas
        paddocks.forEach((paddock) => { if (paddock.paddockTypeId == pt.id) { hectareas += (paddock.area / 10000) } });

        hectareas = hectareas.toFixed(2);
        // INSERTAR en arreglo el nombre del cultivo y su total de M2 convertidos a hectareas
        final.push({ cultivo: pt.name, totalHectareas: hectareas });
    });

    // ordenar decreciente por cantidad total de areas
    final.sort((a, b) => { return b.totalHectareas - a.totalHectareas });


    return final;

};    


// 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
function sortFarmManagerByAdminArea() {
    // CODE HERE

    final = []
    let hectareas;
    // recorremos el arreglo de responsables o administradores de los cultivos
    paddockManagers.forEach((pm) => {
        hectareas = 0.00;

        // recorremos los paddocks, ubicando los que coincidan en id, para acumular area administrada en m2 convertida a hectareas
        paddocks.forEach((paddock) => { if (paddock.paddockManagerId == pm.id) { hectareas += (paddock.area / 10000) } });

        hectareas = hectareas.toFixed(2);
        // INSERTAR en arreglo el nombre del administrador y  su total de areas administradas
        final.push({ admin: pm.name, totalHectareas: hectareas });
    });

    // ordenar decreciente por cantidad total de area administrada
    final.sort((a, b) => { return b.totalHectareas - a.totalHectareas });


    return final;

};    


// 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
function farmManagerNames() {
  // CODE HERE

  let objetoFinal = {};
  // recorremos el arreglo de los Farms
  for (let farm in farms) {
    // obtenemos el valor id de cada farm
    let clave = farms[farm].id;
    valores = [];
    // recorremos paddocks, ubicando los que coincidan en id Farm
    paddocks.forEach((paddock) => {
      if (paddock.farmId == clave) {
        valores.push({
          rut: paddockManagers[paddock.paddockManagerId - 1].taxNumber,
          nom: paddockManagers[paddock.paddockManagerId - 1].name
        })
      }
    })

    //ORDENAR array de valores por nombre
    valores.sort((a, b) => {
      let x = a.nom;
      let y = b.nom;
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0;
    });


    // depurar duplicaciones
    let set = new Set(valores.map(JSON.stringify))
    let result = Array.from(set).map(JSON.parse);

    // construir objeto final
    objetoFinal[farms[farm].name] = result;

  };
  return objetoFinal;
}

// 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 2 hectáreas en Paltos
function biggestAvocadoFarms() {
    // CODE HERE
    // filtramos con paddockTypeId==1 (Paltos) y area > 20000 m2 que equivale 2 Hectatareas, y ordenamos por area                              
    const final = paddocks.filter((paddock) => (paddock.paddockTypeId == 1 && paddock.area > 20000))
        .sort((a, b) => { return b.area - a.area });;

    // verificar si se cumple la condicion del filter
    if (final.length == 0) {
        console.log("No hay datos que cumplan con las condiciones");
    }

    return final

}


    
    

// 6 Arreglo con nombres de administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
function biggestCherriesManagers() {
    // CODE HERE
    final = [];
    // filtramos donde su farmId==3 (FORESTAL Y AGRÍCOLA LO ENCINA), su paddockTypeId==3 (Cerezas) y area mas de 1000 m2 
    paddocks.forEach((paddock) => {
        if (paddock.farmId == 3 && paddock.paddockTypeId == 3 && paddock.area > 1000) {
            final.push({
                name: paddockManagers[paddock.paddockManagerId - 1].name,
                cultivo: paddockType[paddock.paddockTypeId - 1].name,
                area: paddock.area
            });
        }
    });

    // verificar si se cumple la condicion del filter
    if (final.length > 0) {
        // ordenamos por nombre de administrador
        console.log("Administradores de FORESTAL Y AGRÍCOLA LO ENCINA")
        final.sort((a, b) => {
            let x = a.name;
            let y = b.name;
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        });
    } else {
        console.log("No hay datos que cumplan con las condiciones");
    }

    return final
}

// 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
function farmManagerPaddocks() {
  // CODE HERE
  
  let objetoFinal = {};
  // recorremos el arreglo de los Farms
  for (let pm in paddockManagers) {
    // obtenemos el valor id de cada farm
    let clave = paddockManagers[pm].id;
    valores = [];
    // recorremos los paddocks, ubicando los que coincidan en  paddockManagerId
    paddocks.forEach((paddock) => {
      if (paddock.paddockManagerId == clave) {
        valores.push({ nom: paddockType[paddock.paddockTypeId-1].name })
      }
    })

    //ORDENAR array de valores por nombre
    valores.sort((a, b) => {
      let x = a.nom;
      let y = b.nom;
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0;
    });


    // depurar duplicaciones
    let set = new Set(valores.map(JSON.stringify))
    let result = Array.from(set).map(JSON.parse);

    // construir objeto final
    objetoFinal[paddockManagers[pm].name] = result;

  };

  return objetoFinal

}

// 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
function paddocksManagers() {
  // CODE HERE

  let objetoHijo = {};
  let objetoFinal = {};
  let valores={};
  let claves = [];
  let busca = [];
  
  // recorremos el arreglo de los Farms
  for (let pm in paddocks) {
    // obtenemos el valor id de cada paddock concatenado con su harvestYear
    let valor1 = (paddockType[paddocks[pm].paddockTypeId-1].name);
    let valor2 = (paddocks[pm].harvestYear).toString();

    let clave = valor1+"-"+valor2;
    claves.push(clave)
    /* console.log("Clave concatenada: "+pm+ " ", clave); */

    objetoHijo = {};
    valores = {};
    /* let objetoHijo = {}; */
    
    valores = { nom: paddockManagers[paddocks[pm].paddockManagerId-1].name  }
    /* console.log("Valores c/u: ", valores); */
    
    // depurar duplicaciones
    /* let set = new Set(valores.map(JSON.stringify))
    let result = Array.from(set).map(JSON.parse); */

    // construir objeto final
    /* objetoFinal[paddockManagers[pm].name] = result; */

    objetoHijo[paddockManagers[paddocks[pm].paddockManagerId-1].id] = valores;
    /* console.log("Objeto hijo construido: ", objetoHijo); */

    /* objetoFinal[clave] = objetoHijo[paddockManagers[paddocks[pm].paddockManagerId-1].id]; */
    // ver si clave es unica o fue  generada o es repetida
    busca = claves.filter( (x) => x == clave );

    if (busca.length > 1) {
        clave = clave + "-" + pm.toString();
    } 
    
    objetoFinal[clave] = objetoHijo;
    /* console.log("Objeto final construido: ", objetoFinal); */

  };

  return objetoFinal;


}

// 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador 
// Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
function newManagerRanking() {
  // CODE HERE
}


// No modificar, eliminar o alterar cualquier línea de código o comentario de acá para abajo
// Cualquier cambio hará que su prueba quede invalidada automáticamente
console.log('Pregunta 0');
/* console.log(listPaddockManagerIds()); */
console.log('Pregunta 1');
/* console.log(listPaddockManagersByName()); */
console.log('Pregunta 2');
/* console.log(sortPaddockTypeByTotalArea()); */
console.log('Pregunta 3');
/* console.log(sortFarmManagerByAdminArea()); */
console.log('Pregunta 4');
/* console.log(farmManagerNames());  */
console.log('Pregunta 5');
/* console.log(biggestAvocadoFarms());*/
console.log('Pregunta 6');
/* console.log(biggestCherriesManagers());*/
console.log('Pregunta 7');
/* console.log(farmManagerPaddocks()); */
console.log('Pregunta 8');
console.log(paddocksManagers());
console.log('Pregunta 9');
/* console.log(newManagerRanking());
 */