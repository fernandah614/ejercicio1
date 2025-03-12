interface Reptil {
    mostrarInfo(): void;
}

interface Volador {
    mostrarInfo(): void;
}

interface Animalitos extends Reptil {
    nombre: string;
    mostrarInfo(): void;
}

class Animal implements Animalitos, Volador {
    public _nombre: string;

    constructor(nombre: string) {
        this._nombre = nombre;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nuevoNombre: string) {
        this._nombre = nuevoNombre;
    }
    mostrarInfo(): void {
        console.log(`El nombre del animal es: ${this._nombre}`);
    }
}

const animalitos :  Animalitos & Volador = new Animal("Conejo");
animalitos.mostrarInfo();




