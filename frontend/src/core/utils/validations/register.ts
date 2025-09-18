import AuthFormSchema from "core/utils/validations/authentication";

import * as zod from "zod";

const RegisterSchema = AuthFormSchema.omit({ remember_me: true, new_password: true, confirm_password: true });

export default RegisterSchema;

export type RegistrationSchemaType = zod.infer<typeof RegisterSchema>;