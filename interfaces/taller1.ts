interface Pelicula {
    _titulo: string;
    _director: string;
    _añoEstreno?: number;
    info(): void;
}

class Film implements Pelicula {
    public _titulo: string;
    public _director: string;
    public _añoEstreno?: number;

    constructor(titulo: string, director: string, añoEstreno?: number) {
        this._titulo = titulo;
        this._director = director;
        this._añoEstreno = añoEstreno;
    }

    info(): void {
        console.log(`El título de la película es: ${this._titulo}, el director es: ${this._director}`);
        if (this._añoEstreno) {
            console.log(`Año de estreno: ${this._añoEstreno}`);
        } else {
            console.log('Año de estreno no disponible');
        }
    }
}

const pelicula1: Pelicula = new Film("Interstellar", "Christopher Nolan", 2014);
const pelicula2:Pelicula=new Film("Tynkerbell", "Bradley Raymond");
pelicula1.info();
pelicula2.info();

