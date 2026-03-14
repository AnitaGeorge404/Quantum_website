import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import ResearchCard from "../components/ui/ResearchCard";
import NewsCard from "../components/ui/NewsCard";
import GalleryCard from "../components/ui/GalleryCard";
import Button from "../components/ui/Button";

const researchHighlights = [
  {
    title: "Quantum Algorithms",
    summary:
      "Designing near-term and fault-tolerant algorithms for optimization, simulation, and scientific computing.",
    tag: "Research",
  },
  {
    title: "Quantum Hardware",
    summary:
      "Advancing superconducting and photonic architectures with robust control and calibration pipelines.",
    tag: "Infrastructure",
  },
  {
    title: "Quantum Machine Learning",
    summary:
      "Exploring hybrid quantum-classical models for chemistry, materials, and high-dimensional data analysis.",
    tag: "Interdisciplinary",
  },
];

const latestNews = [
  {
    title: "Lab receives national grant for scalable quantum error correction",
    date: "March 2026",
    summary:
      "A new multi-year program will accelerate our research on robust logical qubits and benchmark standards.",
  },
  {
    title: "Joint workshop with global partners on quantum networking",
    date: "February 2026",
    summary:
      "Researchers from academia and industry convened to discuss secure network protocols and practical deployment.",
  },
  {
    title: "Two papers accepted at top-tier quantum conferences",
    date: "January 2026",
    summary:
      "Our team reported new results in variational methods and scalable compiler design for hardware-efficient circuits.",
  },
];

const facilitiesPreview = [
  {
    title: "Cryogenic Hardware Suite",
    subtitle:
      "Ultra-low temperature systems for superconducting qubit experiments",
    image:
      "https://images.unsplash.com/photo-1581093588401-16ec0d2f0f4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Quantum Simulation Cluster",
    subtitle:
      "High-performance compute stack for large-scale circuit simulation",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  return (
    <>
      <PageHero
        title="Quantum Computing Research Laboratory"
        description="A modern academic institute advancing foundational and applied quantum science through rigorous research, global collaborations, and talent development."
        accent="Institute Overview"
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="About"
          title="A world-class research environment"
          description="Our lab integrates theory, hardware, and systems research to build practical pathways toward next-generation quantum technologies."
        />
        <div className="grid lg:grid-cols-3 gap-8">
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

      <SectionWrapper className="bg-gray-50 border-y border-gray-200">
        <SectionHeader
          eyebrow="Latest News"
          title="Recent milestones and institute updates"
          description="Highlights from publications, workshops, grants, and institutional initiatives."
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

      <SectionWrapper>
        <SectionHeader
          eyebrow="Facilities"
          title="Advanced infrastructure"
          description="Purpose-built physical and computational facilities supporting frontier quantum experiments."
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

      <SectionWrapper className="bg-gray-50 border-y border-gray-200">
        <SectionHeader
          eyebrow="People & Partnerships"
          title="An international research community"
          description="Our faculty, researchers, and students collaborate with leading academic and industry partners worldwide."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">People</h3>
            <p className="mt-3 text-gray-600">
              Meet faculty, postdoctoral researchers, and student scholars
              driving our research agenda.
            </p>
            <Button to="/people" variant="secondary" className="mt-6">
              Explore People
            </Button>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Collaborations
            </h3>
            <p className="mt-3 text-gray-600">
              Discover how we work with universities, industry labs, and
              funding agencies to scale impact.
            </p>
            <Button to="/collaborations" variant="secondary" className="mt-6">
              View Collaborations
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-10 md:p-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-900 mb-4">
            Join The Lab
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Contribute to the future of quantum technology
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We welcome doctoral candidates, interns, and collaborators committed
            to rigorous, high-impact research.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
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
