import {Request,Response} from 'express'

//debemos poner el tpo de dato para poder utilizarla en typescript
export const GetUsuarios=(req:Request,res:Response)=>{

	res.status(200).json({
			msg:"Desde el get de Usuario"

     })

}
export const GetUsuario=(req:Request,res:Response)=>{

const {id}=req.params;
    res.status(200).json({
		msg:"Desde el get de usuario con id",
       id

    })


}
export const PostUsuario=(req:Request,res:Response)=>{
      const {body}=req;
		res.status(200).json({
			msg:"Desde el post de usuario",
         body
		})


}
export const PutUsuario=(req:Request,res:Response)=>{
const {id}=req.params;
		res.status(200).json({

			msg:"Desde el put de usuario",
			id,
})
}


export const DeleteUsuario=(req:Request,res:Response)=>{
const {id} =req.params;
      res.status(200).json({
        msg:"Desde el delete de usuario",
		id
     })

 }