const {DataTypes} = require('sequelize')
const sequelize = require('../index').getConnection()
const name = require('path').basename(__filename.replace('.model',''), '.js')

const Tarefa = sequelize.define(name, {
  descricao: {
      type: DataTypes.STRING(280)
  }
}, {
  sequelize,
  tableName: name,
  timestamps: false
})

Tarefa.associate = function(models) {
  
  Tarefa.belongsTo(models.aluno, {
    foreignKey: {
      name: 'id_usuario'
    },
    as: 'usuario'
  })

  Tarefa.belongsTo(models.grupo, {
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'grupo'
  })
}

module.exports = Tarefa