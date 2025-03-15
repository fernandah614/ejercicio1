class Coleccion<c extends number>{
    public elementos: c[]=[];
    agregar(valor:c):void{
        this.elementos.push(valor)
    }
    obtener(a:c):c{
        return this.elementos[a];
    }
    obtenerArreglo():c[]{
        return this.elementos;
    }
}
const dato=new Coleccion ();
dato.agregar(2);
dato.agregar(3);
dato.agregar(4);
dato.agregar(6);
console.log(dato.obtener(0));
console.log(dato.obtenerArreglo());
