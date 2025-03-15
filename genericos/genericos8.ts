//Implementa una clase Repositorio<T> que almacene elementos
//  de cualquier tipo y tenga métodos para agregar, buscar por
//  índice y eliminar elementos.
class Repositorio<T>{
    public _elementos: T[]=[];

    agregar(elemento:T):void{
        this._elementos.push(elemento); 
    }
    buscar(indice:number):T | string{
     if (indice >= 0 && indice < this._elementos.length) {
         return this._elementos[indice];
         } else {
         return (`Índice fuera de rango`);
            }
        }
    eliminar(indice:number):void | string{
        if(indice >= 0 && indice < this._elementos.length){
            this._elementos.splice(indice, 1);
             return (`Elemento eliminado correctamente`)
        } else {
            return (`Índice fuera de rango`);
        }
    }
    }
    const repo = new Repositorio<string>();
    repo.agregar(`Burbujitas`);
    repo.agregar(`Niágara`)
    console.log(repo.buscar(0));
    console.log(repo.buscar(7));
    console.log(repo.eliminar(1)); 
    console.log(repo.eliminar(7)); 