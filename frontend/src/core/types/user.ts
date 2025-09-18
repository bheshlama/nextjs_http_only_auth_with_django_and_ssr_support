import type { IInputProps } from "shad/components/ui/input";

export type FormInputTypes = "email" | "password" | "text" | "file" | "previewFile";

export type UserProfileFormInputType = {
  image: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  contact?: number;
  email?: string;
  citizenship_front_image: string;
  citizenship_back_image: string;
};

export type ChangePasswordInputType = {
  old_password: string;
  new_password: string;
  confirm_password: string;
};

export type ShopInfoInputType = {
  logo: string;
  name: string;
  location: string;
  email?: string;
  pan_or_vat_front_image?: string;
  pan_or_vat_back_image?: string;
};

export type AvailableAppInputKeys =
  | keyof UserProfileFormInputType
  | keyof ChangePasswordInputType
  | keyof ShopInfoInputType;

export type AvailableAppInputType = UserProfileFormInputType | ChangePasswordInputType | ShopInfoInputType;

export interface AppFormItemTypes<T extends string> extends Omit<IInputProps, "name | type" | "ref"> {
  name: T;
  label?: string;
  type?: FormInputTypes;
  disabled?: boolean;
  placeholder?: string;
}
