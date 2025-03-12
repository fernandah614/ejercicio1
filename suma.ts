let suma:number=0;
let numeros: number[] = [1, 3, 7, 4];


for (let i = 0; i < numeros.length; i++) {
    suma +=numeros[i];
}
console.log(suma);
numeros.forEach((index) => console.log(index))
