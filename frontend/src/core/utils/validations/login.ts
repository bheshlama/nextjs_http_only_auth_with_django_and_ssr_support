import * as zod from "zod";

export const LoginSchema = zod.object({
  email: zod.string().min(1, { message: "Email field cannot be empty" }).email({
    message: "Must be a valid email",
  }),
  password: zod.string().min(1, {
    message: "Password is required",
  }),
});

export type LoginSchemaType = zod.infer<typeof LoginSchema>;
