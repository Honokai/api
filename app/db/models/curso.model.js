const {DataTypes} = require('sequelize')
const sequelize = require('../index').getConnection()
const name = require('path').basename(__filename.replace('.model',''), '.js')

const Curso = sequelize.define(name, {
    nome_curso: {
        type: DataTypes.STRING(50)
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'criado_em'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'atualizado_em'
    }
}, {
    sequelize,
    tableName: name
})

Curso.associate = (models) => {
    
    Curso.hasMany(models.aluno, {
        foreignKey: {
            name: 'id_usuario',
            allowNull: false
        },
        as: 'aluno'
    })

    Curso.belongsToMany(models.turma, {
        through: 'curso_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_curso'
        },
        as: 'turma'
    })
}

module.exports = Curso