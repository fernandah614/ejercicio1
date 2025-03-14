interface Recargable {
    _recargar(): void;
}

interface Disparable {
    _disparar(): void;
}
class PistolaLaser implements Recargable, Disparable {
    public bateria: number;
    public bateriaMaxima: number;

    constructor(bateriaMaxima: number) {
        this.bateriaMaxima = bateriaMaxima;
        this.bateria = bateriaMaxima; 
    }
    _recargar(): void {
        this.bateria = this.bateriaMaxima;
        console.log(`La batería del celular está completamente cargada: ${this.bateria}%`);
    }
    _disparar(): void {
        if (this.bateria > 0) {
            this.bateria--;
            console.log(`Has usado el celular. Batería restante: ${this.bateria}%`);
        } else {
            console.log(`La batería del celular está agotada. Debes cargarlo.`);
        }
    }
}

const miCelular = new PistolaLaser(100); 
const celularApagado = new PistolaLaser(0); 
miCelular._recargar();  
miCelular._disparar();  
miCelular._disparar();  
celularApagado._disparar(); 
