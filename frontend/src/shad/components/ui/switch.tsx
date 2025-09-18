"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "lib/utils";

export interface ISwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  title?: string;
  hint?: string;
  warning?: string;
  errors?: Record<string, any>;
  name: string;
  disabled?: boolean;
  switchWrapperClassName?: string;
  switchTitleClassName?: string;
  switchClassName?: string;
  onCheckedChange?: (checked: boolean) => void; // Correct handler for Radix Switch
  checked?: boolean;
}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, ISwitchProps>(
  (
    {
      title,
      name,
      errors,
      hint,
      warning,
      disabled,
      switchWrapperClassName,
      switchTitleClassName,
      switchClassName,
      onCheckedChange,
      checked = true,
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
          switchWrapperClassName,
          {
            "switch-disabled": disabled,
            "switch-invalid": !!error,
          },
        )}
      >
        {!!title && <div className={cn("switch-label text-black dark:text-white", switchTitleClassName)}>{title}</div>}
        <div className="flex items-center h-9">
          <SwitchPrimitives.Root
            className={cn(
              "peer inline-flex h-max w-11 shrink-0 cursor-pointer items-center rounded-lg border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black dark:data-[state=checked]:bg-white data-[state=checked]:border-black dark:data-[state=checked]:border-white data-[state=unchecked]:bg-gimGrey-5 dark:data-[state=unchecked]:bg-gimGrey-140 data-[state=unchecked]:border-gimGrey-5 dark:data-[state=unchecked]:border-gimGrey-140",
              switchClassName,
            )}
            disabled={disabled}
            ref={ref}
            checked={checked}
            onCheckedChange={onCheckedChange}
            {...props}
          >
            <SwitchPrimitives.Thumb
              className={cn(
                "pointer-events-none block h-5 w-5 rounded-[100%] bg-white dark:bg-black shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
              )}
            />
          </SwitchPrimitives.Root>
        </div>

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

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
