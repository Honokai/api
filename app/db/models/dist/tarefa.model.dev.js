"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var sequelize = require('../index').getConnection();

var name = require('path').basename(__filename.replace('.model', ''), '.js');

var Tarefa = sequelize.define(name, {
  descricao: {
    type: DataTypes.STRING(280)
  }
}, {
  sequelize: sequelize,
  tableName: name,
  timestamps: false
});

Tarefa.associate = function (models) {
  Tarefa.belongsTo(models.aluno, {
    foreignKey: {
      name: 'id_usuario'
    },
    as: 'usuario'
  });
  Tarefa.belongsTo(models.grupo, {
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'grupo'
  });
};

module.exports = Tarefa;