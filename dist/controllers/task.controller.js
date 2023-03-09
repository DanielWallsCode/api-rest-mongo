"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerTareasCompletadas = exports.obtenerTareas = exports.obtenerTarea = exports.crearTarea = exports.completarTarea = exports.borrarTarea = exports.actualizarTarea = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _tareas = _interopRequireDefault(require("../models/tareas.js"));
var _getPagination2 = require("../libs/getPagination.js");
var obtenerTareas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, title, condicion, _getPagination, limit, offset, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$query = req.query, size = _req$query.size, page = _req$query.page, title = _req$query.title;
          condicion = title ? {
            title: {
              $regex: new RegExp(title),
              $options: 'i'
            }
          } : {};
          _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
          _context.next = 6;
          return _tareas["default"].paginate(condicion, {
            offset: offset,
            limit: limit
          });
        case 6:
          data = _context.sent;
          res.json({
            totalItems: data.totalDocs,
            tasks: data.docs,
            totalPages: data.total,
            currentPage: data.page - 1
          });
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            msg: 'Algo ha salido mal',
            error: _context.t0
          }));
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function obtenerTareas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.obtenerTareas = obtenerTareas;
var obtenerTarea = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, tarea;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return _tareas["default"].findById(id);
        case 4:
          tarea = _context2.sent;
          if (tarea) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            msg: "La atrea con el id ".concat(id, " no existe")
          }));
        case 7:
          res.json(tarea);
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            msg: 'Algo ha salido mal',
            error: _context2.t0
          }));
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function obtenerTarea(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.obtenerTarea = obtenerTarea;
var obtenerTareasCompletadas = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var tareas;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _tareas["default"].find({
            done: true
          });
        case 3:
          tareas = _context3.sent;
          res.json(tareas);
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            msg: 'Algo ha salido mal',
            error: _context3.t0
          }));
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function obtenerTareasCompletadas(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.obtenerTareasCompletadas = obtenerTareasCompletadas;
var crearTarea = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, title, description, nuevaTarea, tarea;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body = req.body, title = _req$body.title, description = _req$body.description;
          nuevaTarea = new _tareas["default"]({
            title: title,
            description: description
          });
          _context4.next = 5;
          return nuevaTarea.save();
        case 5:
          tarea = _context4.sent;
          res.status(201).json({
            msg: 'Tarea Creada',
            tarea: tarea
          });
          _context4.next = 12;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            msg: 'Algo ha salido mal',
            error: _context4.t0
          }));
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function crearTarea(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.crearTarea = crearTarea;
var actualizarTarea = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, title, description, tarea;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description;
          _context5.next = 5;
          return _tareas["default"].findByIdAndUpdate(id, {
            title: title,
            description: description
          });
        case 5:
          tarea = _context5.sent;
          res.json({
            tarea: tarea
          });
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            msg: 'Algo ha salido mal',
            error: _context5.t0
          }));
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function actualizarTarea(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.actualizarTarea = actualizarTarea;
var completarTarea = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, tarea;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 4;
          return _tareas["default"].findByIdAndUpdate(id, {
            done: true
          });
        case 4:
          tarea = _context6.sent;
          res.json(tarea);
          _context6.next = 11;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).json({
            msg: 'Algo ha salido mal',
            error: _context6.t0
          }));
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return function completarTarea(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.completarTarea = completarTarea;
var borrarTarea = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, tareaEliminada;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          _context7.next = 4;
          return _tareas["default"].findByIdAndDelete(id);
        case 4:
          tareaEliminada = _context7.sent;
          res.json({
            msg: 'Tarea eliminada correctamente',
            tareaEliminada: tareaEliminada
          });
          _context7.next = 11;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(500).json({
            msg: 'Algo ha salido mal',
            error: _context7.t0
          }));
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return function borrarTarea(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.borrarTarea = borrarTarea;