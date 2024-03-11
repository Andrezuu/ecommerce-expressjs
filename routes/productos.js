const express = require('express')
const { getProduct, getProducts } = require('../productsData.js')
const router = express.Router()
router.use(express.static('public'))

router.get("/:id_producto", async (req, res) => {
    const id_producto = req.params.id_producto
    const productoArray = await getProduct(id_producto)
    const productoJSON = JSON.stringify(productoArray[0])
    //const productoOBJ = JSON.parse(productoJSON)
    //TODO: MUESTRA EL PRODUCTO CORRECTO 
    res.render('DetallesProducto')
})
router.get("/", (req, res) => {
    res.send('eyo tu eres el producto')
})

module.exports = router