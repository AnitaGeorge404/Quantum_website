export default function Card({ className = "", children }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] bg-white border border-primary-100/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(236,72,153,0.06)] hover:border-secondary-200/50 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-secondary-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 w-full h-full">{children}</div>
    </article>
  );
}
