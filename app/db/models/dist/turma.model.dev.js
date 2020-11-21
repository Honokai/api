"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var sequelize = require('../index').getConnection();

var name = require('path').basename(__filename.replace('.model', ''), '.js');

var Turma = sequelize.define(name, {
  turma_nome: {
    type: DataTypes.STRING(50)
  }
}, {
  sequelize: sequelize,
  tableName: name,
  timestamps: false
});

Turma.associate = function (models) {
  Turma.belongsToMany(models.curso, {
    through: 'curso_turma',
    timestamps: false,
    foreignKey: {
      name: 'id_turma'
    },
    as: 'curso'
  });
  Turma.belongsTo(models.disciplina, {
    foreignKey: {
      name: 'id_disciplina'
    },
    as: 'disciplina'
  });
  Turma.belongsToMany(models.professor, {
    through: 'professor_turma',
    timestamps: false,
    foreignKey: {
      name: 'id_turma'
    },
    as: 'professor'
  });
  Turma.belongsToMany(models.aluno, {
    through: 'aluno_turma',
    timestamps: false,
    foreignKey: {
      name: 'id_turma'
    },
    as: 'aluno'
  });
  Turma.hasMany(models.grupo, {
    foreignKey: {
      name: 'id_turma'
    },
    as: 'grupo'
  });
  Turma.belongsToMany(models.hardskill, {
    through: 'hardskill_turma',
    timestamps: false,
    foreignKey: {
      name: 'id_turma'
    },
    as: 'hardskill'
  });
  Turma.hasMany(models.atividadeAvaliativa, {
    foreignKey: {
      name: 'id_turma'
    },
    as: 'atividadeAvaliativa'
  });
};

module.exports = Turma;