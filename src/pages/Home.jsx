import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import ResearchCard from "../components/ui/ResearchCard";
import NewsCard from "../components/ui/NewsCard";
import GalleryCard from "../components/ui/GalleryCard";
import Button from "../components/ui/Button";
import AboutLabBrandSection from "../components/home/AboutLabBrandSection";

const labOverview = [
  {
    title: "About QuDAIS Lab",
    summary:
      "QuDAIS Lab at IIIT Kottayam advances Quantum Technology Developments in Artificial Intelligence Systems through interdisciplinary research and innovation.",
    tag: "Lab Overview",
  },
  {
    title: "Vision",
    summary:
      "To build a hub for quantum computing and associated technologies that drives innovation across AI, FinTech, Communication, and Sensing while upskilling the community.",
    tag: "Lab Overview",
  },
  {
    title: "Mission",
    summary:
      "To pioneer research at the confluence of quantum computing with AI, FinTech, Communication, and Sensing through collaborative, application-oriented programs.",
    tag: "Lab Overview",
  },
];

const researchHighlights = [
  {
    title: "Quantum AI and Machine Learning",
    summary:
      "Hybrid deep learning with quantum layers, quantum transformers, quantum NLP, and edge-ready quantum AI systems.",
    tag: "Research Highlights",
  },
  {
    title: "Quantum FinTech and Security",
    summary:
      "Quantum financial systems, quantum cryptography, and post-quantum cryptography for secure and resilient digital ecosystems.",
    tag: "Research Highlights",
  },
  {
    title: "Quantum Communication and Sensing",
    summary:
      "Quantum photonic sensors, spectroscopy systems, and interdisciplinary sensing applications for healthcare and environment.",
    tag: "Research Highlights",
  },
];

const latestNews = [
  {
    title: "QuDAIS expands interdisciplinary research initiatives at IIIT Kottayam",
    date: "April 2026",
    summary:
      "The lab announced expanded focus tracks spanning Quantum AI, FinTech, Communication, and Sensing with faculty-led programs.",
  },
  {
    title: "Faculty onboarding completed for QuDAIS research clusters",
    date: "April 2026",
    summary:
      "Faculty from Computer Science, Mathematics, AI, and Systems now lead dedicated research themes and student mentoring pathways.",
  },
  {
    title: "Training and outreach roadmap released",
    date: "March 2026",
    summary:
      "Upcoming workshops and public-facing sessions aim to demystify quantum technologies and improve technology awareness.",
  },
];

const facilitiesPreview = [
  {
    title: "Cryogenic Hardware Suite",
    subtitle:
      "Ultra-low temperature systems for superconducting qubit experimentation",
    image: "/photos/2.%20Della%20Photo%2054%20kb_11zon%20-%20Dr.%20Della%20Thomas%20-IIITK.jpg",
  },
  {
    title: "Quantum Simulation Cluster",
    subtitle:
      "High-performance compute resources for large-scale algorithm evaluation",
    image: "/photos/IITM%20-%20Mirothali%20Chand.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <PageHero
        title="QuDAIS Lab"
        description="Quantum Technology Developments in Artificial Intelligence Systems Research Lab at IIIT Kottayam, focused on accelerating interdisciplinary quantum innovation."
        accent="IIIT Kottayam"
        brandLogo="/brand/qudais-lockup.svg"
        brandName="Quantum Technology Developments in Artificial Intelligence Systems Research Lab"
        ctaText="Explore Research"
        ctaTo="/research"
      />

      <AboutLabBrandSection />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Lab Overview"
          title="Purpose-driven research across quantum and intelligent systems"
          description="QuDAIS aligns foundational science with application-focused outcomes for national and global impact."
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
          title="Major interdisciplinary focus areas"
          description="Selected domains where QuDAIS is building long-term capability, talent, and translational outcomes."
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
          title="Recent QuDAIS milestones"
          description="Highlights from faculty engagement, program development, and outreach initiatives."
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
          title="Ecosystem for research and innovation"
          description="A coordinated environment for experimentation, publication, outreach, and collaborative development."
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
              Meet faculty members and researchers driving QuDAIS programs
              across quantum computing, AI, FinTech, communication, and sensing.
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
              Explore institutional, academic, and industry collaborations that
              support high-impact and socially relevant quantum initiatives.
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
            Join QuDAIS programs and build quantum-ready expertise
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            We welcome BTech, MTech, iMTech, and PhD students, along with
            collaborators committed to rigorous and socially relevant research.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/join">Apply or Contact</Button>
            <Button to="/research" variant="secondary">
              Explore Research
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
