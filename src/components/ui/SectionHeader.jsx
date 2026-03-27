export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-4 inline-flex text-sm font-bold uppercase tracking-widest text-secondary-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold leading-tight text-primary-900 md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-primary-600 md:text-xl">{description}</p>
      ) : null}
    </div>
  );
}
