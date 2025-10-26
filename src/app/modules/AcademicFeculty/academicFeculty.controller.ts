import CatchAsync from "../../utils/CatchAsync";
import { AcademicFecultyService } from "./academicFeculty.service";

const createAcademicFeculty = CatchAsync(async (req, res) => {
    const payload = req.body;
    const result = await AcademicFecultyService.createAcademicFecultyIntoDB(payload);
    res.status(200).json({
        success: true,
        message: "Academic Feculty created successfully",
         data: result
    });
});

const getAllAcademicFeculties = CatchAsync(async (req, res) => {
    const result = await AcademicFecultyService.getAllAcademicFecultiesFromDB();
    res.status(200).json({
        success: true,
        message: "Academic Feculties retrieved successfully",
         data: result
    });
});

const getAcademicFecultyByIdFromDB = CatchAsync(async(req,res) => {
    const id = req.params.id;
    const result =await AcademicFecultyService.getAcademicFecultyByIdFromDB(id);
    res.status(200).json({
        success: true,
        message: "Academic Feculty retrieved successfully",
         data: result
    });
})

const updateAcademicFecultyById = CatchAsync(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await AcademicFecultyService.updateAcademicFecultyByIdInDB(id, payload);
    res.status(200).json({
        success: true,
        message: "Academic Feculty updated successfully",
         data: result
    });
});

const deleteAcademicFecultyById = CatchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await AcademicFecultyService.deleteAcademicFecultyByIdInDB(id);
    res.status(200).json({
        success: true,
        message: "Academic Feculty deleted successfully",
         data: result
    });
});

export const AcademicFecultyController = {
    createAcademicFeculty,
    getAllAcademicFeculties,
    getAcademicFecultyByIdFromDB,
    updateAcademicFecultyById,
    deleteAcademicFecultyById
};
