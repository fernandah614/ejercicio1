//4. Crea un objeto persona con las propiedades nombreCompleto y edad. Usa la
//desestructuración para renombrar nombreCompleto a nombre y edad a años.
// Definimos un objeto persona
const persona = {
    nombreCompleto: "Daniela Herrera",
    edad: 19
};
const { nombreCompleto: nombre, edad: años } = persona;
console.log(`Nombre: ${nombre}, Años: ${años}`);
