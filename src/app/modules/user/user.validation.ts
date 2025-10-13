import { z } from "zod";

const userSchema =z.object({
    id:z.string({required_error:"id is required"}),
    password:z.string({}),
    // role:z.enum(["admin",'student','faculty'],{
    //     required_error:"role is required"
    // }),
    // status:z.enum(["in-progress","blocked"]).optional(),
    // isDeleted:z.boolean().optional().default(false),
})

export const uservalidation ={
    uservalidationSchema:userSchema
}