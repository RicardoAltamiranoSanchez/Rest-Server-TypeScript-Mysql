//en typeScript se importa igual que en javascript
//y para utilizar express necesitamos instalar las dependecia from
//para que los modulos de node o de express se han compatible con typescrip 
//debemos instalar npm i --save-dev @types/express npm install @types/express --save-dev

import express ,{Application} from 'express';
//destruturacion la Aplication para meterla como tipo dedato
//de cambiamos el nombre para que no nos falle ya noes neceario meter el as de alias
import UsuarioRouters from '../routers/routers';
// para instalar los cors y los lean
// npm i --save-dev @types/cors
import cors from 'cors';
import db from '../db/database';

 class Server{

   //es como java se utilza igual los elementos private y public 
   //indicamos de que tipo va ser privado o public despues el nombre y al ultimo el tipo de dato
   private app:Application;
   private port:string;
   private apiPaths={
     usuarios:"/Api/Usuarios"
   }
   constructor(){
     this.app=express();
     this.port="7000";
   this.DB();
    this.middlewares();
    this.router();
     }
//conexion a base de datos

    router(){
      this.app.use(this.apiPaths.usuarios,UsuarioRouters)
    }
//funciones que se ejecetuan antes de un procedimiento middlewares
  middlewares(){

   //Cors
   this.app.use(cors());

   //lectura de body
   this.app.use(express.json());

   //Carpeta publica
   this.app.use(express.static('public'));

}
//conexion ala base de datos

    async DB(){

      try {
        //nos autenticamos en nuestra base de datos
       await db.authenticate();
       console.log("Conexion ala base de datos existosa");

      } catch (error) {
        
       console.log (`Error en la conexion de la base de datos:${error}`);
      }


     }
//Inciamos el servidor
   Encendiendo(){
     this.app.listen(this.port,()=>{

				console.log(`Iniciando el servicdor en pueto ${this.port}`);

     })



}




}

export default Server;