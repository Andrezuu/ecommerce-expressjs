const { route } = require('../server')

express = require('express')

const router = express.Router()
router.use(express.static('public'))

router.get("/", (req, res) => {
    res.render('PaginaPrincipal', { title: 'Pagina de inicio' })
})

router.get("/perfil", (req, res) => {
    res.render('Perfil')
})

router.get("/carrito", (req, res) => {
    res.render('Carrito')
    console.log('carrito?')
})

module.exports = router