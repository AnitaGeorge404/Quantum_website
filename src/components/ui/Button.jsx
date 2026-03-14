import { Link } from "react-router-dom";

const baseClass =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all duration-300";

const variants = {
  primary: "bg-blue-900 text-white hover:bg-blue-800",
  secondary: "border border-blue-900 text-blue-900 hover:bg-blue-50",
  ghost: "text-blue-900 hover:text-blue-800",
};

<<<<<<< HEAD
export default function Button({
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  children,
  type = "button",
}) {
=======
export default function Button({ to, href, onClick, variant = "primary", className = "", children, type = "button" }) {
>>>>>>> Vamsi
  const buttonClass = `${baseClass} ${variants[variant] ?? variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
