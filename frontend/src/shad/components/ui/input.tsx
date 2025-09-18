import * as React from "react";

import { cn } from "lib/utils";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type Type = "email" | "password" | "text" | "number" | "file" | "previewFile" | "textarea" | "switch";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hint?: string;
  warning?: string;
  errors?: Record<string, any>;
  name: string;
  disabled?: boolean;
  icon?: JSX.Element | React.ReactNode;
  type?: Type;
  variant?: "lg" | "sm";
  inputWrapperClassName?: string;
  inputLabelClassName?: string;
  inputClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className,
      type = "text",
      name,
      title,
      errors,
      hint,
      warning,
      disabled,
      icon,
      variant = "lg",
      inputWrapperClassName,
      inputLabelClassName,
      inputClassName,
      ...props
    },
    ref,
  ) => {
    const [togglePasswordShow, setTogglePasswordShow] = React.useState(false);
    const [filePreview, setFilePreview] = React.useState<string | null>(null);

    const error = !!errors && !!errors[name] && errors[name].message;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files ? event.target.files[0] : null;
      if (file && type === "file") {
        const reader = new FileReader();
        reader.onload = e => {
          setFilePreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
      props.onChange?.(event); // Call the onChange from props if it exists
    };

    return (
      <label
        htmlFor={name}
        className={cn(
          "flex",
          "flex-col",
          "items-start",
          "justify-start",
          "gap-10",
          "hl-h3",
          "app-input-field",
          "p-[8px]",
          "px-[6px]",
          "rounded",
          `variant-${variant}`,
          className,
          {
            "app-input-disabled": disabled,
            "app-input-invalid": !!error,
          },
        )}
      >
        {!!title && <div className={(cn("input-label text-black dark:text-white"), inputLabelClassName)}>{title}</div>}
        <div
          className={cn(
            "app-input-container flex justify-start items-center flex-nowrap border rounded-xs border-gimGrey-light bg-inherit w-full focus-within:border-[1px] focus-within:border-gimGrey-40 disabled:border-[2px] disabled:border-gimGradientDark focus-within:dark:border-white-light",
            {
              isDisabled: disabled,
            },
            inputWrapperClassName,
          )}
        >
          <input
            type={type === "password" && togglePasswordShow ? "text" : type}
            className={cn(
              "app-input flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-black text-sm dark:text-white shadow-sm transition-colors file:h-full file:px-16 file:border-0 file:bg-gimBrown-light file:text-white file:text-sm file:font-medium file:rounded placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
              inputClassName,
            )}
            ref={ref}
            disabled={disabled}
            onChange={type === "file" ? handleFileChange : props.onChange}
            {...props}
          />
          {type === "password" && (
            <div
              className="app-input-container-password-eye min-w-[20px] min-h-[20px] flex flex-col items-center max-w-[20px] max-h-[20px] cursor-pointer mr-3"
              role="button"
              tabIndex={0}
              onClick={() => setTogglePasswordShow(!togglePasswordShow)}
            >
              {togglePasswordShow ? (
                <AiOutlineEye style={{ width: "100%", height: "100%" }} className="fill-black dark:fill-white" />
              ) : (
                <AiOutlineEyeInvisible
                  style={{ width: "100%", height: "100%" }}
                  className="fill-black dark:fill-white"
                />
              )}
            </div>
          )}
        </div>
        {filePreview && type === "file" && (
          <div className="file-preview mt-2">
            <img src={'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'} alt="File preview" className="w-32 h-32 object-cover" />
          </div>
         )} 
        {(error || hint || warning) && (
          <p
            className={cn("hint text-gimGray dark:text-gimGrey-light", {
              "info-error": error,
            })}
          >
            {error || hint || warning}
          </p>
        )}
      </label>
    );
  },
);
Input.displayName = "Input";

export { Input };
