import { motion } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const researchMetrics = [
  { label: "Faculty Contributors", value: "15" },
  { label: "Research Thrust Areas", value: "15+" },
  { label: "Core Domains", value: "Quantum, AI, FinTech" },
  { label: "Interdisciplinary Focus", value: "35+" },
];

const thrustAreas = [
  {
    title: "Quantum Computing & Mathematics",
    faculty: ["Dr. Asha Sebastian", "Dr. Riyasudheen TK", "Dr. Binu M", "Dr. John Paul Martin"],
  },
  {
    title: "Quantum AI & Machine Learning",
    faculty: ["Dr. Santhos Kumar A.", "Dr. Christina Terese Joseph", "Dr. R. Tharaniya Sairaj", "Dr. Balasubramanian P"],
  },
  {
    title: "Quantum PDE & Financial Systems",
    faculty: ["Dr. Riyasudheen TK"],
  },
  {
    title: "Post-Quantum Cryptography",
    faculty: ["Dr. Asha Sebastian"],
  },
  {
    title: "Quantum Photonic Sensors & Spectroscopy",
    faculty: ["Dr. Della Thomas"],
  },
  {
    title: "Computer Vision & Deep Learning",
    faculty: ["Dr. Santhos Kumar A.", "Dr. A V Prajeesh", "Dr. Christina Terese Joseph"],
  },
  {
    title: "Time Series Forecasting & ML",
    faculty: ["Dr. Mirothali Chand C", "Dr. A V Prajeesh", "Dr. John Paul Martin"],
  },
  {
    title: "Graph Neural Networks & Foundational Models",
    faculty: ["Dr. Binu M", "Dr. A V Prajeesh", "Dr. Christina Terese Joseph"],
  },
  {
    title: "Fuzzy Systems & Explainable AI",
    faculty: ["Dr. Suriyapriya K", "Dr. R. Tharaniya Sairaj"],
  },
  {
    title: "Quantum NLP & Transformers",
    faculty: ["Dr. Santhos Kumar A.", "Dr. R. Tharaniya Sairaj", "Dr. Balasubramanian P"],
  },
  {
    title: "Edge Computing & Distributed Systems",
    faculty: ["Dr. Christina Terese Joseph", "Dr. John Paul Martin"],
  },
  {
    title: "Reinforcement Learning",
    faculty: ["Dr. Christina Terese Joseph", "Dr. John Paul Martin"],
  },
];

const pageVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Research() {
  return (
    <>
      <PageHero
        title="Research"
        description="Explore QuDAIS research thrust areas and faculty expertise across quantum computing, quantum AI, cryptography, sensing, and related technologies."
        accent="QuDAIS Research Programs"
        ctaText="Explore People"
        ctaTo="/people"
      />

      <SectionWrapper>
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {researchMetrics.map((item) => (
            <Card key={item.label} className="p-6">
              <p className="text-lg font-semibold text-gray-900 line-clamp-2">{item.value}</p>
              <p className="mt-2 text-sm text-gray-600">{item.label}</p>
            </Card>
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <SectionHeader
          eyebrow="Research Thrust Areas"
          title="Research focus and faculty expertise"
          description="Core research domains of QuDAIS Lab with associated faculty expertise and specializations."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {thrustAreas.map((area) => (
            <Card key={area.title} className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">{area.title}</h3>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3">Faculty</p>
                <ul className="space-y-2">
                  {area.faculty.map((faculty) => (
                    <li key={faculty} className="text-sm text-slate-700">{faculty}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="glass-surface rounded-3xl p-10 text-center md:p-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Collaborate
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Collaborate on high-impact interdisciplinary quantum research
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            We welcome collaborations from academia, industry, and mission-
            focused organizations aligned with QuDAIS research themes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/collaborations">Explore Collaborations</Button>
            <Button to="/join" variant="secondary">
              Join Research Programs
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}