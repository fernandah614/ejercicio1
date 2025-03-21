//1. Crea una función que reciba un objeto de tipo Libro con propiedades titulo, autor y
//añoPublicacion, y retorne una cadena con esta información utilizando desestructuración.
type Libro ={
    titulo:string;
    autor:string;
    yearPublicacion:number;
}

function informacionLibro({ titulo, autor, yearPublicacion }: Libro): string {
    return `Título: ${titulo}, Autor: ${autor}, Año de publicación: ${yearPublicacion}`;
}
const librito:Libro = {titulo: "El titulo del libro es: Cien años de soledad,",autor: "el autor es: Gabriel García Márquez,",yearPublicacion: 1967};
  const {titulo,autor,yearPublicacion}=librito;
  console.log(titulo,autor,yearPublicacion);