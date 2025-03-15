//Crea una interfaz genérica Par<T, U> que represente un par de valores de cualquier tipo y 
// luego define una función que reciba un objeto de tipo Par 
// y devuelva una cadena con ambos valores concatenados.
interface Par<T, U> {
    nombre: T;
    edad: U;
}

function concatenarParImpar<T extends string, U extends number>(valores: Par<T, U>): string {
    return `${valores.nombre} ${valores.edad}`;
}

const person: Par<string, number> = { nombre: `Daniela`, edad: 19 };
console.log(concatenarParImpar(person)); 
