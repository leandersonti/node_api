const Sequelize = require('sequelize')
const connection = new Sequelize('jobs','root','123',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = connection