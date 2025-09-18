import * as zod from "zod";

const UserSchema = zod.object({
  image: zod.string().min(1, "Image is required"),
  first_name: zod.string().min(1, "First Name is required"),
  middle_name: zod.optional(zod.string()),
  last_name: zod.string().min(1, "Last Name is required"),
  email: zod.string().min(1, "Email field cannot be empty").email({ message: "Must be a valid email" }),
  contact: zod.optional(zod.coerce.number({ invalid_type_error: "Must be a valid number" })), // This will take string number "12245" valid but "123ff" is not valid
  citizenship_front_image: zod.string().min(1, "This field is required"),
  citizenship_back_image: zod.string().min(1, "This field is required"),
});

export default UserSchema;

export type UserSchemaSchemaType = zod.infer<typeof UserSchema>;
