//realizar clase que tenga un metodo que sume tres 
// numeros cuyas propiedades son los 3 numeros y estos
//3 numeros deben ser propiedades de la clase utilice
//el tipo generico para el manejo de variables
class Suma <S extends number>{
    public _numero1:S;
    public _numero2:S;
    public _numero3:S;
    constructor(numero1:S,numero2:S,numero3:S) {
        this._numero1=numero1;
        this._numero2=numero2;
        this._numero3=numero3;
    }
    sumar():number{
        return this._numero1 + this._numero2+ this._numero3;
}
}
const sumitaaaaa= new Suma (10, 20, 30);
console.log(sumitaaaaa.sumar());

