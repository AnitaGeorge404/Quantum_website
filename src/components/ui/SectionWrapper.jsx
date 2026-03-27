import Container from "./Container";

export default function SectionWrapper({
  children,
  className = "",
  containerClassName = "",
}) {
  return (
    <section className={`relative py-20 md:py-24 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
