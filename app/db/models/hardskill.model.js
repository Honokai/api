const {DataTypes} = require('sequelize')
const sequelize = require('../index').getConnection()
const name = require('path').basename(__filename.replace('.model',''), '.js')

const HardSkill = sequelize.define(name, {
    descricao: {
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

HardSkill.associate = (models) => {
    
    HardSkill.belongsToMany(models.aluno, {
        through: 'aluno_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'aluno'
    })

    HardSkill.belongsToMany(models.disciplina, {
        through: 'disciplina_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'disciplina'
    })

    HardSkill.belongsToMany(models.turma, {
        through: 'hardskill_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'turma'
    })

    HardSkill.belongsToMany(models.atividadeAvaliativa, {
        through: 'atividade_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'atividadeAvaliativa'
    })

    HardSkill.hasMany(models.questao, {
        foreignKey: {
            name: 'id_hardskill'
        },
        as: 'questao'
    })
}

module.exports = HardSkill