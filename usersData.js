dpool = require('./database')

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
    console.log(result)
    // devuelve true si existe la row
    return result.length > 0
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    checkUser
}