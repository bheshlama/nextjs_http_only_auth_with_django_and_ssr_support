import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "lib/utils";

// import { GridHandleIcon } from "assets";
import { XCircle } from "lucide-react";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-6 rounded-xs border border-white px-20 py-6 hl-body-bold cursor-pointer dark:text-white",
  {
    variants: {
      variant: {
        default: "fill-white",
        normal: "border rounded border-sbGrey-5 text-darkBlack hover:bg-sbPrimaryGreen hover:text-sbWhite",
        green_outlined: "bg-sbGreen-20 border-sbGreen text-sbGreen dark:bg-transparent dark:text-sbGreen",
        green_filled: "bg-sbGreen border-sbGreen text-white fill-white",
        error_outlined: "bg-sbError-light border-sbError text-sbError dark:bg-transparent dark:text-sbError",
        error_filled: "bg-sbError border-sbError-dark text-sbError-light fill-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type IBadgeVariantProps = VariantProps<typeof badgeVariants>;

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, IBadgeVariantProps {
  text?: string;
  children?: React.ReactNode;
  isClosable?: boolean;
  handleCloseClick?: (item: string | number) => void;
  isDraggable?: boolean;
  badgeId?: string | number;
}

function Badge({
  className,
  variant,
  text,
  children,
  isClosable = false,
  handleCloseClick,
  isDraggable = false,
  badgeId,
  ...props
}: BadgeProps) {
  const iconVariants = {
    green_outlined: <XCircle />,
    green_filled: <XCircle />,
    default: "",
    normal: "",
    error_outlined: "",
    error_filled: "",
  };

  const Icon = isDraggable ? <XCircle /> : isClosable && variant && iconVariants[variant];

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {!children && text && <p>{text}</p>}
      {children && children}
      {isClosable && Icon && (
        <span className="icon-24" onClick={() => handleCloseClick?.(badgeId || text || "")}>
          {Icon}
        </span>
      )}
    </div>
  );
}

export { Badge, badgeVariants };
