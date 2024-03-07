import express from 'express'
import { getUsers, getUser, createUser, checkUser } from './database.js'
import bodyParser from 'body-parser'

const app = express()
const port = 3000


app.set('view engine', 'ejs')
// Para leer los forms
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/login", (req, res) => {
    res.render('login', { title: 'Página de login' })
})
 
app.post("/login", async (req, res) => {
    const { username, password } = req.body
    const existsUser = await checkUser(username, password)
    console.log(existsUser, username, password)
    if (existsUser) {
        // res.render('home', { title: 'Pagina de inicio' })
        res.redirect('/home')
        console.log("Loggeo success!")
    } else {
        res.render('crearUsuario', { title: 'UWO' })
        console.log("Loggeo fail")
    }
})

app.get("/home", (req, res) => {
    res.render('home', { title: 'Pagina de inicio' })
})


app.get("/users", async (req, res) => {
    const users = await getUsers()
    res.send(users)
})


app.post("/users", async (req, res) => {
    const { email, username, password } = req.body
    const user = await createUser(email, username, password)
    res.status(201).send(user)
})

app.get("/users/:id", async (req, res) => {
    const id = req.params.id
    const user = await getUser(id)
    res.send(user)
})



app.use(async (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Algo ocurrio mal!')

})

app.listen(port, () => { console.log('Running on 3000') })