function crearUsuarioClick() {
    window.location.href = '/crearUsuario'
}

function showPassword() {
    let passwordInput = document.getElementById('password')
    console.log(passwordInput.type)
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password'
}