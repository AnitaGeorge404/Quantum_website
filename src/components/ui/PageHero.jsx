import Container from "./Container";

export default function PageHero({
  title,
  description,
  accent = "Research Excellence",
  image,
}) {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-gray-50 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:22px_22px] opacity-60" />
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />
      ) : null}
      <Container className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-900 mb-4">
          {accent}
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight max-w-4xl">
          {title}
        </h1>
        <p className="mt-5 text-lg text-gray-600 max-w-3xl">{description}</p>
      </Container>
    </section>
  );
}
