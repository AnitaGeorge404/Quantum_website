import Container from "./Container";

<<<<<<< HEAD
export default function SectionWrapper({
  children,
  className = "",
  containerClassName = "",
}) {
=======
export default function SectionWrapper({ children, className = "", containerClassName = "" }) {
>>>>>>> Vamsi
  return (
    <section className={`py-20 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
