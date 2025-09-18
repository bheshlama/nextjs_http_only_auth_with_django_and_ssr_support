import * as zod from "zod";

export const passwordSchema = zod
  .string()
  .min(1, "Password field cannot be empty")
  .min(8, { message: "Password must be at least 8 characters long." })
  .refine(password => /[a-z]/.test(password), {
    message: "Password must contain at least one lowercase letter.",
  })
  .refine(password => /[A-Z]/.test(password), {
    message: "Password must contain at least one uppercase letter.",
  })
  .refine(password => /\d/.test(password), {
    message: "Password must contain at least one number.",
  })
  .refine(password => /[@$!%*?&]/.test(password), {
    message: "Password must contain at least one special character.",
  });

const AuthFormSchema = zod.object({
  first_name: zod.string().min(1, "First Name is required"),
  middle_name: zod.optional(zod.string()),
  last_name: zod.string().min(1, "Last Name is required"),
  email: zod.string().min(1, "Email field cannot be empty").email({ message: "Must be a valid email" }),
  contact: zod.optional(zod.coerce.number({ invalid_type_error: "Must be a valid number" })), // This will take string number "12245" valid but "123ff" is not valid
  password: passwordSchema,
  remember_me: zod.boolean(),
  new_password: passwordSchema,
  confirm_password: zod.string(),
});

export default AuthFormSchema;

export type AuthFormSchemaType = zod.infer<typeof AuthFormSchema>;
