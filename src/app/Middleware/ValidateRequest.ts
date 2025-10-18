import  { Request,Response,NextFunction } from 'express';

const ValidateRequest =(schema:AnyZodObject)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{

        try{
            await schema.parseAsync({body:req.body});
            return next();
        }catch(err){
            next(err);
        }    
    }
}
export default ValidateRequest;