class caja<O>{
   public _contenido:O;
   constructor (contenido:O){
    this._contenido=contenido
   }
   obtenerContenido():O{
    return this._contenido;
   }
}
const cajita = new caja<string>('Hola');
cajita.obtenerContenido();