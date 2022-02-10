const express = require("express")

const cors = require('cors')
const server = express()
const userRouter = require('../users/user-router')

server.use(cors())
server.use(express.json())

server.use('/api', userRouter)

server.use("*", (req, res)=>{
    res.status(404).json({message: 'nothing found'})
})

module.exports = server;