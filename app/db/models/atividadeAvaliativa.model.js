const {DataTypes} = require('sequelize')
const sequelize = require('../index').getConnection()
const name = require('path').basename(__filename.replace('.model',''), '.js')

const AtividadeAvaliativa = sequelize.define(name, {
    descricao: {
        type: DataTypes.STRING(280)
    }
}, {
    sequelize,
    tableName: name,
    timestamps: false
})
  
AtividadeAvaliativa.associate = (models) => {
  
  AtividadeAvaliativa.belongsTo(models.turma, {
    foreignKey: {
      name: "id_turma",
      allowNull: false
    }
  })

  AtividadeAvaliativa.hasMany(models.avaliacao360, {
    foreignKey: {
      name: "id_atividadeAvaliativa"
    },
    as: 'avaliacao360'
  })

  AtividadeAvaliativa.hasMany(models.grupo, {
    foreignKey: {
      name: "id_atividadeAvaliativa"
    },
    as: "grupo"
  })

  AtividadeAvaliativa.belongsToMany(models.hardskill, {
    through: 'atividade_hardskill',
    timestamps: false,
    foreignKey: {
      name: 'id_atividadeAvaliativa'
    },
    as: 'hardskill'
  })

}

module.exports = AtividadeAvaliativa
