const pool = require('./database')

async function getUsers() {
    const [rows] = await pool.query("select * from users")
    return rows
}

async function getUser(id_user) {
    const [rows] = await pool.query(`
    select *
    from users
    where id_user = ?
    `, [id_user])
    return rows[0]
}

async function createUser(username, email, password) {
    const [result] = await pool.query(`
    insert into users (username, email, password)
    values (?, ?, ?)
    `, [username, email, password])
    const id = result.insertId
    return getUser(id)
}

async function checkUser(username, password) {
    const [result] = await pool.query(`
        select *
        from users
        where username = ? and password = ?
    `, [username, password])
    // devuelve true si existe la row
    return result.length > 0
}

async function getUserProducts(id_user) {
    const result = await pool.query(`
        select productos_carrito
        from users 
        where id_user = ?
    `, id_user)
    return result
}

async function addProductoCarrito(id_producto, id_user) {
    const [oldProducts] = await getUserProducts(id_user)
    // oldProductos[0] saca los datos en un json
    // .productos_carrito devuelve el array
    const productArray = await oldProducts[0].productos_carrito
    productArray.push(id_producto)
    const productJSON = JSON.stringify(productArray)
    const [result] = await pool.query(`
        update users
        set productos_carrito = ?
        where id_user = ?
    `, [productJSON, id_user])
    return result
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    checkUser,
    getUserProducts,
    addProductoCarrito
}