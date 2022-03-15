"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUsuario = exports.PutUsuario = exports.PostUsuario = exports.GetUsuario = exports.GetUsuarios = void 0;
//debemos poner el tpo de dato para poder utilizarla en typescript
const GetUsuarios = (req, res) => {
    res.status(200).json({
        msg: "Desde el get de Usuario"
    });
};
exports.GetUsuarios = GetUsuarios;
const GetUsuario = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        msg: "Desde el get de usuario con id",
        id
    });
};
exports.GetUsuario = GetUsuario;
const PostUsuario = (req, res) => {
    const { body } = req;
    res.status(200).json({
        msg: "Desde el post de usuario",
        body
    });
};
exports.PostUsuario = PostUsuario;
const PutUsuario = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        msg: "Desde el put de usuario",
        id,
    });
};
exports.PutUsuario = PutUsuario;
const DeleteUsuario = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        msg: "Desde el delete de usuario",
        id
    });
};
exports.DeleteUsuario = DeleteUsuario;
//# sourceMappingURL=usuarios.js.map