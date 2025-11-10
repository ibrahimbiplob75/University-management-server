import CatchAsync from "../../utils/CatchAsync";
import { AcademicDepartmentService } from "./academicDepartment.service";


const createAcademicDepartment = CatchAsync(async (req, res) => {
    const payload = req.body;
    const result = await AcademicDepartmentService.createDepartmentIntoDB(payload);
    res.status(200).json({
        success: true,
        message: "Academic Department created successfully",
         data: result
    });
});

const getAllAcademicDepartments = CatchAsync(async (req, res) => {
    const result = await AcademicDepartmentService.getAllDepartmentFromDB();
    res.status(200).json({
        success: true,
        message: "Academic Departments retrieved successfully",
         data: result
    });
});

const getAcademicDepartmentById = CatchAsync(async(req,res) => {
    const id = req.params.id;
    const result =await AcademicDepartmentService.getAcademicDepartmentByIdFromDB(id);
    res.status(200).json({
        success: true,
        message: "Academic Department retrieved successfully",
         data: result
    });
})

const updateAcademicDepartment = CatchAsync(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await AcademicDepartmentService.updateAcademicDepartmentByIdInDB(id, payload);
    res.status(200).json({
        success: true,
        message: "Academic Feculty updated successfully",
         data: result
    });
});



const deleteAcademicDepartment = CatchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await AcademicDepartmentService.deleteAcademicDepartmentByIdInDB(id);
    res.status(200).json({
        success: true,
        message: "Academic Department deleted successfully",
         data: result
    });
});



export const AcademicDepartmentController = {
    createAcademicDepartment,
    getAllAcademicDepartments,
    getAcademicDepartmentById,
    updateAcademicDepartment,
    deleteAcademicDepartment
};
