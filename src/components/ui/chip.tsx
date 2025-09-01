import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const chipVariants = cva(
  "inline-flex items-center px-3 py-1 text-xs font-mono font-medium rounded-full transition-buttery",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground border border-border",
        primary: "bg-primary/20 text-primary border border-primary/30",
        secondary: "bg-secondary/20 text-secondary border border-secondary/30",
        accent: "bg-accent/20 text-accent border border-accent/30"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        className={cn(chipVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Chip.displayName = "Chip"

export { Chip, chipVariants }