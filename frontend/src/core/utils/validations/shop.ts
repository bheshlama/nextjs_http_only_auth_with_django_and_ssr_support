import * as zod from "zod";

const ShopSchema = zod.object({
  logo: zod.string(),
  name: zod.string().min(1, "Name is required"),
  location: zod.string().min(1, "Location is required"),
  email: zod.string().email({ message: "Must be a valid email" }),
  pan_or_vat_front_image: zod.string().min(1, "This field is required"),
  pan_or_vat_back_image: zod.string().min(1, "This field is required"),
});

export default ShopSchema;

export type UserSchemaSchemaType = zod.infer<typeof ShopSchema>;
