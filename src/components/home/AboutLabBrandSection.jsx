import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

const pillars = [
  "Quantum algorithms and complexity",
  "Artificial intelligence systems for quantum workflows",
  "Hardware-software co-design and optimization",
  "Collaborative technology translation",
];

export default function AboutLabBrandSection() {
  return (
    <SectionWrapper className="soft-section border-y border-primary-100/80">
      <SectionHeader
        eyebrow="About The Lab"
        title="QuDAIS Lab: where quantum technology meets intelligent systems"
        description="QuDAIS stands for Quantum Technology Developments in Artificial Intelligence Systems Research Lab. We build practical pathways from foundational science to deployable impact."
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <article className="rounded-3xl border border-primary-100 bg-white/85 p-8 shadow-[0_14px_32px_rgba(67,112,214,0.12)] backdrop-blur">
          <h3 className="text-2xl font-semibold text-primary-900">
            Identity and Mission
          </h3>
          <p className="mt-4 text-base leading-relaxed text-primary-700">
            We advance cutting-edge research at the intersection of quantum
            computing and artificial intelligence systems. Our team blends
            theoretical depth, engineering discipline, and interdisciplinary
            collaboration to create scalable quantum solutions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-primary-700">
            Through publications, open innovation, and strategic partnerships,
            QuDAIS Lab contributes to the next generation of scientific and
            industrial quantum capabilities.
          </p>
        </article>

        <aside className="rounded-3xl border border-secondary-100 bg-gradient-to-br from-white via-primary-50/60 to-secondary-50/70 p-8 shadow-[0_14px_32px_rgba(95,31,116,0.10)]">
          <h3 className="text-xl font-semibold text-primary-900">
            Core Focus Pillars
          </h3>
          <ul className="mt-5 space-y-3">
            {pillars.map((item) => (
              <li key={item} className="flex items-start gap-3 text-primary-700">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-secondary-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </SectionWrapper>
  );
}
