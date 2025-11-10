import z from "zod";

const CreateAcademicFecultyValidation = z.object({
  body:z.object({
    name: z.string({
      required_error: 'Academic Feculty name is required',
    }),
  }),
});

const UpdateAcademicFecultyValidation = z.object({
  body: z.object({
    name: z.string().optional(),
  }),
});

export { CreateAcademicFecultyValidation, UpdateAcademicFecultyValidation };
