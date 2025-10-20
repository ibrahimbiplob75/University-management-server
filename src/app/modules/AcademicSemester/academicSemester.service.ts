import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { AcademicSemester } from "./academicSemester.model";
import { TAcademicSemester } from "./academicSemsester.interface";

const createSemesterIntoDB=async(payload:TAcademicSemester)=>{

    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error("Invalid Semester code for the given semester name");
    }
    const result = await AcademicSemester.create(payload);
    return result;
}

const getAllSemesters=async()=>{
    const result= await AcademicSemester.find();
    return result;
}

const getSingleSemester=async(semesterId:string)=>{
    const result= await AcademicSemester.findById(semesterId);
    return result;
}

const deleteSemester=async(semesterId:string)=>{
    await AcademicSemester.findByIdAndDelete(semesterId);
}

const updateSemester = async (semesterId: string, updateData: Partial<TAcademicSemester>) => {
    if (
        updateData.name &&
        updateData.code &&
        academicSemesterNameCodeMapper[updateData.name] !== updateData.code
    ) {
        throw new Error("Invalid Semester code for the given semester name");
    }

    const result = await AcademicSemester.findByIdAndUpdate(
        semesterId,
        updateData,
        { new: true }
    );
    return result;
}

export const AcademicSemesterService = {
  createSemesterIntoDB,
  getAllSemesters,
  getSingleSemester,
  deleteSemester,
  updateSemester
};