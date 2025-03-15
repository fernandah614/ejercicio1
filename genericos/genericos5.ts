//Crea una función genérica llamada reversa<T> que reciba un arreglo de cualquier tipo y 
//devuelva un nuevo arreglo con los elementos en orden inverso utiliza un for o un foreach 
function reversa<T>(arreglo: T[]): T[] {
    const nuevoArreglo: T[] = [];
    arreglo.forEach((elemento, index) => {
        nuevoArreglo.unshift(elemento);
    });
    return nuevoArreglo;
}
const numerositoss = [10, 20, 30];
const letricas = ["a", "b", "c"];
console.log(reversa(numerositoss)); 
console.log(reversa(letricas)); 
