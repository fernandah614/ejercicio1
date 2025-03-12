 export class Individuo {
  public  _nombre:string;
    public _edad:number;

    constructor(nombre:string,edad:number){
        this._nombre=nombre;
        this._edad=edad;
    }
    mostrarInfo():string{
        return `Mi nombre es:${this._nombre},la edad es:${this._edad}`;
    }
}
