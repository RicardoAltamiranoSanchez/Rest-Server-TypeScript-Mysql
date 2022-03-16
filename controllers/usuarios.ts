import { Request, Response } from "express";
import Usuario from "../models/usuarios";
//debemos poner el tpo de dato para poder utilizarla en typescript
export const GetUsuarios = async (req: Request, res: Response) => {
	//Nos da todos los usuarios en nuestra base de datos
	const usuarios = await Usuario.findAll();

	res.status(200).json({ usuarios });
};
export const GetUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	//nos devuelve un usuario usando el id que especificamos
	const usuario = await Usuario.findByPk(id);
	if (usuario) {
		res.status(200).json({ usuario });
	} else {
		res.status(404).json({
			msg: `El usuario con este id:${id} no existe`,
		});
	}
};
export const PostUsuario = async (req: Request, res: Response) => {
	const { body } = req;

	try {

		//indicamos is existe el correo que nos esta proporciando el body
		const existeEmail = await Usuario.findOne({
			where: {
				correo: body.correo

			}
		})
		if (existeEmail) {
			return res.status(404).json({
				msg: `Este Correo ${body.correo} ya existe`
			})

		} else {
			//en sequelize no podemos utilizar en new como una clase utilizamos el create para crear un nuevo usuario
			// y lo guardamos automaticamente			
			const registro = await Usuario.create(body);


			res.status(200).json({
				msg: `Usuario Creado`

			})
		}


	} catch (error) {
		console.log(error);
		res.status(400).json({
			msg: "Hable con el Adminstrador"
		})


	}


};
export const PutUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const existeUsuario = await Usuario.findByPk(id);
		if (!existeUsuario) {
			return res.status(400).json({
				msg: `No existe el usuario con este id:${id}`

			})
		} else {
			//Actualizmaos el usuario 
			await existeUsuario.update(body);
		}

	} catch (error) {
		console.log(error);
		res.status(404).json({
			msg: "Hable con el Administrador"

		})

	}




};

export const DeleteUsuario = (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const existeUsuario = await Usuario.findByPk(id);
		if (!existeUsuario) {
			return res.status(400).json({
				msg: `No existe el usuario con este id:${id}`

			})
		} else {
			//Eliminamos el Usuario 
//		   await existeUsuario.destroy();//para eliminarlo permanentemente
       await  existeUsuario.update({estado:false});
      //eliminamos el usuario solo para que no se muestre
      res.status(200).json({
			msg:`Usuario Eliminado `
})

		}

	} catch (error) {
		console.log(error);
		res.status(404).json({
			msg: "Hable con el Administrador"

		})

};
