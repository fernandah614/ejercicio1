//Define una interfaz Transporte con una propiedad capacidad (number). Luego, crea una interfaz Avion que extienda Transporte y agregue una propiedad altitudMaxima (number).
// Instancia un objeto de tipo Avion y muestra su información en la consola.
interface Transporte{
    capacidad:number
}
interface Avion extends Transporte{
  altitudMaxima:number;
}
const miAvion: Avion = {
    capacidad: 180,        
    altitudMaxima: 12000    
};
console.log( `La capacidad del avion es:${miAvion.capacidad} personas y tiene una altitud máxima: ${miAvion.altitudMaxima} metros`);
