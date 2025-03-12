interface controlDipositivos{
_encenderDispositivo(nombre:string):void;
_apagarDispositivo(nombre:string):void;
_obtenerDispositivo(nombre:string):string;
}
interface automatizacionHogar{
_crearAutomatizacion(nombre:string,accciones:string[]):void;
_eliminarAutomatizacion(nombre:string):void;
_ejecutarAutomatizacion(nombre:string):void;
}

class casaInteligente implements controlDipositivos, automatizacionHogar{
    public dispositivo:string;
    constructor(dispositivo:string){
        this.dispositivo=dispositivo;
    }
    _encenderDispositivo (nombre:string):void{
        this.dispositivo=nombre;
        console.log(`El dispositivo a encender es:${this.dispositivo}`)
    }
    _apagarDispositivo (nombre:string):void{
        this.dispositivo=nombre;
        console.log(`El dispositivo a apagar es:${this.dispositivo}`)
    }
    _obtenerDispositivo(nombre:string):string{
        this.dispositivo=nombre;
        return this.dispositivo;
    }
    _crearAutomatizacion (nombre:string,accciones:string[]):void{
        console.log(`La automatizacion creada es:${nombre}, las acciones son: ${accciones}`)
    }
    _eliminarAutomatizacion(nombre:string):void{
        console.log(`La automatizacion creada es:${nombre}`)
    }

    _ejecutarAutomatizacion(nombre:string):void{
        console.log(`La automatizacion a ejecutar es:${nombre}`)
    }
}
const miCasa=new casaInteligente("refrigerador");
miCasa._encenderDispositivo("bombilla");

const miCasita: controlDipositivos & automatizacionHogar = new casaInteligente("Licuadora");
console.log(miCasita._encenderDispositivo ("Nevecon"));