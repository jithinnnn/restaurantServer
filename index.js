require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

const restServer = express()

restServer.use(cors())
restServer.use(express.json())
restServer.use(router)

const PORT = 3000 || process.env.PORT
restServer.listen(PORT,()=>{
    console.log(`Restaruant Server has started at port ${PORT} `);
})

restServer.get('/',(req,res)=>{
    res.send("<h1 style=color:red;>Restaurant Server started and waiting for client request</h1>")
})

