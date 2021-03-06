const {DataTypes} = require('sequelize')
const sequelize = require('../index').getConnection()
const name = require('path').basename(__filename.replace('.model',''), '.js')

const QuestaoDia = sequelize.define(name, {
    descricao: {
        type: DataTypes.STRING(280)
    }
}, {
    sequelize,
    tableName: name,
    timestamps: false
})

QuestaoDia.associate = (models) => {
  QuestaoDia.belongsTo(models.questao, {
    foreignKey: {
      name: 'id_questao'
    },
    as: 'questao'
  })
  
  QuestaoDia.belongsTo(models.aluno, {
    foreignKey: {
        name: 'id_aluno'
    },
    as: 'aluno'
  })
}


module.exports = QuestaoDia