interface Empleado34{
    _nombre:string;
    _salario:number;
    info():void;
}
class Gerente implements Empleado34{
    _nombre: string;
    _salario:number;
    departamento:string;
    constructor(nombre: string,salario:number,departamento:string){
        this._nombre=nombre;
        this._salario=salario;
        this.departamento=departamento;
    }
    info () {
    console.log( `Esta es la información del gerente nombre:${this._nombre}, salario:${this._salario}, departamento:${this.departamento}`)
    }
    bonificacion(valor:number):number{
        let bonificacion = this._salario * valor;
        return bonificacion;
    }
}
class Desarrollador implements Empleado34{
    _nombre:string;
    _salario:number;
    _lenguaje:string;
    constructor(nombre: string,salario:number,lenguaje:string){
        this._nombre=nombre;
        this._salario=salario;
        this._lenguaje=lenguaje;
    }
    info(): void{
        console.log( `Esta es la información del desarrollador nombre:${this._nombre}, salario:${this._salario}, lenguaje:${this._lenguaje}`)
    }
}
class Diseñador implements Empleado34{
    _nombre:string;
    _salario:number;
    _especialidad:string;
    constructor(nombre: string,salario:number,especialidad:string){
        this._nombre=nombre;
        this._salario=salario;
        this._especialidad=especialidad;
    }
    info(): void{
        console.log( `Esta es la información del diseñador nombre:${this._nombre}, salario:${this._salario}, especialidad:${this._especialidad}`)
    }
}
const empleaditos:Empleado34[] = [
    new Gerente("carlos", 8000, "cauca"),
    new Desarrollador("Victor", 2000, "typescript"),
    new Diseñador("Julian", 3000, "UI")
];
empleaditos.forEach((emp)=>{
    emp.info();
});

const gerentencito=new Gerente("Juliana", 3000, "produccion");
const desarrolladorcito = new Desarrollador("Manuel", 1000, "typescript");
const empleados2:Empleado34[]=[
    gerentencito,
    desarrolladorcito
]
empleados2.forEach((emp)=>{
    emp.info();
});
console.log(gerentencito.bonificacion(0.12));
