import config from '../../config';
import { User as UserModel } from './user.model';
import { Tuser } from './user.interface';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';



const createUserIntoDB = async (password: string, studentdata: TStudent) => {
    
    const userData:Partial<Tuser>={};

    if(!password){
        password=config.default_user_password as string;
    }
    else{
        userData.password=password;
    }

    userData.role="student";

    userData.id="2025016204";

    const newUser = await UserModel.create(userData);
    console.log(newUser,studentdata);
    
    if(Object.keys(newUser).length){
        studentdata.id=newUser.id;
        studentdata.user=newUser._id;

        const newStudent = await StudentModel.create(studentdata);

        return newStudent;
    }
    
};

export const UserServices = {
  createUserIntoDB,
};