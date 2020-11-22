"use strict";

var models = require("../db/models");
/**
 * Lista todos os cadastros na tabela de hardskill
 * @param {*} req 
 * @param {*} res 
 */


exports.index = function _callee() {
  var resultado;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(models.hardskill.findAll());

        case 2:
          resultado = _context.sent;
          return _context.abrupt("return", resultado);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};
/**
 * Cria um registro na tabela hardskill
 * @param {*} req 
 * @param {*} res 
 */


exports.create = function _callee2(hardskill) {
  var resultado;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(models.hardskill.create(hardskill));

        case 2:
          resultado = _context2.sent;
          return _context2.abrupt("return", resultado);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};
/**
 * Encontra um registro na tabela usuário
 * @param {*} req 
 * @param {*} res 
 */


exports.findOne = function _callee3(id) {
  var resultado;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(models.hardskill.findByPk(id));

        case 2:
          resultado = _context3.sent;
          return _context3.abrupt("return", resultado);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};
/**
 * Encontra um registro na tabela usuário
 * @param {*} req.query.email
 * @param {*} res 
 */


exports.destroy = function _callee4(id) {
  var resultado;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(models.hardskill.destroy({
            where: {
              id: id
            }
          }));

        case 2:
          resultado = _context4.sent;
          return _context4.abrupt("return", resultado);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
};
/**
 * 
 * @param {*} req.body.email email para clausula WHERE
 * @param {*} req.body.nascimento data de nascimento a ser atualizada
 * @param {*} res 
 */


exports.update = function _callee5(hardskill, id) {
  var resultado;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(models.hardskill.update(hardskill, {
            where: {
              id: id
            }
          }));

        case 2:
          resultado = _context5.sent;
          return _context5.abrupt("return", resultado);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
};