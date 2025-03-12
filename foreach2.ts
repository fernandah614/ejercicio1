let productos=[{nombre:"Pera",precio:2000},
    {nombre:"Banana",precio:500},
    {nombre:"Papaya",precio:7000},
    {nombre:"Kiwi",precio:1500}
]
let a: number = 0;

productos.forEach((producto, indice, array) => {
    a = producto.precio + a;
    console.log(`El acumulador es: ${a}`);
});
console.log(`El total es: ${a}`);
