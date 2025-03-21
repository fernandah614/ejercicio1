//Define una función que reciba un objeto con propiedades base y altura y retorne el área
//del triángulo, utilizando desestructuración en los parámetros
type Triangulo={
    base:number;
    altura:number;
}
function areaTriangulo({base,altura}:Triangulo):number{
    return (base * altura)/2;
}

const triangulito:Triangulo = {base:20, altura:10};
console.log(`El área del triangulo es: ${areaTriangulo(triangulito)}`);