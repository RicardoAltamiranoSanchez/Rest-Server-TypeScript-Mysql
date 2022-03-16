"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//DataTypes es para indicar los tipos que necesitan nuestros campos
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../db/database"));
//defines define la tabla que vamos a consultar o modicar
const Usuario = database_1.default.define('usuarios', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Usuario;
//# sourceMappingURL=usuarios.js.map