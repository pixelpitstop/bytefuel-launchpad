import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const neonButtonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium font-inter transition-buttery focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-neon hover:shadow-[0_0_1.5rem_hsl(var(--lime)/0.8)] hover:scale-[1.02] active:scale-[0.98]",
        ghost: "border-2 border-primary text-primary bg-transparent hover:bg-primary/10 hover:shadow-neon",
        danger: "bg-secondary text-secondary-foreground shadow-[0_0_0.75rem_hsl(var(--red)/0.45)] hover:shadow-[0_0_1.5rem_hsl(var(--red)/0.8)] hover:scale-[1.02]"
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg"
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neonButtonVariants> {
  asChild?: boolean
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(neonButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
NeonButton.displayName = "NeonButton"

export { NeonButton, neonButtonVariants }