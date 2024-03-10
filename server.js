import express from 'express'
import { getUsers, getUser, createUser, checkUser } from './usersData.js'
import bodyParser from 'body-parser'
import e from 'express'

const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.use(express.static('public'))
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
        res.redirect('/home')
        console.log("Loggeo success!")
    } else {
        res.render('login', { failMessage: "Datos incorrectos" })
        console.log('when fallas')
    }
})

app.get("/crearUsuario", async (req, res) => {
    res.render('crearUsuario')
})

app.post("/crearUsuario", async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        res.render(
            'crearUsuario',
            {
                failMessageSignup: "Ingrese los datos necesarios!",
                username,
                email,
                password
            }
        )
    } else {
        createUser(username, email, password)
        res.status(201).redirect('/login')
    }


})

app.get("/home", (req, res) => {
    res.render('home', { title: 'Pagina de inicio' })
})



app.use(async (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Algo salio mal! RIP server')

})

app.listen(port, () => { console.log('Running on 3000') })