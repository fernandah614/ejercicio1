import { Individuo } from "./ejercicio1";

export class Usuario extends Individuo{
    _correo:string;
    constructor(nombre:string,correo:string,edad:number){
        super(nombre,edad);
        this._correo=correo;
    }
    mostrarInfo(): string {
        return `el nombre es: ${this._nombre},la edad es:${this._edad},el correo es:${this._correo}`
    }
}
