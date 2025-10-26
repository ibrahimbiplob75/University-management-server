/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { UserServices } from "./user.service";
import sendResponse from "../../utils/ResponseHandaller";
import httpStatus from "http-status-codes"
import CatchAsync from "../../utils/CatchAsync";


const createUser = CatchAsync(async (req, res, next) => {
    const { password, student: studentdata } = req.body;

    const result = await UserServices.createUserIntoDB(password, studentdata);
    

    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:"user created successfully",
      data:result
    })
  });

// const createUser:RequestHandler = async (req, res, next) => {
//   try {
    
//     const { password, student: studentdata } = req.body;

//     const result = await UserServices.createUserIntoDB(password, studentdata);
    

//     sendResponse(res,{
//       statusCode:httpStatus.OK,
//       success:true,
//       message:"user created successfully",
//       data:result
//     })
//   } catch (err) {
//     next(err);
//   }
// };


// const getAllUsers:RequestHandler=async(req,res,next)=>{
//     try {
//         const result = await UserServices.getAllUsersFromDB();
//         sendResponse(res,{
//             statusCode:httpStatus.OK,
//             success:true,
//             message:"users retrieved successfully",
//             data:result
//         })
//     } catch (err) {
//         next(err);
//     }
// }
// const getSingleUser:RequestHandler=async(req,res,next)=>{
//     try {
//         const { id } = req.params;
//         const result = await UserServices.getUserFromDB(id);
//         sendResponse(res,{
//             statusCode:httpStatus.OK,
//             success:true,
//             message:"user retrieved successfully",
//             data:result
//         })
//     } catch (err) {
//         next(err);
//     }
// }

export const UserControllers={
    createUser,
    // getAllUsers,
    // getSingleUser
}