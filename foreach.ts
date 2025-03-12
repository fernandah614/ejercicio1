let numerositos: number[] = [1, 3, 7, 4];
let numeros1:number[]=[11,8,2,6]

numerositos.forEach((index) => console.log(index));

numerositos.forEach((i)=>console.log(i+5));

numerositos.forEach((numeros,index,array)=> 
    console.log(numeros, index, array
    ));

    let acumulation:number=0;
    numeros1.forEach((numeros,index,array)=> acumulation=acumulation + numeros );
    console.log(acumulation);

    