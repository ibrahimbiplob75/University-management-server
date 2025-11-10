import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";


const academicDepartmentSchema = new Schema<TAcademicDepartment>(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        academicfaculty: {
            type: Schema.Types.ObjectId,
            ref: "academicfeculties",
            required: true
        }
    },
    {
        timestamps: true
    }
);
academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await AcademicDepartmentModel.findOne({
    name: this.name,
  });

  if (isDepartmentExist) {
    throw new Error('Academic Department already exists');
  }

  next();
});


academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  console.log(query);
  const isDepartmentExist = await AcademicDepartmentModel.findOne(query);

  if (!isDepartmentExist) {
    throw new Error('This department does not exist!');
  }

  next();
});

export const AcademicDepartmentModel = model<TAcademicDepartment>("AcademicDepartment", academicDepartmentSchema);
