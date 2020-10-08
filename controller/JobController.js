const express = require('express')
const router = express.Router()
const Job = require('../models/Job')
const slug = require('slugify')

router.get('/api',(req,res)=>{
    Job.findAll()
    .then(apijobs => {
        res.json(apijobs)
    })

})

router.post('/save',(req,res)=>{
    // var titulo = req.body.titulo
    // var ano = req.body.ano
    // var valor = req.body.valor
    let {titulo,ano,valor} = req.body
    Job.create({
        titulo,
        slug:slug(titulo),
        ano,
        valor
    }).then(()=>res.redirect('jobs/api'))
      .catch(error => console.log("erro ao cadastrar",error))
})

module.exports = router

