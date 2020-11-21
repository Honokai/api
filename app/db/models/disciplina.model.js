const {DataTypes} = require('sequelize')
const sequelize = require('../index').getConnection()
const name = require('path').basename(__filename.replace('.model',''), '.js')

const Disciplina = sequelize.define(name, {
    disciplina_nome: {
        type: DataTypes.STRING(50)
    }
}, {
    sequelize,
    tableName: name,
    timestamps: false
})
    
Disciplina.associate = (models) => {
  
  Disciplina.hasMany(models.turma, {
    foreignKey: {
      name: 'id_disciplina'
    },
    as: 'turma'
  })
  
  Disciplina.belongsToMany(models.hardskill, {
    through: 'disciplina_turma',
    timestamps: false,
    foreignKey: {
      name: 'id_disciplina'
    },
    as: 'hardskill'
  })

  Disciplina.belongsToMany(models.professor, {
    through: 'disciplina_professor',
    timestamps: false,
    foreignKey: {
      name: 'id_disciplina'
    },
    as: 'professor'
  })

}

module.exports = Disciplina