function goPerfil() {
    window.location.href = '/home/perfil'
}

function goCarrito() {
    window.location.href = '/home/carrito'
}

function goHome() {
    window.location.href = '/home'
}

function crearUsuarioClick() {
    window.location.href = '/crearUsuario'
}

function showPassword() {
    let passwordInput = document.getElementById('password')
    console.log(passwordInput.type)
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password'
}
