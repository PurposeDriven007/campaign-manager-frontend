import * as React from "react";

import { cn } from "@/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const inputVariants = cva(
  "flex h-10 w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none md:text-sm",
  {
    variants: {
      variant: {
        default: "",
        outlined: "border border-input",
        ghost: "bg-transparent cursor-default disabled:cursor-default",
        filled: "bg-input text-foreground",
        flushed: "border-b border-input",
      },
      customSize: {
        sm: "h-8 text-sm",
        md: "h-10 text-base",
        lg: "h-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      customSize: "md",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Omit<VariantProps<typeof inputVariants>, "size"> {
  asChild?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, customSize: size, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "input";
    return (
      <Comp
        className={cn(inputVariants({ variant, customSize: size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
