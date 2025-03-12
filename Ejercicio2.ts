let estudiantes=[
    {nombre:"Juan",edad:10},
    {nombre:"Ana",edad:15},
    {nombre:"Fabio",edad:27},
]



let estudianteResultado1:any[]=[]
estudianteResultado1=estudiantes.map((estu,indice)=>{
    if (estu.edad >= 20){
        return estu;
    }
});
console.log(estudianteResultado1);


let estudianteResultado:any[]=[]
estudianteResultado=estudiantes.filter((estu,indice)=>{
    return estu.edad >= 20 ? estu:null;

});
console.log(estudianteResultado);