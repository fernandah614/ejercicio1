let sumita :any[]=[];
let precio:number[]=[2000,500,7000,1500];
let acumulador=0;

sumita=precio.map((valor)=> {
    acumulador += valor
    console.log(`El acumulador es: ${acumulador}`);
    return acumulador;
});
console.log(sumita);

