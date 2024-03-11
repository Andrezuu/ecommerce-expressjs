const express = require('express')
const { getProducts } = require('../productsData.js')
const router = express.Router()
router.use(express.static('public'))
//
router.get("/", async (req, res) => {
    const productos = await getProducts()
    const productos_nombres = productos.map(producto => {
        const producto_nombre = producto.producto_nombre
        delete producto.producto_nombre
        return producto_nombre
    })

    const productos_imagenes = productos.map(producto => {
        const producto_imagen = producto.imagen_ruta
        delete producto.imagen_ruta
        return producto_imagen
    })

    const productos_id = productos.map(producto => {
        const id_producto = producto.id_producto
        delete producto.id_producto
        return id_producto
    })
    console.log(productos)
    
    res.render('PaginaPrincipal', { productos_nombres, productos_imagenes, productos_id, productos })
})

router.get("/perfil", (req, res) => {
    res.render('Perfil')
})

router.get("/carrito", (req, res) => {
    res.render('Carrito')
    console.log('carrito?')
})

module.exports = router