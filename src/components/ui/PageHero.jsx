import { motion } from "framer-motion";
import Container from "./Container";
import Button from "./Button";

export default function PageHero({
  title,
  description,
  accent = "Research Excellence",
  image,
  brandLogo,
  brandName,
  ctaText,
  ctaTo,
  ctaVariant = "secondary",
}) {
  return (
    <section className="relative overflow-hidden bg-primary-900 border-b border-primary-800">
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15)_0%,transparent_60%)]" />
      )}

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative px-4 py-16 sm:px-6 md:py-24"
        >
          {brandLogo ? (
            <img
              src={brandLogo}
              alt={brandName ?? title}
              className="mb-6 block h-auto w-full max-w-[760px] rounded-3xl border border-primary-700/60 bg-white p-2 object-contain shadow-[0_10px_28px_rgba(12,20,43,0.32)]"
            />
          ) : null}

          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-secondary-400">
            <span className="w-8 h-px bg-secondary-400"></span>
            {accent}
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {brandName ? (
            <p className="mt-5 max-w-4xl text-base font-semibold leading-relaxed text-secondary-200 md:text-lg">
              {brandName}
            </p>
          ) : null}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-200">
            {description}
          </p>

          {ctaText && ctaTo ? (
            <div className="mt-8">
              <Button to={ctaTo} variant={ctaVariant}>
                {ctaText}
              </Button>
            </div>
          ) : null}
        </motion.div>
      </Container>
    </section>
  );
}
