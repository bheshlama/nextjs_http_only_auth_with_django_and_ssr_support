import { passwordSchema } from "core/utils/validations/authentication";
import AuthFormSchema from "core/utils/validations/authentication";
import * as zod from "zod";

export const forgotPasswordSchema = zod.object({
  email: zod.string().min(1, "Email field cannot be empty").email({ message: "Must be a valid email" }),
});

const resetPasswordSchema = AuthFormSchema.pick({ new_password: true, confirm_password: true }).refine(
  data => data.new_password === data.confirm_password,
  {
    message: "Passwords don't match",
    path: ["confirm_password"], // path of error
  },
);

export const changePasswordSchema = zod
  .object({
    old_password: zod.string().min(1, { message: "Old password is required" }),
    new_password: passwordSchema,
    confirm_password: zod.string().min(1, { message: "Confirm password is required" }),
  })
  .refine(data => data.new_password !== data.old_password, {
    message: "New password cannot be the same as the old password",
    path: ["new_password"], // Path of the error in the schema
  })
  .refine(data => data.new_password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"], // Path of the error in the schema
  });

export default resetPasswordSchema;

export type ResetPasswordSchemaType = zod.infer<typeof resetPasswordSchema>;
