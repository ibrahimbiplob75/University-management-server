import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartmentModel as DepartmentModel } from "./academicDepartment.model";
import { FecultyModel } from "../AcademicFeculty/academicFeculty.model";

const createDepartmentIntoDB = async (payload: TAcademicDepartment) => {
    // ensure provided academic faculty id exists
    const facultyId = payload.academicfaculty as unknown as string;
    const isFacultyExist = await FecultyModel.findById(facultyId);
    if (!isFacultyExist) {
        throw new Error('Academic faculty not found');
    }

    const result = await DepartmentModel.create(payload);
    return result;
}

const getAllDepartmentFromDB = async () => {
    const result = await DepartmentModel.find();
    return result;
}

const getAcademicDepartmentByIdFromDB = async (id: string) => {
    const result = await DepartmentModel.findById(id);
    return result;
}

const updateAcademicDepartmentByIdInDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await DepartmentModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
}

const deleteAcademicDepartmentByIdInDB = async (id: string) => {
    const result = await DepartmentModel.findByIdAndDelete(id);
    return result;
}   

export const AcademicDepartmentService = {
    createDepartmentIntoDB,
    getAllDepartmentFromDB,
    getAcademicDepartmentByIdFromDB,
    updateAcademicDepartmentByIdInDB,
    deleteAcademicDepartmentByIdInDB
}

