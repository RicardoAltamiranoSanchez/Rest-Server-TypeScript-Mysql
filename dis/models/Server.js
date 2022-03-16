"use strict";
//en typeScript se importa igual que en javascript
//y para utilizar express necesitamos instalar las dependecia from
//para que los modulos de node o de express se han compatible con typescrip 
//debemos instalar npm i --save-dev @types/express npm install @types/express --save-dev
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
const express_1 = __importDefault(require("express"));
//destruturacion la Aplication para meterla como tipo dedato
//de cambiamos el nombre para que no nos falle ya noes neceario meter el as de alias
const routers_1 = __importDefault(require("../routers/routers"));
// para instalar los cors y los lean
// npm i --save-dev @types/cors
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("../db/database"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: "/Api/Usuarios"
        };
        this.app = (0, express_1.default)();
        this.port = "7000";
        this.DB();
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
    //conexion ala base de datos
    DB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //nos autenticamos en nuestra base de datos
                yield database_1.default.authenticate();
                console.log("Conexion ala base de datos existosa");
            }
            catch (error) {
                console.log(`Error en la conexion de la base de datos:${error}`);
            }
        });
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