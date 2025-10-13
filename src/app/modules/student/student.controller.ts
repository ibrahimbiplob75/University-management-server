import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/ResponseHandaller';
import httpStatus from "http-status-codes";



const getAllStudents = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:"Students are retrieved successfully",
      data:result
    })
  } catch (err) {
    next(err);
  }
};

const getSingleStudent = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
 
  getAllStudents,
  getSingleStudent,
};
