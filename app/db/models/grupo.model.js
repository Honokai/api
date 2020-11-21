const {DataTypes} = require('sequelize')
const sequelize = require('../index').getConnection()
const name = require('path').basename(__filename.replace('.model',''), '.js')

const Grupo = sequelize.define(name, {
    grupo_nome: {
        type: DataTypes.STRING(25)
    }
}, {
    sequelize,
    tableName: name,
    timestamps: false
})

Grupo.associate = (models) => {
  
  Grupo.belongsTo(models.turma, {
    foreignKey: {
      name: 'id_turma'
    },
    as: 'turma'
  })

  Grupo.hasMany(models.avaliacao360, {
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'avaliacao360'
  })

  Grupo.belongsToMany(models.aluno, {
    through: 'aluno_grupo',
    timestamps: false,
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'aluno'
  })

  Grupo.belongsTo(models.atividadeAvaliativa,{
    foreignKey: {
      name: 'id_atividadeAvaliativa'
    },
    as: 'atividadeAvaliativa'
  })

  Grupo.hasMany(models.tarefa, {
     foreignKey: {
       name: 'id_grupo'
     },
     as: 'tarefa'
  })
}

module.exports = Grupo