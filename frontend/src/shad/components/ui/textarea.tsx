import * as React from "react";

import { cn } from "lib/utils";

export interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hint?: string;
  warning?: string;
  errors?: Record<string, any>;
  name: string;
  disabled?: boolean;
  variant?: "lg" | "sm";
  textareaWrapperClassName?: string;
  textareaTitleClassName?: string;
  textareaClassName?: string;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (
    {
      className,
      name,
      title,
      errors,
      hint,
      warning,
      disabled,
      variant = "lg",
      textareaWrapperClassName,
      textareaTitleClassName,
      textareaClassName,
      ...props
    },
    ref,
  ) => {
    const error = !!errors && !!errors[name] && errors[name].message;
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
        {!!title && (
          <div className={(cn("input-label text-black dark:text-white"), textareaTitleClassName)}>{title}</div>
        )}
        <div
          className={cn(
            "app-input-container flex justify-start items-center flex-nowrap border rounded-xs border-gimGrey-light bg-inherit w-full focus-within:border-[1px] focus-within:border-gimGrey-40 disabled:border-[2px] disabled:border-gimGradientDark focus-within:dark:border-white-light",
            {
              isDisabled: disabled,
            },
            textareaWrapperClassName,
          )}
        >
          <textarea
            rows={4}
            cols={50}
            className={cn(
              "app-textarea flex w-full rounded-md bg-transparent px-3 py-2 text-black text-md dark:text-white shadow-sm transition-colors file:h-full file:px-16 file:border-0 file:bg-gimBrown-light file:text-white file:text-sm file:font-medium file:rounded placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
              textareaClassName,
            )}
            ref={ref}
            {...props}
          />
        </div>
      </label>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
