import { Shield } from "lucide-react";

interface ProtectedBadgeProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export default function ProtectedBadge({ size = "md", variant = "light" }: ProtectedBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  };

  const variantClasses = {
    light: "bg-accent/10 text-accent border border-accent/20",
    dark: "bg-accent text-accent-foreground",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full ${sizeClasses[size]} ${variantClasses[variant]} font-medium transition-all hover:shadow-lg`}
    >
      <Shield className={size === "sm" ? "w-3 h-3" : size === "md" ? "w-4 h-4" : "w-5 h-5"} />
      <span>Protected by UNHITTABLE</span>
    </div>
  );
}
