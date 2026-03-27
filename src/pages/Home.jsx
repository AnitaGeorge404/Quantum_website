import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import ResearchCard from "../components/ui/ResearchCard";
import NewsCard from "../components/ui/NewsCard";
import GalleryCard from "../components/ui/GalleryCard";
import Button from "../components/ui/Button";

const labOverview = [
  {
    title: "Foundational Science",
    summary:
      "We investigate quantum information, complexity, and computation to establish durable scientific foundations.",
    tag: "Lab Overview",
  },
  {
    title: "Systems Engineering",
    summary:
      "Our researchers co-design hardware and software layers for scalable, high-fidelity quantum workflows.",
    tag: "Lab Overview",
  },
  {
    title: "Global Impact",
    summary:
      "The institute advances research translation through strategic partnerships, publications, and talent development.",
    tag: "Lab Overview",
  },
];

const researchHighlights = [
  {
    title: "Quantum Algorithms",
    summary:
      "Near-term and fault-tolerant algorithm design for optimization, simulation, and scientific discovery.",
    tag: "Research Highlights",
  },
  {
    title: "Quantum Hardware",
    summary:
      "Experimental platforms in superconducting and photonic systems with advanced control pipelines.",
    tag: "Research Highlights",
  },
  {
    title: "Quantum Machine Learning",
    summary:
      "Hybrid quantum-classical models for chemistry, materials, and data-intensive analysis.",
    tag: "Research Highlights",
  },
];

const latestNews = [
  {
    title: "Institute secures national grant for scalable error correction",
    date: "March 2026",
    summary:
      "A multi-year program supports benchmark development for robust logical qubit architectures.",
  },
  {
    title: "International workshop on quantum networking hosted at the lab",
    date: "February 2026",
    summary:
      "Researchers from academia and industry convened on secure protocol deployment and standards.",
  },
  {
    title: "Two research papers accepted at top quantum venues",
    date: "January 2026",
    summary:
      "The team reported advances in variational optimization and compiler performance engineering.",
  },
];

const facilitiesPreview = [
  {
    title: "Cryogenic Hardware Suite",
    subtitle:
      "Ultra-low temperature systems for superconducting qubit experimentation",
    image:
      "https://images.unsplash.com/photo-1581093588401-16ec0d2f0f4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Quantum Simulation Cluster",
    subtitle:
      "High-performance compute resources for large-scale algorithm evaluation",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  return (
    <>
      <PageHero
        title="Quantum Computing Research Laboratory"
        description="A world-class academic institute advancing foundational and applied quantum science through rigorous research, global collaborations, and high-impact scholarship."
        accent="Institute Overview"
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Lab Overview"
          title="Integrated research across theory, systems, and applications"
          description="Our institute bridges fundamental quantum science with engineered platforms to accelerate practical breakthroughs."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {labOverview.map((item) => (
            <ResearchCard
              key={item.title}
              title={item.title}
              summary={item.summary}
              tag={item.tag}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <SectionHeader
          eyebrow="Research Highlights"
          title="Core scientific focus areas"
          description="A balanced portfolio spanning algorithms, infrastructure, and interdisciplinary innovation."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {researchHighlights.map((item) => (
            <ResearchCard
              key={item.title}
              title={item.title}
              summary={item.summary}
              tag={item.tag}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="Latest News"
          title="Recent institute milestones"
          description="Highlights from grants, publications, events, and strategic initiatives."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {latestNews.map((item) => (
            <NewsCard
              key={item.title}
              title={item.title}
              date={item.date}
              summary={item.summary}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <SectionHeader
          eyebrow="Facilities Preview"
          title="Advanced institute infrastructure"
          description="Purpose-built physical and computational environments for frontier experimentation."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {facilitiesPreview.map((item) => (
            <GalleryCard
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="People Preview"
          title="A vibrant academic research community"
          description="Our faculty, researchers, and scholars collaborate globally to produce high-impact outcomes."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-surface rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900">People</h3>
            <p className="mt-3 text-gray-600">
              Explore faculty leadership, research staff, student scholars, and
              alumni impact.
            </p>
            <Button to="/people" variant="secondary" className="mt-6">
              Explore People
            </Button>
          </div>
          <div className="glass-surface rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Collaborations Preview
            </h3>
            <p className="mt-3 text-gray-600">
              View strategic partnerships with universities, industry, and
              funding agencies.
            </p>
            <Button to="/collaborations" variant="secondary" className="mt-6">
              View Collaborations
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <div className="glass-surface rounded-3xl p-10 text-center md:p-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Join The Lab
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Build the future of quantum technology with us
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            We welcome doctoral candidates, interns, and collaborators committed
            to rigorous, high-impact scientific research.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/join">Open Positions</Button>
            <Button to="/research" variant="secondary">
              Explore Research
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
