"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "shad/components/ui/toast";
import { useToast } from "shad/components/ui/use-toast";
import { CircleCheckBig, CircleX } from "lucide-react";
import { cn } from "lib/utils";

export function Toaster() {
  const { toasts } = useToast();

  const icon = {
    success: <CircleCheckBig size={21} />,
    error: <CircleX size={22} />,
  };

  const color = {
    success: "bg-gimSuccess",
    error: "bg-gimError",
  };

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, status, ...props }) {
        const currentIcon = icon[status];
        return (
          <Toast key={id} {...props} className={color[status]}>
            <div className={cn("flex items-center gap-2 py-[5px] p-6")}>
              {currentIcon}
              <div className="">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && <ToastDescription>{description}</ToastDescription>}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
