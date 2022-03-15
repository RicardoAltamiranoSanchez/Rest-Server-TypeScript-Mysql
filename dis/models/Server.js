"use strict";
//en typeScript se importa igual que en javascript
//y para utilizar express necesitamos instalar las dependecia from
//para que los modulos de node o de express se han compatible con typescrip 
//debemos instalar npm i --save-dev @types/express npm install @types/express --save-dev
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//destruturacion la Aplication para meterla como tipo dedato
//de cambiamos el nombre para que no nos falle ya noes neceario meter el as de alias
const routers_1 = __importDefault(require("../routers/routers"));
// para instalar los cors y los lean
// npm i --save-dev @types/cors
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: "/Api/Usuarios"
        };
        this.app = (0, express_1.default)();
        this.port = "7000";
        this.middlewares();
        this.router();
    }
    //conexion a base de datos
    router() {
        this.app.use(this.apiPaths.usuarios, routers_1.default);
    }
    //funciones que se ejecetuan antes de un procedimiento middlewares
    middlewares() {
        //Cors
        this.app.use((0, cors_1.default)());
        //lectura de body
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    //Inciamos el servidor
    Encendiendo() {
        this.app.listen(this.port, () => {
            console.log(`Iniciando el servicdor en pueto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map