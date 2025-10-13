/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import  { NextFunction, Request, Response } from 'express';

const GlobalErrorHandler = ((err:any, req:Request, res:Response, next:NextFunction)=>{
  res.status(500).json({
    success:false,
    message:"Something went wrong",
    error:err.message,
    stack:err.stack
  })
})

export default GlobalErrorHandler;