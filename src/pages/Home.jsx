<<<<<<< HEAD
import PageHero from "../components/ui/PageHero";
=======
﻿import PageHero from "../components/ui/PageHero";
>>>>>>> Vamsi
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import ResearchCard from "../components/ui/ResearchCard";
import NewsCard from "../components/ui/NewsCard";
import GalleryCard from "../components/ui/GalleryCard";
import Button from "../components/ui/Button";

<<<<<<< HEAD
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

=======
>>>>>>> Vamsi
const researchHighlights = [
  {
    title: "Quantum Algorithms",
    summary:
<<<<<<< HEAD
      "Near-term and fault-tolerant algorithm design for optimization, simulation, and scientific discovery.",
    tag: "Research Highlights",
=======
      "Designing near-term and fault-tolerant algorithms for optimization, simulation, and scientific computing.",
    tag: "Research",
>>>>>>> Vamsi
  },
  {
    title: "Quantum Hardware",
    summary:
<<<<<<< HEAD
      "Experimental platforms in superconducting and photonic systems with advanced control pipelines.",
    tag: "Research Highlights",
=======
      "Advancing superconducting and photonic architectures with robust control and calibration pipelines.",
    tag: "Infrastructure",
>>>>>>> Vamsi
  },
  {
    title: "Quantum Machine Learning",
    summary:
<<<<<<< HEAD
      "Hybrid quantum-classical models for chemistry, materials, and data-intensive analysis.",
    tag: "Research Highlights",
=======
      "Exploring hybrid quantum-classical models for chemistry, materials, and high-dimensional data analysis.",
    tag: "Interdisciplinary",
>>>>>>> Vamsi
  },
];

const latestNews = [
  {
<<<<<<< HEAD
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
=======
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
>>>>>>> Vamsi
  },
];

const facilitiesPreview = [
  {
    title: "Cryogenic Hardware Suite",
    subtitle:
<<<<<<< HEAD
      "Ultra-low temperature systems for superconducting qubit experimentation",
=======
      "Ultra-low temperature systems for superconducting qubit experiments",
>>>>>>> Vamsi
    image:
      "https://images.unsplash.com/photo-1581093588401-16ec0d2f0f4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Quantum Simulation Cluster",
    subtitle:
<<<<<<< HEAD
      "High-performance compute resources for large-scale algorithm evaluation",
=======
      "High-performance compute stack for large-scale circuit simulation",
>>>>>>> Vamsi
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  return (
    <>
      <PageHero
        title="Quantum Computing Research Laboratory"
<<<<<<< HEAD
        description="A world-class academic institute advancing foundational and applied quantum science through rigorous research, global collaborations, and high-impact scholarship."
=======
        description="A modern academic institute advancing foundational and applied quantum science through rigorous research, global collaborations, and talent development."
>>>>>>> Vamsi
        accent="Institute Overview"
      />

      <SectionWrapper>
        <SectionHeader
<<<<<<< HEAD
          eyebrow="Lab Overview"
          title="Integrated research across theory, systems, and applications"
          description="Our institute bridges fundamental quantum science with engineered platforms to accelerate practical breakthroughs."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {labOverview.map((item) => (
=======
          eyebrow="About"
          title="A world-class research environment"
          description="Our lab integrates theory, hardware, and systems research to build practical pathways toward next-generation quantum technologies."
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {researchHighlights.map((item) => (
>>>>>>> Vamsi
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
<<<<<<< HEAD
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
=======
          eyebrow="Latest News"
          title="Recent milestones and institute updates"
          description="Highlights from publications, workshops, grants, and institutional initiatives."
>>>>>>> Vamsi
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

<<<<<<< HEAD
      <SectionWrapper className="bg-gray-50 border-y border-gray-200">
        <SectionHeader
          eyebrow="Facilities Preview"
          title="Advanced institute infrastructure"
          description="Purpose-built physical and computational environments for frontier experimentation."
=======
      <SectionWrapper>
        <SectionHeader
          eyebrow="Facilities"
          title="Advanced infrastructure"
          description="Purpose-built physical and computational facilities supporting frontier quantum experiments."
>>>>>>> Vamsi
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

<<<<<<< HEAD
      <SectionWrapper>
        <SectionHeader
          eyebrow="People Preview"
          title="A vibrant academic research community"
          description="Our faculty, researchers, and scholars collaborate globally to produce high-impact outcomes."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
            <h3 className="text-xl font-semibold text-gray-900">People</h3>
            <p className="mt-3 text-gray-600">
              Explore faculty leadership, research staff, student scholars, and
              alumni impact.
=======
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
>>>>>>> Vamsi
            </p>
            <Button to="/people" variant="secondary" className="mt-6">
              Explore People
            </Button>
          </div>
<<<<<<< HEAD
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Collaborations Preview
            </h3>
            <p className="mt-3 text-gray-600">
              View strategic partnerships with universities, industry, and
              funding agencies.
=======
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Collaborations
            </h3>
            <p className="mt-3 text-gray-600">
              Discover how we work with universities, industry labs, and
              funding agencies to scale impact.
>>>>>>> Vamsi
            </p>
            <Button to="/collaborations" variant="secondary" className="mt-6">
              View Collaborations
            </Button>
          </div>
        </div>
      </SectionWrapper>

<<<<<<< HEAD
      <SectionWrapper className="bg-gray-50 border-y border-gray-200">
=======
      <SectionWrapper>
>>>>>>> Vamsi
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-10 md:p-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-900 mb-4">
            Join The Lab
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
<<<<<<< HEAD
            Build the future of quantum technology with us
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We welcome doctoral candidates, interns, and collaborators committed
            to rigorous, high-impact scientific research.
=======
            Contribute to the future of quantum technology
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We welcome doctoral candidates, interns, and collaborators committed
            to rigorous, high-impact research.
>>>>>>> Vamsi
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
