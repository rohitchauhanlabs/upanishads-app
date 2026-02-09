import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-earth-200 bg-white/60 px-4 py-2 text-sm text-earth-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-earth-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
