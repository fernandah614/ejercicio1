//Define una interfaz Dispositivo con una propiedad nombre (string).
//  Luego, crea una interfaz Smartphone que extienda Dispositivo y agregue una propiedad tienePantallaTactil (boolean). 
// Instancia un objeto de tipo Smartphone y muestra su información en la consola.
interface Dispositivo{
    nombre:string;
}
interface Smartphone extends Dispositivo{
    tienePantallaTactil:boolean;
}
const miSmarthphone: Smartphone={
    nombre: `tablet`,
    tienePantallaTactil:true
};
console.log( `El Smartphone es una: ${miSmarthphone.nombre} y tiene pantalla tactil: ${miSmarthphone.tienePantallaTactil} `);
