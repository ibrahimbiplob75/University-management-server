import config from '../../config';
import { User as UserModel } from './user.model';
import { Tuser } from './user.interface';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { AcademicSemester } from '../AcademicSemester/academicSemester.model';
import { generateStudentId } from './user.utils';




const createUserIntoDB = async (password: string, payload: TStudent) => {
    
    const userData:Partial<Tuser>={};

    if(!password){
        password=config.default_user_password as string;
    }
    else{
        userData.password=password;
    }

    userData.role="student";

    // find academic semester info
    const AdmissionSemester = await AcademicSemester.findById(
        payload.admissionSemester,
    );

    //set  generated id
    userData.id = await generateStudentId(AdmissionSemester);

    const newUser = await UserModel.create(userData);

    if (Object.keys(newUser).length) {
        payload.id = newUser.id;
        payload.user = newUser._id;

        const newStudent = await StudentModel.create(payload);

        return newStudent;
    }
    
};

export const UserServices = {
  createUserIntoDB,
};