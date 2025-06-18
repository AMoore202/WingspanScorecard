// import * as React from "react"
// import { Slot } from "@radix-ui/react-slot"
// import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/utils"

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//   {
//     variants: {
//       variant: {
//         default:
//           "bg-primary text-primary-foreground shadow hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-9 px-4 py-2",
//         sm: "h-8 rounded-md px-3 text-xs",
//         lg: "h-10 rounded-md px-8",
//         icon: "h-9 w-9",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button"
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Button.displayName = "Button"

// export { Button, buttonVariants }

import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
  href?: string;
  className?: string;
}

export default function Button({
  variant = "primary",
  text,
  href = "",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center rounded-button text-base font-medium pl-3 pr-3 pt-[6px] pb-[6px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-2 focus-visible:ring-seagull-700/50 disabled:pointer-events-none disabled:opacity-50";

  const variantStyles =
    variant === "primary"
      ? "bg-[linear-gradient(180deg,var(--surface-buttonPrimaryStart,#187FA9)_0%,var(--surface-buttonPrimaryEnd,#125E7D)_100%)] text-foreground-buttonPrimary shadow-buttonPrimary"
      : "bg-[linear-gradient(180deg,var(--surface-buttonSecondaryStart,#E9F6FC)_0%,var(--surface-buttonSecondaryEnd,#9DD8F1)_100%)] text-foreground-buttonSecondary shadow-buttonSecondary";

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles} ${className}`}>
      {text}
    </Link>
  );
}
