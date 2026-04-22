const { Sequelize } = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './.data/pymes.db',
    define: { freezeTableName: true,
        timestamps:  false, 
    }
})

module.exports = sequelize
