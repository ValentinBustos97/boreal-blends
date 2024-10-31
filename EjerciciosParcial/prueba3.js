let usuarios = [];

function registrarUsuario(nombre, email, password) {
    if (!nombre || !email || !password) {
        console.log("Todos los campos son obligatorios");
        return;
    }

    if (password.length < 6 || !tieneNumero(password)) {
        console.log("La contraseña debe tener al menos 6 caracteres y contener un número");
        return;
    }

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            console.log("El email ya está registrado");
            return;
        }
    }

    let usuario = {
        id: usuarios.length,
        nombre: nombre,
        password: password,
        email: email
    };

    usuarios.push(usuario);
    console.log("Usuario registrado exitosamente");
    guardarUsuariosEnLocalStorage();
}

function tieneNumero(password) {
    for (var i = 0; i < password.length; i++) {
        if (!isNaN(password[i])) {
            return true;
        }
    }
    return false;
}

function iniciarSesion(email, password) {
    if (!email || !password) {
        console.log("Email y contraseña son obligatorios");
        return;
    }

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email && usuarios[i].password === password) {
            console.log("Inicio de sesión exitoso");
            return;
        }
    }

    console.log("Email o contraseña incorrectos");
}

function guardarUsuariosEnLocalStorage() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function cargarUsuariosDesdeLocalStorage() {
    var usuariosGuardados = localStorage.getItem("usuarios");
    if (usuariosGuardados) {
        usuarios = JSON.parse(usuariosGuardados);
    }
}