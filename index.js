const dotenv = require("dotenv").config()
const express = require("express")
const cors = require('cors')
const server = express()
const port = process.env.PORT || 9000

const path = require("path")

server.use(cors())
server.use(express.json())

server.get('/api/users', (req, res, next) =>{
    res.json({message: 'API is working'})
})

server.use(express.static(path.join(__dirname, "client/build")))

server.use("*", (req, res)=>{
    res.json({data:"API is accounted for"}) //api used will be put here
})

server.use((err, req, res, next) =>{
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

server.listen(port, ()=>{
    console.log('listening on port:', port);
} )