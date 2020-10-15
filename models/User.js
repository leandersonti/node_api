const Sequelize = require('sequelize')
const connection = require('../database/connection')

const User = connection.define('users',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING
    },
    senha:{
        type:Sequelize.STRING,
        allowNull: false
    }

})

//User.sync({force:false})

module.exports = User