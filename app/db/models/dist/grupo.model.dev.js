"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var sequelize = require('../index').getConnection();

var name = require('path').basename(__filename.replace('.model', ''), '.js');

var Grupo = sequelize.define(name, {
  grupo_nome: {
    type: DataTypes.STRING(50)
  }
}, {
  sequelize: sequelize,
  tableName: name,
  timestamps: false
});

Grupo.associate = function (models) {
  Grupo.belongsTo(models.turma, {
    foreignKey: {
      name: 'id_turma'
    },
    as: 'turma'
  });
  Grupo.hasMany(models.avaliacao360, {
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'avaliacao360'
  });
  Grupo.belongsToMany(models.aluno, {
    through: 'aluno_grupo',
    timestamps: false,
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'aluno'
  });
  Grupo.belongsTo(models.atividadeAvaliativa, {
    foreignKey: {
      name: 'id_atividadeAvaliativa'
    },
    as: 'atividadeAvaliativa'
  });
  Grupo.hasMany(models.tarefa, {
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'tarefa'
  });
};

module.exports = Grupo;