//Desarrolla una función genérica filtrar<T> que reciba
//  un arreglo y un criterio que busque elementos del arreglo y
//  devuelva un nuevo arreglo con los elementos que cumplan
//  el criterio.
function filtrar<T extends string>(arreglo: T[], criterio: T): T[] {
    const resultado: T[] = []; 

    arreglo.forEach((index) => {
        if (index === criterio) { 
            resultado.push(index);
        }
    });

    return resultado; 
}
const filtrados = filtrar([`A`, `B`, `C`, `D`], `A`);
console.log(filtrados);