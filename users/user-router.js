const express = require('express')

const router = express.Router();

router.get('/users', (req, res) =>{
    const users = [{name:"David", age: 28},{name:"Paul", age: 25}];
    res.json(users)
})

router.post('/register', (req, res) =>{
    const userBody = req.body;
    if(!userBody.name || !userBody.password){
        res.status(400).json({ message: `Please provide name or password` });  
    }
    else{
        console.log(userBody);
        res.status(201).json(userBody);
    }
})

router.post('/login', (req, res) =>{
    const {username, password} = req.body;
    if(!username || !password){
        res.status(400).json({ message: `missing required name or password` });  
    }
    else{
        res.json({message: "Welcome!"});
    }
})

module.exports = router;