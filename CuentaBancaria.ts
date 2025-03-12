class CuentaBancaria{
    private _saldo:number=0;

    constructor(saldo:number){
        this._saldo=saldo;
    }
    get saldo():number{
        return this._saldo;
    }
    set saldo(valor:number){
        this._saldo=valor + this._saldo;
    }
}

class Ahorros extends CuentaBancaria{
    public interes:number;
    
    constructor(nuevoInteres:number,saldo:number){
        super(saldo);
        this.interes=nuevoInteres;
    }
    ganancia():number{
       let rta=this.saldo+(this.saldo * this.interes);
        return rta;
    }

}
let ahorritos=new Ahorros(0.2, 30);
ahorritos.saldo=10;
console.log(ahorritos.saldo);
console.log(ahorritos.ganancia());