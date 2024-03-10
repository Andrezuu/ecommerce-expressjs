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

export default pool

// const result = await checkUser('patito', '12345')
//  console.log(result) 

