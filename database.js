import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

// pool en vez de conexion para poder reusarla
// se usa promise para poder trabajar con async y await
// de esta manera se puedne realizar las queries a la base de datos
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getUsers() {
    const [rows] = await pool.query("select * from users")
    return rows
}

export async function getUser(id_user) {
    const [rows] = await pool.query(`
    select *
    from users
    where id_user = ?
    `, [id_user])
    return rows[0]
}

export async function createUser(email, username, password) {
    const [result] = await pool.query(`
    insert into users (email, username, password)
    values (?, ?, ?)
    `, [email, username, password])
    const id = result.insertId
    return getUser(id)
}

export async function checkUser(username, password) {
    
    const [result] = await pool.query(`
        select *
        from users
        where
            username = ? and password = ?
    `, [username, password])
    console.log(result)
    // devuelve true si existe la row
    return result.length > 0
}

// const result = await checkUser('patito', '12345')
//  console.log(result) 

