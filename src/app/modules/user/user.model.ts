import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";
import config from "../../config";
import bcrypt from 'bcrypt';

const userSchema=new Schema<Tuser>({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
    },
    needspasswordchange:{
        type:Boolean,
        default:true,
    },
    role:{
        type:String,
        enum:["admin",'student','faculty'],
        required:true,
    },
    status:{
        type:String,
        enum:["in-progress","blocked"],
        default:"in-progress"
    },
    isDeleted:{
        type:Boolean,
        default:false,
    }
},{
    timestamps:true,
})

userSchema.pre('save',async function(next){
    const user=this;
    user.password=await bcrypt.hash(user.password,Number(config.bcrypt_salt_rounds));
    next();
})

userSchema.post('save',function(doc,next){
    doc.password='';
    next();
})

export const User=model<Tuser>('User',userSchema);