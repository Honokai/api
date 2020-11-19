const {DataTypes} = require('sequelize')
const sequelize = require('../index').getConnection()
const name = require('path').basename(__filename.replace('.model',''), '.js')

const Professor = sequelize.define(name, {
    matricula: {
        type: DataTypes.STRING(10)
    }
}, {
    sequelize,
    tableName: name,
    timestamps: false
})

Professor.associate = (models) => {
    Professor.belongsTo(models.usuario, {
        foreignKey: {
            name: 'id_usuario',
            unique: true,
            allowNull: false
        },
        as: 'usuario'
    })
    /*
    Professor.belongsToMany(models.hardskill, {
        through: 'Professor_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_Professor',
        },
        as: 'hardskills'
    })
    Professor.belongsToMany(models.softskill, {
        through: 'Professor_softskill',
        timestamps: false,
        foreignKey: {
            name: 'id_Professor',
        },
        as: 'softskill'
    })
    Professor.belongsTo(models.curso, {
        foreignKey:{
            name: "curso_id",
            allowNull: false
        },
        as: "curso"
    })
    */
}

module.exports = Professor