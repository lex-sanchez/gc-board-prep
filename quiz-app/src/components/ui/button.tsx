import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-orange-300 text-white hover:bg-orange-400 shadow-sm hover:shadow-md",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-sm hover:shadow-md",
        outline:
          "border-2 border-orange-300 bg-transparent text-gray-700 hover:bg-orange-300 hover:text-white shadow-sm hover:shadow-md",
        secondary:
          "bg-orange-100 text-orange-800 hover:bg-orange-200 shadow-sm hover:shadow-md",
        accent:
          "bg-orange-300 text-white hover:bg-orange-400 shadow-sm hover:shadow-md",
        ghost: "hover:bg-orange-100 hover:text-orange-700",
        link: "text-orange-600 underline-offset-4 hover:underline hover:text-orange-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }