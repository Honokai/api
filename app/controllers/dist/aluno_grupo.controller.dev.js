"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var models = require("../db/models");

exports.create = function _callee(obj, id_aluno) {
  var novo_grupo, aluno, h, grupo, _ref, _ref2, resultado;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          novo_grupo = [];
          _context.next = 3;
          return regeneratorRuntime.awrap(models.aluno.findOne({
            where: {
              id: id_aluno
            }
          }));

        case 3:
          aluno = _context.sent;
          _context.t0 = regeneratorRuntime.keys(obj.grupo);

        case 5:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 19;
            break;
          }

          h = _context.t1.value;
          grupo = obj.grupo[h];
          console.log('--------------objeto--------------');
          console.log(obj);
          console.log('--------------objeto--------------');
          _context.next = 13;
          return regeneratorRuntime.awrap(models.grupo.findOrCreate({
            where: grupo
          })["catch"](function (err) {
            return console.log(err);
          }));

        case 13:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          resultado = _ref2[0];
          novo_grupo.push(resultado.id);
          _context.next = 5;
          break;

        case 19:
          aluno.addGrupo(novo_grupo)["catch"](function (err) {
            console.log(err);
          });
          return _context.abrupt("return", true);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.destroy = function _callee2(obj, id_aluno) {
  var novo_grupo, aluno, h, grupo, _ref3, _ref4, resultado;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          novo_grupo = [];
          _context2.next = 3;
          return regeneratorRuntime.awrap(models.aluno.findOne({
            where: {
              id: id_aluno
            }
          }));

        case 3:
          aluno = _context2.sent;
          _context2.t0 = regeneratorRuntime.keys(obj.grupo);

        case 5:
          if ((_context2.t1 = _context2.t0()).done) {
            _context2.next = 16;
            break;
          }

          h = _context2.t1.value;
          grupo = obj.grupo[h];
          _context2.next = 10;
          return regeneratorRuntime.awrap(models.grupo.findOrCreate({
            where: grupo
          })["catch"](function (err) {
            console.log(err);
          }));

        case 10:
          _ref3 = _context2.sent;
          _ref4 = _slicedToArray(_ref3, 1);
          resultado = _ref4[0];
          novo_grupo.push(resultado.id);
          _context2.next = 5;
          break;

        case 16:
          aluno.removeGrupo(novo_grupo);
          return _context2.abrupt("return", true);

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  });
};