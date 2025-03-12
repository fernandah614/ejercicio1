class Persona{
    public _nombre:string;
    public _apellido:string;
    public _direccion:string;

    constructor(nombre:string,apellido:string,direccion:string){
        this._nombre= nombre;
        this._apellido=apellido;
        this._direccion=direccion;
    }
    get nombre(){
       return this._nombre
    }
    set nombre(nuevoNombre){
        this._nombre=nuevoNombre;
    }
    get apellido(){
        return this._apellido
     }
     set apellido(nuevoApellido){
         this._apellido=nuevoApellido;
     }
     get direccion(){
        return this._direccion
     }
     set direccion(nuevaDireccion){
         this._direccion=nuevaDireccion;
     }
     mostraInfo():string{
        return `El nombre es: ${this._nombre}, el apellido es:${this._apellido},la direccion es:${this._direccion}`
     }
}
let personita = new Persona("Daniela","Herrera","cra 30 # 6-83 San Jose");
personita.nombre="Fernanda";
console.log(personita.mostraInfo());































class Empleado {
    
    public _cargo: string;
    public _salario: number;
    
    constructor(cargo: string, salario: number) {
        this._cargo = cargo;
        this._salario = salario;
    }
    get cargo() {
        return this._cargo;
    }
    set cargo(nuevoCargo: string) {
        this._cargo = nuevoCargo;
    }
    get salario() {
        return this._salario;
    }
    set salario(nuevoSalario: number) {
        this._salario = nuevoSalario;
    }
    mostrarInfo(): string {
        let resultado = `El cargo es: ${this._cargo},el salario es: ${this._salario}}`;
        return resultado;
    }
}
let empl = new Empleado("Jefe",5000);
empl.cargo = "supervisor";
empl.salario =100000 ;
console.log(empl.cargo);
console.log(empl.salario);
console.log(empl.mostrarInfo());