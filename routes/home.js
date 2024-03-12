const express = require('express')
const { getProducts, getSelectProducts } = require('../productsData.js')
const { getUserProducts, addProductoCarrito, deleteProductoCarrito, resetCarrito, getUser } = require('../usersData.js')
const router = express.Router()
router.use(express.static('public'))

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

    res.render('PaginaPrincipal', { productos_nombres, productos_imagenes, productos_id, productos })
})

router.post("/", async (req, res) => {
    await resetCarrito(1)
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
    res.render('PaginaPrincipal', { productos_nombres, productos_imagenes, productos_id, productos })
})

router.get("/perfil", async (req, res) => {
    const user = await getUser(1)
    res.render('Perfil', { user })
})

router.get("/carrito", async (req, res) => {
    let precioTotal = 0.0
    const [userCarrito] = await getUserProducts(1)
    // userCarrito[0] es un JSON con los ids de los productosaa
    // .productos_carrito devuelve el array con los id de los productos
    const idProductos = userCarrito[0].productos_carrito
    const productosSelected = await getSelectProducts(idProductos)
    productosSelected.forEach(producto => {
        precioTotal += Number(producto.precio)
    })
    const isCarritoVacio = idProductos.length === 0
    const carritoVacioMessage = isCarritoVacio ? 'Agrega productos a tu carrito!' : ''
    res.render('Carrito', { productosSelected, carritoVacio: carritoVacioMessage, precioTotal })

})

router.post("/carrito", async (req, res) => {
    var precioTotal = 0
    const { id_producto, action } = req.body
    if (action == 'agregarCarrito') {
        await addProductoCarrito(id_producto, 1)
    }
    if (action == 'quitarCarrito') {
        await deleteProductoCarrito(id_producto, 1)
    }
    const [userCarrito] = await getUserProducts(1)
    // userCarrito[0] es un JSON con los ids de los productos
    const idProductos = userCarrito[0].productos_carrito
    const productosSelected = await getSelectProducts(idProductos)
    productosSelected.forEach(producto => {
        precioTotal += Number(producto.precio)
    })
    const isCarritoVacio = idProductos.length === 0
    const carritoVacioMessage = isCarritoVacio ? 'Agrega productos a tu carrito!' : ''
    res.render('Carrito', { productosSelected, carritoVacio: carritoVacioMessage, precioTotal: precioTotal.toFixed(2) })
})

module.exports = router