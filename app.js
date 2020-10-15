const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const connection = require('./database/connection')

connection.authenticate().then(() => {
    console.log("conectado com sucesso")
}).catch(error=>console.log("erro ao conectar",error))


app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/jobs',require('./controller/JobController'))
app.use('/users',require('./controller/UserController'))

app.get('/', (req,res) => {
    res.send("incio api")
})

app.listen(3000,()=>{
    console.log("inciando aplicação")
})
