"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var sequelize = require('../index').getConnection();

var name = require('path').basename(__filename.replace('.model', ''), '.js');

var QuestaoDia = sequelize.define(name, {
  descricao: {
    type: DataTypes.STRING(280)
  }
}, {
  sequelize: sequelize,
  tableName: name,
  timestamps: false
});

QuestaoDia.associate = function (models) {
  QuestaoDia.belongsTo(models.questao, {
    foreignKey: {
      name: 'id_questao'
    },
    as: 'questao'
  });
  QuestaoDia.belongsTo(models.aluno, {
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'aluno'
  });
};

module.exports = QuestaoDia;