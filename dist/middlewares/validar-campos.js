"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _expressValidator = require("express-validator");
var validarCampos = function validarCampos(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
};
var _default = validarCampos;
exports["default"] = _default;