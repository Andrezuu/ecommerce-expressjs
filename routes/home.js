const express = require('express')
const { getProducts, getSelectProducts } = require('../productsData.js')
const { getUserProducts } = require('../usersData.js')
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

router.get("/carrito", async (req, res) => {
    let precioTotal = 0.0
    const [userCarrito] = await getUserProducts(1)
    // result[0] es un JSON con los ids de los productos
    const idProductos = userCarrito[0].productos_carrito
    const productosSelected = await getSelectProducts(idProductos)
    productosSelected.forEach(producto => {
        console.log(precioTotal)
        console.log(Number(producto.precio))
        precioTotal += Number(producto.precio)
    })
    // console.log(productos)
    res.render('Carrito', { productosSelected, precioTotal })
})

router.post("/carrito", (req, res) => {
    
    res.render('Carrito', { sexo: "sexo" })
})

module.exports = router