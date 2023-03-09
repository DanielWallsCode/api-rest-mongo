"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _express = require("express");
var _expressValidator = require("express-validator");
var _taskController = require("../controllers/task.controller.js");
var _validarCampos = _interopRequireDefault(require("../middlewares/validar-campos.js"));
var router = (0, _express.Router)();
exports.router = router;
router.get('/', _taskController.obtenerTareas);
router.get('/completadas', _taskController.obtenerTareasCompletadas);
router.get('/:id', [(0, _expressValidator.check)('id', 'el id no es un id valido').isMongoId(), _validarCampos["default"]], _taskController.obtenerTarea);
router.post('/', [(0, _expressValidator.check)('title', 'el titulo es obligatorio').notEmpty(), (0, _expressValidator.check)('description', 'La decripcion es obligatoria').notEmpty(), _validarCampos["default"]], _taskController.crearTarea);
router.put('/actualizar/:id', [(0, _expressValidator.check)('title', 'El titulo es obligatorio').notEmpty(), (0, _expressValidator.check)('description', 'la descripcion es obligatoria').notEmpty(), _validarCampos["default"]], _taskController.actualizarTarea);
router.put('/completar/:id', [(0, _expressValidator.check)('id', 'el id no es valido').isMongoId(), _validarCampos["default"]], _taskController.completarTarea);
router["delete"]('/borrar/:id', _taskController.borrarTarea);