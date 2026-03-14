export default function Card({ className = "", children }) {
  return (
    <article className={`rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${className}`}>
      {children}
    </article>
  );
}
