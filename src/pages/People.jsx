import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import PersonCard from "../components/ui/PersonCard";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const fallbackPhoto = "/brand/qudais-mark.svg";
const facultyPhotos = {
  asha: "/photos/asha.jpeg",
  della: "/photos/2.%20Della%20Photo%2054%20kb_11zon%20-%20Dr.%20Della%20Thomas%20-IIITK.jpg",
  christina: "/photos/xtina-pic%20-%20Dr.%20Christina%20-IIITK.jpg",
  suriyapriya: "/photos/suriyapriya.jpg",
  johnPaul: "/photos/jp-photo%20-%20Dr.John%20Paul%20-IIITK.jpeg",
  riyasudheen: "/photos/riyasudheen.jpg",
  binu: "/photos/binum.JPG",
  prajeesh: "/photos/Prajeesh%20-%20Bhadra%20A%20V.png",
  mirothali: "/photos/IITM%20-%20Mirothali%20Chand.jpeg",
  santhos: "/photos/Santhos.JPG",
  bala: "/photos/bala.JPG",
  sairaj: "/photos/sairaj.jpg",
};

const peopleMetrics = [
  { label: "Faculty Members", value: "15" },
  { label: "Doctoral Students Listed", value: "2" },
  { label: "Core Research Domains", value: "4" },
  { label: "Interdisciplinary Focus Areas", value: "20+" },
];

const faculty = [
  {
    name: "Dr. Rubell Marion Lincy G.",
    role: "Faculty Member",
    focus: "Interdisciplinary quantum technology research and AI systems development.",
    image: fallbackPhoto,
  },
  {
    name: "Dr. Asha Sebastian",
    role: "Faculty Member",
    focus: "Quantum computing, mathematics for quantum computing, and post-quantum cryptography.",
    image: facultyPhotos.asha,
  },
  {
    name: "Dr. Panchami V",
    role: "Faculty Member",
    focus: "Quantum technology applications in interdisciplinary computing domains.",
    image: fallbackPhoto,
  },
  {
    name: "Dr. Della Thomas",
    role: "Faculty Member",
    focus: "Quantum photonic sensors, quantum spectrometer systems, and light spectroscopy.",
    image: facultyPhotos.della,
  },
  {
    name: "Dr. Christina Terese Joseph",
    role: "Faculty Member",
    focus: "Quantum AI, edge-ready quantum learning, cloud and distributed systems, and DevOps.",
    image: facultyPhotos.christina,
  },
  {
    name: "Dr. Suriyapriya K",
    role: "Faculty Member",
    focus: "Fuzzy rule-based explainable AI, type-2 fuzzy systems, and uncertainty modeling.",
    image: facultyPhotos.suriyapriya,
  },
  {
    name: "Dr. John Paul Martin",
    role: "Faculty Member",
    focus: "Quantum computing, edge intelligence, distributed systems, and reinforcement learning.",
    image: facultyPhotos.johnPaul,
  },
  {
    name: "Dr. Riyasudheen T K",
    role: "Faculty Member",
    focus: "Quantum computing, mathematics for quantum computing, quantum PDE, and quantum finance.",
    image: facultyPhotos.riyasudheen,
  },
  {
    name: "Dr. Binu M",
    role: "Faculty Member",
    focus: "Mathematics for quantum computing, graph neural networks, and graph foundational models.",
    image: facultyPhotos.binu,
  },
  {
    name: "Dr. A V Prajeesh",
    role: "Faculty Member",
    focus: "Computer vision, time series forecasting, deep learning, and graph learning models.",
    image: facultyPhotos.prajeesh,
  },
  {
    name: "Dr. Mirothali Chand C",
    role: "Faculty Member",
    focus: "Time series forecasting, sustainability ML, multimodal data fusion, and optimization.",
    image: facultyPhotos.mirothali,
  },
  {
    name: "Dr. Santhos Kumar A.",
    role: "Faculty Member",
    focus: "Quantum AI, quantum machine learning, quantum NLP, computer vision, and deep learning.",
    image: facultyPhotos.santhos,
  },
  {
    name: "Dr. Balasubramanian P",
    role: "Faculty Member",
    focus: "Quantum machine learning and quantum natural language processing.",
    image: facultyPhotos.bala,
  },
  {
    name: "Dr. R. Tharaniya Sairaj",
    role: "Faculty Member",
    focus: "Quantum transformers, quantum NLP, quantum agentic AI, and fuzzy decision systems.",
    image: facultyPhotos.sairaj,
  },
  {
    name: "Dr. Selvi C",
    role: "Faculty Member",
    focus: "Applied AI and interdisciplinary computing contributions to quantum research themes.",
    image: fallbackPhoto,
  },
];

const researchers = [
  {
    name: "Arunima B Krishnan",
    role: "PhD Scholar (2024PHD13001)",
    focus: "Doctoral researcher associated with quantum computing initiatives under QuDAIS guidance.",
    image: fallbackPhoto,
  },
  {
    name: "Ms. Janaki M",
    role: "Student Research Contributor",
    focus: "Student contributor in graph and quantum-related computational research activities.",
    image: fallbackPhoto,
  },
];

const students = [
  {
    name: "BTech and iMTech Cohort",
    role: "Student Innovation Track",
    focus: "Project-based learning in quantum computing foundations, AI systems, and applied research.",
    image: fallbackPhoto,
  },
  {
    name: "MTech and PhD Cohort",
    role: "Advanced Research Track",
    focus: "Focused contributions in quantum AI, cryptography, sensing, communication, and FinTech applications.",
    image: fallbackPhoto,
  },
];

const alumni = [
  {
    name: "Academic Alumni Network",
    role: "Emerging",
    focus: "The QuDAIS alumni network is being developed as current student cohorts progress to advanced roles.",
    image: fallbackPhoto,
  },
  {
    name: "Industry Pathways",
    role: "In Development",
    focus: "QuDAIS programs are designed to build pathways into research labs, startups, and innovation teams.",
    image: fallbackPhoto,
  },
];

function PeopleSection({ eyebrow, title, description, entries, striped = false }) {
  return (
    <SectionWrapper className={striped ? "soft-section border-y border-sky-100/80" : ""}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {entries.map((person) => (
          <PersonCard
            key={person.name}
            name={person.name}
            role={person.role}
            focus={person.focus}
            image={person.image}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default function People() {
  return (
    <>
      <PageHero
        title="People"
        description="QuDAIS brings together faculty and students at IIIT Kottayam to advance quantum technologies across AI, FinTech, communication, and sensing."
        accent="QuDAIS Community"
        ctaText="View Opportunities"
        ctaTo="/join"
      />

      <SectionWrapper>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {peopleMetrics.map((item) => (
            <Card key={item.label} className="p-6">
              <p className="text-3xl font-semibold text-gray-900">{item.value}</p>
              <p className="mt-2 text-sm text-gray-600">{item.label}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <SectionHeader
          eyebrow="Leadership"
          title="Faculty leadership spotlight"
          description="QuDAIS faculty collectively shape the scientific vision, mentoring ecosystem, and interdisciplinary roadmap."
        />
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <Card className="lg:col-span-2 p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-900 mb-3">
                QuDAIS Note
              </p>
              <h3 className="text-2xl font-semibold text-gray-900">
                "Grounded research, collaborative execution, and societal
                relevance define QuDAIS programs."
              </h3>
              <p className="mt-5 text-gray-600 leading-relaxed">
                Faculty members contribute expertise across quantum computing,
                quantum AI, cryptography, sensing, fuzzy systems, graph
                learning, and systems engineering to support student and
                researcher growth.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/research" variant="secondary">
                Explore Research Programs
              </Button>
            </div>
          </Card>

          <PersonCard
            name={faculty[0].name}
            role={faculty[0].role}
            focus={faculty[0].focus}
            image={faculty[0].image}
          />
        </div>
      </SectionWrapper>

      <PeopleSection
        eyebrow="Faculty"
        title="Faculty members"
        description="The core QuDAIS faculty team and selected expertise areas."
        entries={faculty}
      />

      <PeopleSection
        eyebrow="Researchers"
        title="Listed student researchers"
        description="Current student contributors explicitly nominated for QuDAIS participation."
        entries={researchers}
        striped
      />

      <PeopleSection
        eyebrow="Students"
        title="Student pathways"
        description="Structured tracks for undergraduate and graduate student involvement in QuDAIS activities."
        entries={students}
      />

      <PeopleSection
        eyebrow="Alumni"
        title="Alumni and transition pathways"
        description="Career and research transition pathways connected to QuDAIS training and mentorship."
        entries={alumni}
        striped
      />

      <SectionWrapper>
        <div className="glass-surface rounded-3xl p-10 text-center md:p-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Join The Community
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Build your quantum research journey with QuDAIS
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Explore student admissions, collaborative projects, and opportunities
            to contribute to high-impact interdisciplinary programs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/join">View Opportunities</Button>
            <Button to="/collaborations" variant="secondary">
              Visiting Scholar Program
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
