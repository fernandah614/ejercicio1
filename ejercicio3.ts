let numm: number[] = [11, 14, 22, 4];
let pareseimpares: any[];
pareseimpares= numm.map((indice) => {return indice % 2 === 0 ? "par" : "impar"}
);
console.log(pareseimpares);
