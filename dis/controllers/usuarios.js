"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUsuario = exports.PutUsuario = exports.PostUsuario = exports.GetUsuario = exports.GetUsuarios = void 0;
const usuarios_1 = __importDefault(require("../models/usuarios"));
//debemos poner el tpo de dato para poder utilizarla en typescript
const GetUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Nos da todos los usuarios en nuestra base de datos
    const usuarios = yield usuarios_1.default.findAll();
    res.status(200).json({ usuarios });
});
exports.GetUsuarios = GetUsuarios;
const GetUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //nos devuelve un usuario usando el id que especificamos
    const usuario = yield usuarios_1.default.findByPk(id);
    if (usuario) {
        res.status(200).json({ usuario });
    }
    else {
        res.status(404).json({
            msg: `El usuario con este id:${id} no existe`,
        });
    }
});
exports.GetUsuario = GetUsuario;
const PostUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //indicamos is existe el correo que nos esta proporciando el body
        const existeEmail = yield usuarios_1.default.findOne({
            where: {
                correo: body.correo
            }
        });
        if (existeEmail) {
            return res.status(404).json({
                msg: `Este Correo ${body.correo} ya existe`
            });
        }
        else {
            const registro = new usuarios_1.default(body);
            yield registro.save();
            res.status(200).json({
                msg: `Usuario Creado`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            msg: "Hable con el Adminstrador"
        });
    }
});
exports.PostUsuario = PostUsuario;
const PutUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const existeUsuario = yield usuarios_1.default.findByPk(id);
        if (!existeUsuario) {
            return res.status(400).json({
                msg: `No existe el usuario con este id:${id}`
            });
        }
        else {
            //Actualizmaos el usuario 
            yield existeUsuario.update(body);
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            msg: "Hable con el Administrador"
        });
    }
});
exports.PutUsuario = PutUsuario;
const DeleteUsuario = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        msg: "Desde el delete de usuario",
        id,
    });
};
exports.DeleteUsuario = DeleteUsuario;
//# sourceMappingURL=usuarios.js.map