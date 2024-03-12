const express = require('express')
const { getUsers, getUserProducts, createUser, checkUser } = require('./usersData.js')
const { getSelectProducts } = require('./productsData.js')
const homeRouter = require('./routes/home.js')
const productosRouter = require('./routes/productos.js')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
// Para leer los forms
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/login", (req, res) => {
    res.render('login')
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body
    const user = await checkUser(username, password)
    const userJSON = user[0]
    if (user.length > 0) {
        res.redirect('/home')
    } else {
        res.render('login', { failMessage: "Datos incorrectos" })
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

app.get("/pago", async (req, res) => {
    let precioTotal = 0.0
    const [userCarrito] = await getUserProducts(1)
    // userCarrito[0] es un JSON con los ids de los productosaa
    // .productos_carrito devuelve el array con los id de los productosaa
    const idProductos = userCarrito[0].productos_carrito
    const productosSelected = await getSelectProducts(idProductos)
    productosSelected.forEach(producto => {
        precioTotal += Number(producto.precio)
    })
    res.render('pago', { productosSelected, precioTotal })
})

app.use('/home', homeRouter)
app.use('/productos', productosRouter)


app.use(async (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Algo salio mal! RIP server')

})

app.listen(port, () => { console.log('Running on 3000') })