/**
 * Container component
 *
 * A responsive and customizable container component using Tailwind CSS
 * for automatic centering and flexible max-width control. The component
 * supports different screen sizes and can be rendered as a different
 * element if needed (via the `asChild` prop).
 *
 * @module Container
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Tailwind class variants for the Container component.
 * Controls the maximum width of the container based on screen size.
 *
 * Variants:
 * - `default`: max-width set to `max-w-screen-xl`
 * - `sm`: max-width set to `max-w-screen-sm`
 * - `md`: max-width set to `max-w-screen-md`
 * - `lg`: max-width set to `max-w-screen-lg`
 * - `xl`: max-width set to `max-w-screen-xl`
 * - `xxl`: max-width set to `max-w-screen-2xl`
 */
const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    maxScreenWidth: {
      default: "max-w-screen-xl",
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      xxl: "max-w-screen-2xl",
    },
  },
  defaultVariants: {
    maxScreenWidth: "default",
  },
});

export interface ConatinerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
}

/**
 * @typedef {Object} ContainerProps
 * @property {React.ReactNode} children - The content to be rendered inside the container.
 * @property {string} [className] - Additional CSS classes for custom styling.
 * @property {"default" | "sm" | "md" | "lg" | "xl" | "xxl"} [maxScreenWidth="default"] - Maximum screen width for the container.
 * @property {boolean} [asChild=false] - If true, renders the component as a child element using Radix UI's Slot.
 * @property {React.HTMLAttributes<HTMLDivElement>} [props] - Additional HTML attributes for the container element.
 */

/**
 * Container Component
 *
 * A responsive container that centers its content and provides customizable
 * maximum width based on the screen size. By default, it renders as a `div`
 * but can also render as any other element using the `asChild` prop.
 *
 * @param {ContainerProps} props - The props object.
 * @returns {JSX.Element} The rendered container component.
 */
const Container = React.forwardRef<HTMLDivElement, ConatinerProps>(
  ({ className, maxScreenWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"; // Renders as "div" or a Slot component if asChild is true
    return (
      <Comp
        id="container"
        className={cn(containerVariants({ maxScreenWidth, className }))} // Combines Tailwind CSS classes
        ref={ref}
        {...props}
      />
    );
  }
);

// Display name for better debugging in React DevTools
Container.displayName = "Container";

export { Container, containerVariants };
