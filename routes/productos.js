const express = require('express')
const { getProduct, getProducts, getSelectProducts } = require('../productsData.js')
const router = express.Router()
router.use(express.static('public'))

router.get("/:id_producto", async (req, res) => {
    const id_producto = req.params.id_producto
    const [producto] = await getProduct(id_producto)
    res.render('DetallesProducto', { producto })
})

router.get("/", async (req, res) => {
    const result = await getSelectProducts([1, 3, 7])
    res.send(result)
})

module.exports = router