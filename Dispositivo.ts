export class Dispositivo{
    private _encendido:boolean;

    constructor(encendido:boolean){
        this._encendido=encendido;
    }
    get estado():boolean{
        return this._encendido;
    }
    get encendido(){
        return this._encendido;
    }
    set encendido(nuevoEncendido:boolean){
        this._encendido=nuevoEncendido;
    }
}


