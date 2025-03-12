class Animales {
    private _nombre: string;

    constructor(nombre: string) {
        this._nombre = nombre;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nuevoNombre: string) {
        if (nuevoNombre.length != 0) { 
            this._nombre = nuevoNombre;
        } else {
            console.error("El nombre no puede estar vacío.");
        }
    }
}

class Perros extends Animales {
    public _raza: string;

    constructor(nombre: string, raza: string) { 
        super(nombre); 
        this._raza = raza; 
    }
    get raza():string{
        return this._raza
    }
    set raza(nuevaRaza:string){
        this._raza=nuevaRaza;
    }
    ladrar(): string {
        return "El perro ladra";
    }
}
let miPerro = new Perros("Firulais", "Labrador");
console.log(miPerro.nombre);
console.log(miPerro._raza);        
miPerro.nombre="Canela";
console.log(miPerro.nombre);
console.log(miPerro.ladrar()); 

