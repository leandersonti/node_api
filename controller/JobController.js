const express = require('express')
const router = express.Router()
const Job = require('../models/Job')
const slug = require('slugify')
const { route } = require('../../painel_B/articles/ArticlesController')

router.get('/api',(req,res)=>{
    Job.findAll()
    .then(apijobs => {
        res.json(apijobs)
    })

})

route.get('api/:id',(req,res)=>{
    var id = req.params.id
    if(isNaN(id)){
        Job.findByPk(id)
    }else{
        res.send("id invalido")
    }
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

