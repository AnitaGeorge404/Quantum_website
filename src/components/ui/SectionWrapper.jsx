import Container from "./Container";

export default function SectionWrapper({ children, className = "", containerClassName = "" }) {
  return (
    <section className={`py-20 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
