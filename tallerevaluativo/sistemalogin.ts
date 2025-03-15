function login(usuario: string, contraseña: string): string {
    if (usuario === " " || contraseña === " ") {
        return `Usuario o contraseña incorrectos`;
    }
    if (contraseña.length < 8) {
        return `Usuario o contraseña incorrectos`;
    }
    return `Inicio de sesión exitoso`;
}
console.log(login(`danielaherrera`, `1061715858`)); 
console.log(login(`fernandausuga`, `3235`));     
console.log(login(``,``));