import { Dispositivo } from "./Dispositivo";
export class Smartphone extends Dispositivo{
    private _nivelBateria:number;

    constructor(nivelBateria:number,encendido:boolean){
        super(encendido);
        this._nivelBateria=nivelBateria;
    }
    necesitaCargarse():string{
        if (this._nivelBateria < 20){
            return `El smartphone necesita cargarse`;
        }else{
            return `El smartphone no necesita cargarse`
        }
    }
    
}