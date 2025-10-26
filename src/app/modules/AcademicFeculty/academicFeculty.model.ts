
import { model, Schema } from "mongoose";
import { TAcademicFeculty } from "./academicFeculty.interface";

const FecultySchema = new Schema<TAcademicFeculty>(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

export const FecultyModel = model<TAcademicFeculty>("AcademicFeculty", FecultySchema);