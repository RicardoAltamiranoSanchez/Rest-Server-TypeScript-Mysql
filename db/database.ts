//instalacion de sequelize npm install --save sequelize
//instalacion para mysql npm install --save mysql2 documentacion https://sequelize.org/v6/manual/getting-started.html
//documentacion de sequelize https://sequelize.org/v6/
import {Sequelize} from 'sequelize';
//importamoss Sequelize para utilizarlo  y utilizar el mysql
//primero ponermos el nombre de la base de datos(Node),despues el usurio (root) y despues contraseña('')
const db=new Sequelize('Node','root','',{
//  que tipo de conexion la vamos a vincular
   host:'localhost',
//el tipo de base de datos que vamos a utilizar por eso instalamos el mysql2
	dialect:'mysql',
//esto quita la respuesta  de la base de datos todas las modificaciones que estemos haciendo
   // logging:false

})
export default db;
