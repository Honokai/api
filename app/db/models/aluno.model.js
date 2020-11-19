const {DataTypes} = require('sequelize')
const sequelize = require('../index').getConnection()
const name = require('path').basename(__filename.replace('.model',''), '.js')

const Aluno = sequelize.define(name, {
    matricula: {
        type: DataTypes.STRING(10)
    }
}, {
    sequelize,
    tableName: name,
    timestamps: false
})

Aluno.associate = (models) => {
    Aluno.belongsTo(models.usuario, {
        foreignKey: {
            name: 'id_usuario',
            unique: true,
            allowNull: false
        },
        as: 'usuario'
    })
    Aluno.belongsToMany(models.hardskill, {
        through: 'aluno_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno',
        },
        as: 'hardskill'
    })
    Aluno.belongsToMany(models.softskill, {
        through: 'aluno_softskill',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno',
        },
        as: 'softskill'
    })
    Aluno.belongsTo(models.curso, {
        foreignKey:{
            name: 'id_curso',
            allowNull: false
        },
        as: 'curso'
    })
}

module.exports = Aluno