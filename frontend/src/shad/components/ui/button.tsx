import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "lib/utils";
import Image from "next/image";

const buttonVariants = cva(
  "flex items-center justify-center gap-10 rounded text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-gimGrey-20",
  {
    variants: {
      variant: {
        default: "bg-gimBrown-light text-gimWhite hover:bg-gimBrown-primaryDark",
        primary:
          "bg-gimBrown-light text-gimWhite hover:bg-gimBrown-primaryDark focus:border-2 focus:border-solid focus:border-gimBrown-primaryDark disabled:bg-gimGrey-primary disabled:cursor-notallowed",
        error:
          "bg-gimError text-gimWhite hover:bg-gimError-dark focus:border-solid focus:border-gimError-dark",
        outline: " dark:text-gimGrey-120 dark:border-gimGrey-120 shadow-sm hover:bg-gimGrey-5 dark:hover:bg-gimGradientDark",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        link: "bg-transparent dark:text-gimWhite hover:underline focus:underline",
      },
      size: {
        default: "min-w-[117px] max-w-fit min-h-[35px] max-h-[35px] rounded px-10",
        sm: "min-w-[100px] max-w-fit min-h-[32px] max-h-[32px] rounded px-10",
        md: "min-w-[105px] max-w-fit min-h-[33px] max-h-[33px] rounded px-10",
        lg: "min-w-[117px] max-w-fit min-h-[35px] max-h-[35px] rounded px-10",
        xl: "min-w-[149px] max-w-fit min-h-[50px] max-h-[50px] rounded px-10",
      },
      outlined: {
        default: "border-0",
        primary:
          "border border-solid border-gimGreen bg-transparent text-gimGreen hover:border-gimGreen-primaryDark hover:text-gimGreen-primaryDark hover:bg-gimGreen-light focus:border-2",
        secondary:
          "border border-solid border-gimBlack text-gimBlack bg-transparent dark:text-white dark:border-white ",
        success:
          "border border-solid border-gimSuccess text-gimSuccess bg-transparent hover:text-gimSuccess-dark hover:border-gimSuccess-dark hover:bg-gimsuccess-light focus:border-2",
        error:
          "border border-solid border-gimError text-gimError bg-transparent hover:text-gimError-dark hover:border-gimError-dark hover:bg-gimError-light focus:border-2",
        none: "border-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      outlined: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string;
  icon?: string | null;
  disabled?: boolean;
  children?: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, outlined, text, icon, disabled = false, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, outlined, className }))}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {icon && <Image src={icon} width={24} height={24} alt="icon" />}
        {text && <span>{text}</span>}
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
