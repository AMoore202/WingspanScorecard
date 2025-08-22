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
    "flex items-center justify-center rounded-button text-base font-medium pl-3 pr-3 pt-[6px] pb-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus/75 disabled:pointer-events-none disabled:opacity-50 lg:text-xl";

  const variantStyles =
    variant === "primary"
      ? "bg-[linear-gradient(180deg,var(--surface-buttonPrimaryStartBlue,#187FA9)_0%,var(--surface-buttonPrimaryEndBlue,#125E7D)_100%)] text-foreground-buttonPrimary shadow-buttonPrimary"
      : "bg-[linear-gradient(180deg,var(--surface-buttonSecondaryStartBlue,#E9F6FC)_0%,var(--surface-buttonSecondaryEndBlue,#9DD8F1)_100%)] text-foreground-buttonSecondary shadow-buttonSecondary";

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles} ${className}`}>
      {text}
    </Link>
  );
}
