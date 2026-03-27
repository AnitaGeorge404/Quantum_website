import { Link } from "react-router-dom";

const baseClass =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2";

const variants = {
  primary:
    "bg-primary-900 text-white shadow-[0_8px_20px_rgb(15,23,42,0.14)] hover:-translate-y-0.5 hover:bg-secondary-500 hover:shadow-[0_10px_25px_rgba(236,72,153,0.3)]",
  secondary:
    "bg-white text-primary-900 shadow-[0_4px_14px_rgba(0,0,0,0.05)] border border-primary-100 hover:-translate-y-0.5 hover:border-secondary-200 hover:text-secondary-600 hover:shadow-[0_8px_25px_rgba(236,72,153,0.15)]",
  ghost: "text-slate-500 hover:bg-slate-50 hover:text-secondary-500 rounded-full px-5 py-2.5",
};

export default function Button({
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  children,
  type = "button",
}) {
  const buttonClass = `${baseClass} ${variants[variant] ?? variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }

  if (href) {
    return <a href={href} className={buttonClass}>{children}</a>;
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
