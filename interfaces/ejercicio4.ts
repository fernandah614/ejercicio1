// & interseccion
//? opcion

interface Automovil {
    marca: string;
    modelo?: string; // opcional
    precio: number;
    mostrarInfo():void;
}

class Moto1 implements Automovil {
    public _marca: string="";
    public _precio: number=0;

    get marca(): string {
        return this._marca;
    }

    set marca(nuevaMarca: string) { 
        this._marca = nuevaMarca; 
    }
    get precio():number{
        return this._precio;
    }
    set precio(nuevoPrecio:number){
        this._precio=nuevoPrecio;
    }
    mostrarInfo(): void {
        console.log(`Mi marca es: ${this._marca}, Precio: ${this._precio}`);
    }
}

const auto: Automovil= new Moto1();
auto.marca = "Yamaha";
auto.precio=2000;
console.log(auto);
auto.mostrarInfo();
console.log(auto.marca);
console.log(auto.precio);

 