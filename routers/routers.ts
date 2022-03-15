import {Router} from 'express';
const router=Router();

import {GetUsuarios,GetUsuario,PostUsuario,PutUsuario,DeleteUsuario} from '../controllers/usuarios';

router.get('/',GetUsuarios);
router.get('/:id',GetUsuario);
router.post('/',PostUsuario);
router.put('/',PutUsuario);
router.delete('/',DeleteUsuario)



export default router;
