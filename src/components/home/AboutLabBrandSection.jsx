import SectionWrapper from "../ui/SectionWrapper";
import SectionHeader from "../ui/SectionHeader";

const pillars = [
  "Foster research and innovation among BTech, MTech, iMTech, and PhD students.",
  "Conduct outreach to build awareness on quantum technologies and their societal applications.",
  "Undertake socially relevant projects that produce quality publications and deliverables.",
  "Offer courses, workshops, and training programs to demystify quantum computing.",
];

export default function AboutLabBrandSection() {
  return (
    <SectionWrapper className="soft-section border-y border-primary-100/80">
      <SectionHeader
        eyebrow="About The Lab"
        title="QuDAIS Lab: where quantum technology meets intelligent systems"
        description="QuDAIS stands for Quantum Technology Developments in Artificial Intelligence Systems Research Lab at the Indian Institute of Information Technology Kottayam."
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <article className="rounded-3xl border border-primary-100 bg-white/85 p-8 shadow-[0_14px_32px_rgba(67,112,214,0.12)] backdrop-blur">
          <h3 className="text-2xl font-semibold text-primary-900">
            Identity and Mission
          </h3>
          <p className="mt-4 text-base leading-relaxed text-primary-700">
            QuDAIS Lab focuses on spearheading developments in quantum
            computing and associated technologies that aid interdisciplinary
            research. The major concentration areas include Artificial
            Intelligence, FinTech, Communication, and Sensing.
          </p>
          <p className="mt-4 text-base leading-relaxed text-primary-700">
            Our vision is to create a hub for innovation in quantum computing
            and related technologies, while educating and training
            professionals to upskill the wider community in this emerging
            field.
          </p>
          <p className="mt-4 text-base leading-relaxed text-primary-700">
            Our mission is to pioneer research at the confluence of quantum
            computing with AI, FinTech, Communication, and Sensing, and to
            explore practical solutions through strong academic and industry
            collaboration.
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
