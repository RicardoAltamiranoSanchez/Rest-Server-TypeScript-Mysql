"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const usuarios_1 = require("../controllers/usuarios");
router.get('/', usuarios_1.GetUsuarios);
router.get('/:id', usuarios_1.GetUsuario);
router.post('/', usuarios_1.PostUsuario);
router.put('/', usuarios_1.PutUsuario);
router.delete('/', usuarios_1.DeleteUsuario);
exports.default = router;
//# sourceMappingURL=routers.js.map