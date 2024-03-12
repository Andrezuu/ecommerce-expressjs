document.addEventListener('DOMContentLoaded', () => {
    const payButton = document.getElementById('pagoForm')
    payButton.addEventListener('submit', (event) => {
        event.preventDefault()
        mostrarConfirmacion()
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm')
    const searchInput = document.getElementById('searchInput')
    let idProductoSelected = 0

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault()
        postBuscarItem(idProductoSelected)
    })

    searchInput.addEventListener('input', function () {
        const selectedOption = document.querySelector(`#productos option[value="${this.value}"]`)
        if (selectedOption) {
            idProductoSelected = selectedOption.getAttribute('data-number')
        }
    })
})


function postBuscarItem(idProductoSelected) {
    window.location.href = `/productos/${idProductoSelected}`
}


function crearUsuarioClick() {
    window.location.href = '/crearUsuario'
}

function showPassword() {
    let passwordInput = document.getElementById('password')
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password'
}

function postBorrarCarritoClicked(id_producto, id_user, action) {
    fetch(`/home/carrito/`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ id_producto, id_user, action })
    }).catch(error => {
        console.error('Error al borrar del carrito!', error)
    })
}


function mostrarConfirmacion() {
    const pagoForm = document.getElementById('pagoForm')
    const pagoSummary = document.getElementById('pagoSummary')
    const confirmacion = document.getElementById('confirmacion')

    pagoForm.style.display = 'none'
    pagoSummary.style.display = 'none'
    confirmacion.style.display = 'block'
}