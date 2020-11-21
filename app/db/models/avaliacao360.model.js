const {DataTypes} = require('sequelize')
const sequelize = require('../index').getConnection()
const name = require('path').basename(__filename.replace('.model',''), '.js')

const Avaliacao360 = sequelize.define(name, {
    descricao: {
        type: DataTypes.STRING(280)
    }
}, {
    sequelize,
    tableName: name,
    timestamps: false
})

Avaliacao360.associate = (models) => {

  Avaliacao360.belongsToMany(models.softskill,{
      through: 'avalicao360_softskill',
      timestamps: false,
      foreignKey:{
          name: 'id_avaliacao360'
      },
      as: 'softskill'
  })

  Avaliacao360.belongsTo(models.aluno, {
      foreignKey: {
          name: 'id_aluno'
      },
      as: 'aluno'
  })

  Avaliacao360.belongsTo(models.atividadeAvaliativa, {
      foreignKey: {
          name: 'id_atividadeAvaliativa'
      },
      as: 'atividadeAvaliativa'
  })

  Avaliacao360.belongsTo(models.grupo, {
      foreignKey: {
          name:"id_grupo"
      },
      as: 'grupo'
  })

}

module.exports = Avaliacao360