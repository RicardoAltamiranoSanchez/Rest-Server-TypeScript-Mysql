//DataTypes es para indicar los tipos que necesitan nuestros campos
import {DataTypes} from 'sequelize';
import db from '../db/database';
//defines define la tabla que vamos a consultar o modicar
const Usuario=db.define('usuarios',{
   nombre:{
     type:DataTypes.STRING
    },
	correo:{
	type:DataTypes.STRING
    },
	estado:{
	type:DataTypes.BOOLEAN
}
  
});


export default Usuario;