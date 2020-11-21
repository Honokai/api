const {DataTypes} = require('sequelize')
const sequelize = require('../index').getConnection()
const name = require('path').basename(__filename.replace('.model',''), '.js')

const Professor = sequelize.define(name, {
    matricula: {
        type: DataTypes.STRING(10)
    },
    status: {
        type: DataTypes.BOOLEAN()
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
    
    Professor.belongsToMany(models.disciplina, {
        through: 'disciplina_professor',
        timestamps: false,
        foreignKey: {
            name: 'id_Professor',
        },
        as: 'disciplina'
    })

    Professor.belongsToMany(models.turma, {
        through: 'professor_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_professor',
        },
        as: 'turma'
    })
    
}

module.exports = Professor