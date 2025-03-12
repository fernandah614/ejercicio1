let arregloObject = [
    { nombre: "pedrito", edad: 20 },
    { nombre: "juanito", edad: 10 },
    { nombre: "sebastian", edad: 5 }
];

for (let k = 0; k < 2; k++) {
    console.log(arregloObject[k].edad);
}

arregloObject.forEach((element, index, array) => {
    console.log(element.edad);
});
let resultados = arregloObject.map((element,index, array) => {
     if (element.nombre=="pedrito"){
        return element
    } 
});

console.log(resultados);
