import { MAX_IMAGE_FILE_SIZE } from "core/consts";
import * as zod from "zod";

export const CategorySchema = zod.object({
  name: zod.string().min(1, "First Name is required"),
  group: zod.string(),
});

export const SupplierSchema = zod.object({
  name: zod.string().min(1, "First Name is required"),
  image: zod.optional(
    zod
      .union([zod.instanceof(File), zod.string()])
      .nullable()
      .refine(
        file => {
          if (!file || typeof file === "string") return true; // If it's a string or empty, skip MIME check
          return ["image/jpeg", "image/jpg", "image/png"].includes(file.type);
        },
        {
          message: "Only .jpeg, .jpg, and .png files are allowed",
        },
      )
      .refine(
        file => {
          if (!file || typeof file === "string") return true; // Skip size validation for empty or string values
          return file.size <= MAX_IMAGE_FILE_SIZE;
        },
        {
          message: `File size should not exceed ${MAX_IMAGE_FILE_SIZE / (1024 * 1024)}MB`,
        },
      ),
  ),
  email: zod.optional(zod.string()).nullable(),
  phone: zod.optional(zod.coerce.number({ invalid_type_error: "Must be a valid number" })).nullable(), // This will take string number "12245" valid but "123ff" is not valid
  secondary_phone: zod.optional(zod.coerce.number({ invalid_type_error: "Must be a valid number" })).nullable(),
  country: zod.optional(zod.string()).nullable(),
  state_or_province: zod.optional(zod.string()).nullable(),
  district: zod.optional(zod.string()).nullable(),
  postal_code: zod.optional(
    zod.coerce
      .number({ invalid_type_error: "Must be a valid number" })
      .max(9999999999, "Not more than 10 digits")
      .nullable(),
  ),
  city: zod.optional(zod.string()).nullable(),
  street: zod.optional(zod.string()).nullable(),
  website: zod.optional(zod.string()).nullable(),
  active: zod.boolean(),
  comments_or_notes: zod.optional(zod.string()).nullable(),
});

export const CustomerSchema = zod.object({
  name: zod.string().min(1, "First Name is required"),
  email: zod.optional(zod.string()).nullable(),
  phone: zod.optional(zod.coerce.number({ invalid_type_error: "Must be a valid number" })).nullable(), // This will take string number "12245" valid but "123ff" is not valid
  secondary_phone: zod.optional(zod.coerce.number({ invalid_type_error: "Must be a valid number" })).nullable(),
  country: zod.optional(zod.string()).nullable(),
  state_or_province: zod.optional(zod.string()).nullable(),
  district: zod.optional(zod.string()).nullable(),
  // postal_code: zod.optional(
  //   zod
  //     .string()
  //     .max(10, "Not more than 10 digits") // Ensure it has a maximum length of 10
  //     .refine(value => /^\d+$/.test(value), { message: "Must be a valid number" }), // Ensure it contains only digits
  // ),
  postal_code: zod.optional(
    zod.coerce
      .number({ invalid_type_error: "Must be a valid number" })
      .max(9999999999, "Not more than 10 digits")
      .nullable(),
  ),
  city: zod.optional(zod.string()).nullable(),
  street: zod.optional(zod.string()).nullable(),
  website: zod.optional(zod.string()).nullable(),
  active: zod.boolean(),
  comments_or_notes: zod.optional(zod.string()).nullable(),
});

export const ProductSchema = zod.object({
  name: zod.string().min(1, "First Name is required"),
  email: zod.optional(zod.string()).nullable(),
  phone: zod.optional(zod.coerce.number({ invalid_type_error: "Must be a valid number" })).nullable(), // This will take string number "12245" valid but "123ff" is not valid
  secondary_phone: zod.optional(zod.coerce.number({ invalid_type_error: "Must be a valid number" })).nullable(),
  country: zod.optional(zod.string()).nullable(),
  state_or_province: zod.optional(zod.string()).nullable(),
  district: zod.optional(zod.string()).nullable(),
  // postal_code: zod.optional(
  //   zod
  //     .string()
  //     .max(10, "Not more than 10 digits") // Ensure it has a maximum length of 10
  //     .refine(value => /^\d+$/.test(value), { message: "Must be a valid number" }), // Ensure it contains only digits
  // ),
  postal_code: zod.optional(
    zod.coerce
      .number({ invalid_type_error: "Must be a valid number" })
      .max(9999999999, "Not more than 10 digits")
      .nullable(),
  ),
  city: zod.optional(zod.string()).nullable(),
  street: zod.optional(zod.string()).nullable(),
  website: zod.optional(zod.string()).nullable(),
  active: zod.boolean(),
  comments_or_notes: zod.optional(zod.string()).nullable(),
});

export const MaterialSchema = zod.object({
  name: zod.string().min(1, "First Name is required"),
  email: zod.optional(zod.string()).nullable(),
  phone: zod.optional(zod.coerce.number({ invalid_type_error: "Must be a valid number" })).nullable(), // This will take string number "12245" valid but "123ff" is not valid
  secondary_phone: zod.optional(zod.coerce.number({ invalid_type_error: "Must be a valid number" })).nullable(),
  country: zod.optional(zod.string()).nullable(),
  state_or_province: zod.optional(zod.string()).nullable(),
  district: zod.optional(zod.string()).nullable(),
  // postal_code: zod.optional(
  //   zod
  //     .string()
  //     .max(10, "Not more than 10 digits") // Ensure it has a maximum length of 10
  //     .refine(value => /^\d+$/.test(value), { message: "Must be a valid number" }), // Ensure it contains only digits
  // ),
  postal_code: zod.optional(
    zod.coerce
      .number({ invalid_type_error: "Must be a valid number" })
      .max(9999999999, "Not more than 10 digits")
      .nullable(),
  ),
  city: zod.optional(zod.string()).nullable(),
  street: zod.optional(zod.string()).nullable(),
  website: zod.optional(zod.string()).nullable(),
  active: zod.boolean(),
  comments_or_notes: zod.optional(zod.string()).nullable(),
});

export const ShopEssentialSchema = zod.object({
  name: zod.string().min(1, "First Name is required"),
  email: zod.optional(zod.string()).nullable(),
  phone: zod.optional(zod.coerce.number({ invalid_type_error: "Must be a valid number" })).nullable(), // This will take string number "12245" valid but "123ff" is not valid
  secondary_phone: zod.optional(zod.coerce.number({ invalid_type_error: "Must be a valid number" })).nullable(),
  country: zod.optional(zod.string()).nullable(),
  state_or_province: zod.optional(zod.string()).nullable(),
  district: zod.optional(zod.string()).nullable(),
  // postal_code: zod.optional(
  //   zod
  //     .string()
  //     .max(10, "Not more than 10 digits") // Ensure it has a maximum length of 10
  //     .refine(value => /^\d+$/.test(value), { message: "Must be a valid number" }), // Ensure it contains only digits
  // ),
  postal_code: zod.optional(
    zod.coerce
      .number({ invalid_type_error: "Must be a valid number" })
      .max(9999999999, "Not more than 10 digits")
      .nullable(),
  ),
  city: zod.optional(zod.string()).nullable(),
  street: zod.optional(zod.string()).nullable(),
  website: zod.optional(zod.string()).nullable(),
  active: zod.boolean(),
  comments_or_notes: zod.optional(zod.string()).nullable(),
});

export type AvailableTableDrawerSchemaType =
  | zod.infer<typeof CategorySchema>
  | zod.infer<typeof SupplierSchema>
  | zod.infer<typeof CustomerSchema>
  | zod.infer<typeof ProductSchema>
  | zod.infer<typeof MaterialSchema>
  | zod.infer<typeof ShopEssentialSchema>;
