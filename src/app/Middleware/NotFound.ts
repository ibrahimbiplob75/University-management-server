/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextFunction, Request, Response } from "express";

const NotFoundHandler = ((req:Request, res:Response, next:NextFunction)=>{
  res.status(404).json({
    success:false,
    message:"Resource not found"
  })
})

export default NotFoundHandler;
