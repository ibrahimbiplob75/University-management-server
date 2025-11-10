import z from "zod";

const createAcademicDepartmentZodSchema = z.object({
  body:z.object({
    name: z.string({
      Invalid_required_error: 'Academic Department name is required',
    }),
    academicfaculty:z.string({
        Invalid_required_error: 'Academic Faculty id is required',
    })
  }),
});
const updateAcademicDepartmentZodSchema = z.object({
  body:z.object({
    name: z.string({
      Invalid_required_error: 'Academic Department name is required',
    }).optional(),
    academicfaculty:z.string({
        Invalid_required_error: 'Academic Faculty id is required',
    }).optional()
  }),
});

export { createAcademicDepartmentZodSchema, updateAcademicDepartmentZodSchema };   