const express = require('express');
const compression = require('compression')
const connection = require('./connection.js')
const cors = require('cors')
const router = require('./routes/todos.js')
const app = express()


app.use(compression())

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json({
    type: "application/json"
}))

// const corsOptions = {
//     origin: '*',
//     credentials: true,
//     optionSuccessStatus: 200,
// }

// app.use(cors())

app.use(router)

// app.set('port', 4500)


app.listen( 4400, () => {
    console.log(`El Servidor esta corriendo por el puerto 4400`)
})