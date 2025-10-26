import { TAcademicFeculty } from "./academicFeculty.interface";
import { FecultyModel } from "./academicFeculty.model"

const createAcademicFecultyIntoDB = async (payload: TAcademicFeculty) => {
    const result = await FecultyModel.create(payload);
    return result;
}

const getAllAcademicFecultiesFromDB = async () => {
    const result = await FecultyModel.find();
    return result;
}

const getAcademicFecultyByIdFromDB = async (id: string) => {
    const result = await FecultyModel.findById(id);
    return result;
}

const updateAcademicFecultyByIdInDB = async (id: string, payload: Partial<TAcademicFeculty>) => {
    const result = await FecultyModel.findByIdAndUpdate(id, payload, { new: true });
    return result;
}

const deleteAcademicFecultyByIdInDB = async (id: string) => {
    const result = await FecultyModel.findByIdAndDelete(id);
    return result;
}   

export const AcademicFecultyService = {
    createAcademicFecultyIntoDB,
    getAllAcademicFecultiesFromDB,
    getAcademicFecultyByIdFromDB,
    updateAcademicFecultyByIdInDB,
    deleteAcademicFecultyByIdInDB
}

