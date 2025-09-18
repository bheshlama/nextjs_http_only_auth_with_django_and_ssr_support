import * as z from "zod";
import type { IInputProps } from "shad/components/ui/input";

export type FormInputTypes =
  | "email"
  | "password"
  | "text"
  | "file"
  | "previewFile";

export type LoginFormInputType = {
  contact?: string;
  email?: string;
  password?: string;
  code?: string;
  remember_me?: boolean;
};

export type ForgotPasswordInputType = {
  email: string;
};

export type ResetPasswordInputType = {
  new_password?: string;
  confirm_password?: string;
};

export type RegistrationFormInputType = {
  first_name: string;
  middle_name?: string;
  last_name: string;
  contact?: number;
  email?: string;
  password: string;
};

export type SetNewPasswordFormInputType = {
  new_password?: string;
  confirm_password?: string;
};

export type AvailableInputKeys =
  | keyof LoginFormInputType
  | keyof RegistrationFormInputType
  | keyof ForgotPasswordInputType
  | keyof ResetPasswordInputType;

export type AvailableInputType =
  | LoginFormInputType
  | RegistrationFormInputType
  | ForgotPasswordInputType
  | ResetPasswordInputType;

export interface AuthFormItemTypes<T extends string>
  extends Omit<IInputProps, "name | type" | "ref"> {
  name: T;
  label?: string;
  type?: FormInputTypes;
  disabled?: boolean;
  placeholder?: string;
  preview?: boolean;
}

export enum AuthType {
  REGISTER = "register",
  LOGIN = "login",
  FORGET_PASSWORD = "forgetPassword",
  RESET_PASSWORD = "resetPassword",
}

// payload types
export interface IRegisterPayload {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  re_password: string;
}

export interface ILoginPayload {
  username: string;
  password: string;
}
