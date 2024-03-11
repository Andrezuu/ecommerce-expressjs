pool = require('./database.js')

async function getProducts() {
    const [rows] = await pool.query(`
        select id_producto, producto_nombre, precio, precio_cuotas, descripcion, imagen_ruta, precio_envio
        from productos
    `)
    return rows
}

async function getProduct(id_producto) {
    const [result] = await pool.query(`
        select * 
        from productos
        where id_producto = ?
    `, id_producto)
    return result
}

async function createProduct(producto_nombre, modelo, caracteristicas, precio, precio_cuotas, descripcion) {

    const info = [producto_nombre, modelo, caracteristicas, precio, precio_cuotas, descripcion]

    const [result] = await pool.query(`
        insert into productos (producto_nombre, modelo, caracteristicas, precio, precio_cuotas, descripcion) 
        values( ?, ?, ?, ?, ?, ?)
    `, info)
    const id = result.insertId
    return getProduct(id)
}

module.exports = {
    getProduct, getProducts, createProduct
}