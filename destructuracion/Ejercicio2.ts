//2. Dado un arreglo de nombres de colores, usa la desestructuración para obtener el primer y
//el último color del arreglo.
type Color = {
    nombre: string;
};
 const colores:Color[]=[
    {nombre:`Rojo`},
    {nombre:`Azul`},
    {nombre:`Verde`},
    {nombre:`Amarillo`}
 ];
 const [primerColor] = colores;
 const ultimoColor = colores[colores.length -1];
 console.log(`Primer color: ${primerColor.nombre}`);
console.log(`Último color: ${ultimoColor.nombre}`);