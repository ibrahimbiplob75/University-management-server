import z from "zod";

const AcademicFecultyValidation = z.object({
  name: z.string({
    required_error: 'Academic Feculty name is required',
  }),
});
    
export default AcademicFecultyValidation;
