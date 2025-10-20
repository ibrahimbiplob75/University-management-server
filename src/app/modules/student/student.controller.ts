/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { StudentServices } from './student.service';
import sendResponse from '../../utils/ResponseHandaller';
import httpStatus from "http-status-codes";
import CatchAsync from '../../utils/CatchAsync';

// const CatchAsync=(fn:RequestHandler)=>{
//     return (req:Request,res:Response,next:NextFunction)=>{
//         Promise.resolve(fn(req,res,next)).catch(err=>next(err));
//     }
// }

const getAllStudents = CatchAsync(async (req, res,next) => {
  
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:"Students are retrieved successfully",
      data:result
    })
});

const getSingleStudent = CatchAsync(async (req, res,next) => {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
});

const deleteStudent = CatchAsync(async (req, res, next) => {
    const { studentId } = req.params;

    await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student is deleted successfully',
    });
});

export const StudentControllers = {
    getAllStudents,
    getSingleStudent,
    deleteStudent
};
