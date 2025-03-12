interface Person{
    name:string,
    address:string,
    age:number;
    info():void;
}
//
class Employer implements Person{
    name:string;
    address:string;
    age:number;
    constructor(name:string,address:string, age:number){
        this.name=name;
        this.address=address;
        this.age=age;
    }
info (){
    console.log( `Esta es la información del empleado
        name:${this.name}`)
}
}
let diego=new Employer("Diego","123",25);
diego.info()
