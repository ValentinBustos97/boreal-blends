let usuarios = [];

function tieneNumero(password) { 
for (let i = 0 ; i < password.length ; i++) {
    if ( !isNan (password[i])) {
        return true;}
        
}
return false;
    }


function registrarUsuario (nombre, email, password) {
//validar que ningun campo sea null o undefined
if (!nombre || !password || !email) {
    console.log ("Todos los campos son obligatorios");
return;
}
    
if (password.length < 6 || tieneNumero (password) == false) {
console.log ("Se requiere minimo 6 caracteres y debe contener al menos un numero");
return;
}
for (let i = 0 ; i < usuarios.length ; i++) {
    if (usuarios[i].email === email) {
        console.log ("El nombre de usuario ya esta registrado");
        return;
    }
}

    let usuario = {id: usuarios.length , nombre: nombre , password: password , email: email};
    usuarios.push(usuario);
console.log("Usuario registrado exitosamente");
}

function iniciarSesion (email, password) {
    if (!email || !contraseña) {
        console.log ("Email y contraseña son obligatorios");
        return;
    }

    for (let i = 0; i < usuarios.length ;  i++) {
        if ( usuarios[i].email == email && usuarios[i].password == password) {
            console.log ("Inicio de sesion correcto");
            return;
        }
    }
    console.log ("Uusario o contraseña incorrectos");
}