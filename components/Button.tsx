import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  shape?: "pill" | "rect";
  fullWidth?: boolean;
};

const variantStyles: Record<string, string> = {
  primary:
    "bg-primary-500 text-cream hover:bg-primary-600 border-ink-600",
  dark: "bg-ink-600 text-cream hover:bg-ink-700 border-ink-600",
  ghost: "bg-transparent text-ink-600 hover:bg-ink-50 border-ink-600",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  shape = "pill",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-2 border-2 font-display font-semibold uppercase tracking-wide shadow-hard-sm transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none ${
        shape === "pill" ? "rounded-full justify-center" : "rounded-md justify-between"
      } ${fullWidth ? "w-full" : ""} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span aria-hidden>{icon}</span>}
    </button>
  );
}
