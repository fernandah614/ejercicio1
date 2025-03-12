
export class Usuario{
    private _nombre:string;
    private _correo:string;

    constructor(nombre:string,correo:string){
        this._nombre=nombre;
        this._correo=correo;
    }
    get correo(){
        return this._correo;
    }
    set correo(nuevoCorreo:string){
        if(nuevoCorreo.includes('@') && nuevoCorreo.includes('.')){
            this._correo=nuevoCorreo;
        }
    }
}