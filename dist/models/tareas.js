"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));
var tareaSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  done: {
    type: Boolean,
    "default": false
  }
  // PARA ENVITAR QUE APAREZCA EL --V  Y EL TIMESTAMPS PARA QUE DEVUELVA CUANDO SE CREO
}, {
  versionKey: false,
  timestamps: true
});

// PAGINACION
tareaSchema.plugin(_mongoosePaginateV["default"]);
var _default = (0, _mongoose.model)('Tarea', tareaSchema);
exports["default"] = _default;