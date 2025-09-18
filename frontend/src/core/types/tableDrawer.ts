import type { IInputProps } from "shad/components/ui/input";

export type FormInputType = "email" | "password" | "text" | "number" | "file" | "previewFile" | "textarea" | "switch";

export type FormSelectType = "select" | "interactiveSelect";

export type FileExplorerFormInputType = {
  name: string;
  group: string;
};

type CommonFormFields = {
  name: string;
  image?: string;
  email?: string;
  phone?: number;
  secondary_phone?: number;
  country?: number;
  state_or_province?: number;
  district?: number;
  postal_code?: number;
  city?: number;
  street?: number;
  website?: number;
  active: number;
  comments_or_notes?: number;
};

export type ProductFormInputType = CommonFormFields & {
  code: number;
};

export type MaterialFormInputType = CommonFormFields & {
  code: number;
};

export type ShopEssentialFormInputType = CommonFormFields & {
  code: number;
};

export type SupplierFormInputType = CommonFormFields;

export type CustomerFormInputType = CommonFormFields;

export type AvailableTableDrawerInputKeys =
  | keyof FileExplorerFormInputType
  | keyof ProductFormInputType
  | keyof MaterialFormInputType
  | keyof ShopEssentialFormInputType
  | keyof SupplierFormInputType
  | keyof CustomerFormInputType;

export type AvailableTableDrawerInputType =
  | FileExplorerFormInputType
  | ProductFormInputType
  | MaterialFormInputType
  | ShopEssentialFormInputType
  | SupplierFormInputType
  | CustomerFormInputType;

export type TableDrawerFormItemTypes<T extends string> = Omit<IInputProps, "name" | "type" | "ref"> & {
  name: T;
  type: FormInputType | FormSelectType;
  title: string;
  options?: Array<{ value: string; label: string }>;
  className?: string;
};

// export type TableDrawerFormItemTypes<T extends string> =
//   | (Omit<IInputProps, "name" | "type" | "ref"> & {
//       name: T;
//       type: FormInputType;
//       title: string;
//       className?: string;
//     })
//   | {
//       name: T;
//       type: FormSelectType;
//       options?: Array<{ value: string; label: string }>;
//       title: string;
//       className?: string;
//     };

export enum DrawerType {
  CATEGORY = "category",
  PRODUCT = "product",
  MATERIAL = "material",
  SHOP_ESSENTIAL = "shopEssential",
  SUPPLIER = "supplier",
  CUSTOMER = "customer",
}
