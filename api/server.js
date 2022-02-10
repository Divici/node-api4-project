const express = require("express")

const cors = require('cors')
const server = express()
const userRouter = require('../users/user-router')

const path = require("path")

server.use(cors())
server.use(express.json())
server.use(express.static(path.join(__dirname, "client/build")))

server.use('/api', userRouter)

server.use("/api/", (_, res)=>{
    res.json({data:"API is accounted for"}) //api used will be put here
})

server.use("*", (req, res)=>{
    res.status(404).json({message: 'nothing found'})
})

module.exports = server;