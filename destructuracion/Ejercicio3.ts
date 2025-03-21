//3. Crea una función que reciba un objeto con propiedades nombre y edad, pero si no se
//proporciona edad, debe asignar un valor por defecto de 18. Usa desestructuración.
type Personaaa ={
    nombre:string;
    edad?:number;
}
function presentarPe({ nombre, edad = 18 }: Personaaa): string {
    return `Nombre: ${nombre}, Edad: ${edad}`;
}
console.log(presentarPe({ nombre: "Marlio", edad: 29 })); 
console.log(presentarPe({ nombre: "Daniela" }));