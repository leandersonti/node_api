const Sequelize = require('sequelize')
const connection = new Sequelize('jobs','root','',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = connection