import { Usuario } from "./Usuarios";
export class Administrador extends Usuario{
    public _nivelAcceso:number;
    
    constructor(nivelAcceso:number,nombre:string,correo:string){
        super(nombre,correo);
        this._nivelAcceso=nivelAcceso;
    }
    mostrarPermisos():string{
        if(this._nivelAcceso===1){
            return `Acceso a listar`
        }
        if(this._nivelAcceso===2){
            return 'Acceso a guardar'
        }
        if(this._nivelAcceso===3){
            return 'Acceso a actualizar'
        }
            return 'No tiene acceso'
        
    }
    }