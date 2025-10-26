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

const getSingleSemester=async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const deleteSemester=async(semesterId:string)=>{
    await AcademicSemester.findByIdAndDelete(semesterId);
}

const updateSemester = async (id: string, payload: Partial<TAcademicSemester>) => {
    if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
}

export const AcademicSemesterService = {
  createSemesterIntoDB,
  getAllSemesters,
  getSingleSemester,
  deleteSemester,
  updateSemester
};