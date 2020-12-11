const Sequelize = require('sequelize')
const connection = require('../database/connection')

const Job = connection.define('jobs',{
    titulo:{
        type:Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:false
    },
    ano:{
        type:Sequelize.STRING
    },
    valor:{
        type:Sequelize.DOUBLE,
        allowNull: false
    }

})

// Job.sync({force:false})

module.exports = Job