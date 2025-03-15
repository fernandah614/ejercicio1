//funciones clases o componentes
//tipo generico la forma en como dbe comportarte una funcion segun tipo recibido <>
function obtenerContenido<T extends number>(a:T){
    console.log(`Mi numero es:${a}`)
    }
    obtenerContenido(2);
    
    const sumaNumeros =<N extends number> (numero1:number,numero2:number):number=>{
        return numero1 + numero2;
    }
    console.log(sumaNumeros (3,5));
    