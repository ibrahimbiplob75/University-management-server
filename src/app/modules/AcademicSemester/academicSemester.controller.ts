/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import sendResponse from '../../utils/ResponseHandaller';
import httpStatus from "http-status-codes";
import CatchAsync from '../../utils/CatchAsync';
import { AcademicSemesterService } from './academicSemester.service';


const CreateSemesters = CatchAsync(async (req, res,next) => {

    const result= await AcademicSemesterService.createSemesterIntoDB(req.body);
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:" created semester successfully",
      data:result
    })
});

const getAllSemesters = CatchAsync(async (req, res, next) => {
    const result = await AcademicSemesterService.getAllSemesters();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All semesters retrieved successfully',
        data: result
    });
});

const getSingleSemester = CatchAsync(async (req, res,next) => {
    const { semesterId } = req.params;

    const result = await AcademicSemesterService.getSingleSemester(semesterId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semester retrieved successfully',
        data: result
    });
});

const updateSemester = CatchAsync(async (req, res, next) => {
    const { semesterId } = req.params;
  const result = await AcademicSemesterService.updateSemester(
    semesterId,
    req.body,
  );


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semester updated successfully',
        data: result
    });
});

const deleteSemester = CatchAsync(async (req, res, next) => {
    const { semesterId } = req.params;

    await AcademicSemesterService.deleteSemester(semesterId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semester deleted successfully',
    });
});

export const academicSemesterControllers = {
    CreateSemesters,
    getSingleSemester,
    deleteSemester,
    getAllSemesters,
    updateSemester
};
