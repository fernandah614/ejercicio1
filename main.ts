import { Usuario } from "./exportimport/ejercicio2";
import { Administrador } from "./Administrador";
import { Smartphone } from "./Smartphone";


let miSmartphone = new Smartphone(15,false);
console.log(miSmartphone.necesitaCargarse());


let administradorcito = new Administrador(3, "Nana", "nanitaherrera@gmail.com");
console.log(administradorcito.correo);
let usuarito = new Usuario("Daniela", "danielaherrera@gmail.com", 19);

console.log(usuarito.mostrarInfo());
console.log(administradorcito.mostrarPermisos());
administradorcito.correo = "fernandausuga@gmail.com";


