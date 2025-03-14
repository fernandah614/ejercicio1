//Crea una interfaz Videojuego con las propiedades titulo (string) y plataforma (string). 
// Luego, implementa esta interfaz en una clase Juego y asigna valores a sus propiedades directamente sin usar constructor.
interface Videojuego {
    titulo:string;
    plataforma:string;
}
class Juego implements Videojuego{
    titulo: string = "";     
    plataforma: string = ""; 
}
const miJuego = new Juego();
miJuego.titulo = "Super Mario Odyssey";
miJuego.plataforma = "Nintendo Switch";
console.log(`El titulo del juego es:${miJuego.titulo} y la plataforma es: ${miJuego.plataforma} `);
