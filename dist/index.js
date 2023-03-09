"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
require("./databse.js");
_app["default"].listen(_app["default"].get('port'), function () {
  console.log('Servidor Corriendo en el puerto', _app["default"].get('port'));
});