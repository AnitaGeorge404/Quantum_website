export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl mb-12 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-900 mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-gray-900 leading-tight">{title}</h2>
      {description ? <p className="mt-4 text-lg text-gray-600">{description}</p> : null}
    </div>
  );
}
