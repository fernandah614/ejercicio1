class Vehiculo{
public _marca:string;
public _modelo:string;
public _anio:number;
   constructor(marca:string,modelo:string,anio:number){
  this._marca = marca;
  this._modelo = modelo;
  this._anio = anio;
   }
//GETTER => OBTENER INFORMACION RETURN
get marca(){
return this._marca;
}
set marca(nuevaMarca:string){
this._marca=nuevaMarca;
}
get modelo(){
return this._modelo;
}
set modelo(nuevoModelo:string){
this._modelo=nuevoModelo;
}
get anio(){
return this._anio;
}
set anio(nuevoAnio:number){
this._anio=nuevoAnio;
}
//SETTER => ALMACENAR O ACTUALIZAR PROPIEDAD CLASE
   mostrarInfo(): string {
    let resultado = `La marca del vehiculo es: ${this._marca},el modelo es: ${this._modelo},el año es: ${this._anio}`;
    return resultado;
}
}
class Moto extends Vehiculo{
 public _capacidad:number; 
 constructor(capacidad:number,marca:string,modelo:string,anio:number) {
    super (marca,modelo,anio);//Accedo a lo que tiene la clase padre
    this._capacidad=capacidad;
 }
 get capacidad(){
   return this._capacidad;
   }
   set capacidad(nuevaCapacidad:number){
   this._capacidad=nuevaCapacidad;
   }
 infoMoto(): string {
    let info=`La capacidad de la moto es: ${this._capacidad}, la marca es: ${this._marca}`;
    return info;
 }
}
class Auto extends Vehiculo{
public _cilindraje:number;
constructor(cilindraje:number,marca:string,modelo:string,anio:number){
     super(marca,modelo,anio);
this._cilindraje=cilindraje;
}
get cilindraje(){
   return this._cilindraje;
   }
   set cilindraje(nuevoCilindraje:number){
   this._cilindraje=nuevoCilindraje;
   }
infoAuto(): string{
    let infor=`El cilindraje del auto es: ${this._cilindraje},la marca es: ${this._marca}`;
               return infor;
}
}
let autico = new Auto(1000, "Toyota", "corola", 2021);
autico.infoAuto();
let motico = new Moto(1000, "Yamaha", "R1", 2022);
motico.infoMoto();
let vehiculoo = new Vehiculo("Honda","fit",2005);
vehiculoo.mostrarInfo();
console.log(autico.infoAuto());
console.log(autico.mostrarInfo());
autico.marca;//get marca
autico.marca="HONDA";//set marca
console.log(motico.infoMoto());
console.log(vehiculoo.mostrarInfo());
console.log(autico.marca);
console.log(motico.marca);
console.log(vehiculoo.marca);
console.log(autico.modelo);
console.log(motico.modelo);
console.log(vehiculoo.modelo);
console.log(autico.anio);
console.log(motico.anio);
console.log(vehiculoo.anio);