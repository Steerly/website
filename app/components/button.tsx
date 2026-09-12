import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200 ease-out";

const variants = {
  primary: "bg-black text-white hover:bg-yellow hover:text-black",
  secondary: "border border-black text-black hover:bg-black hover:text-yellow",
} as const;

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className ?? ""}`} {...props} />
  );
}
