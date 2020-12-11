const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/auth',(req,res)=>{
    let {email,senha} = req.body
    
})







module.exports = router