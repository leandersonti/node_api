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

router.get('/api/:id',(req,res)=>{
    var id = req.params.id
    if(!isNaN(id)){
        Job.findByPk(id)
        .then(apiId => {
            res.json(apiId)
        }).catch(error => console.log("nao buscou"))
    }else{
        res.send("id invalido")
    }
})

router.delete('/api/delete/:id',(req,res)=>{
    var id = req.params.id
    Job.destroy({
        where:{id}
    })
    .then(()=>{
        res.redirect('/jobs/api')
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
    }).then(()=>res.redirect('/jobs/api'))
      .catch(error => console.log("erro ao cadastrar",error))
})

router.put('/api/update/:id',(req,res)=>{
    // var titulo = req.body.titulo
    // var ano = req.body.ano
    // var valor = req.body.valor
    let id = req.params.id
    let {titulo,ano,valor} = req.body
    Job.update({
        titulo,
        slug:slug(titulo),
        ano,
        valor
    },
        {
            where:{id}
        }
    ).then(()=>res.redirect('/jobs/api'))
      .catch(error => console.log("erro ao cadastrar",error))
})

module.exports = router

