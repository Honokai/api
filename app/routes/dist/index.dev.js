"use strict";

var usuario = require('./usuario.routes');

var questao = require('./questao.routes');

var hardskill = require('./hardskill.routes');

var softskill = require('./softskill.routes');

var aluno_hardskills = require('./aluno_hardskills.routes');

var aluno_softskills = require('./aluno_softskill.routes');

var aluno_turma = require('./aluno_turma.routes');

var aluno = require('./aluno.routes');

var curso = require('./curso.routes');

module.exports = function (app) {
  app.use('/api/usuario', usuario);
  app.use('/api/questao', questao);
  app.use('/api/aluno', aluno);
  app.use('/api/hardskill', hardskill);
  app.use('/api/aluno_hardskills', aluno_hardskills);
  app.use('/api/aluno_softskills', aluno_softskills);
  app.use('/api/aluno_turma', aluno_turma);
  app.use('/api/softskill', softskill);
  app.use('/api/curso', curso);
};