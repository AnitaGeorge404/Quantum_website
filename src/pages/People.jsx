import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import FacultyCard from "../components/ui/FacultyCard";
import PersonCard from "../components/ui/PersonCard";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const fallbackPhoto = "/brand/qudais-mark.svg";
const facultyPhotos = {
  lincy: "/photos/lincy.jpeg",
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
  panchami: "/photos/panchami.jpeg",
  selvi: "/photos/selvi.jpeg",
};

const peopleMetrics = [
  { label: "Faculty Members", value: "15" },
  { label: "Doctoral Students", value: "6" },
  { label: "Core Research Domains", value: "4" },
  { label: "Interdisciplinary Focus Areas", value: "35+" },
];

// Faculty data from form submissions with exact information provided
const faculty = [
  {
    name: "Dr. Rubell Marion Lincy G",
    phone: "0482-2202152",
    email: "lincy@iiitkottayam.ac.in",
    linkedin: "https://www.linkedin.com/in/rubell-marion-lincy-g/",
    researchAreas: ["Quantum Computing", "Mathematics for Quantum Computing", "Quantum AI", "Quantum Machine Learning", "Quantum Financial Systems", "AI", "ML", "Deep Learning"],
    image: facultyPhotos.lincy,
  },
  {
    name: "Asha Sebastian",
    phone: "+91 (0) 482-2202248",
    email: "asha@iiitkottayam.ac.in",
    linkedin: "https://www.linkedin.com/in/asha-sebastian-4948aba8?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    researchAreas: ["Quantum Computing", "Mathematics for Quantum Computing", "Post-Quantum Cryptography"],
    image: facultyPhotos.asha,
  },
  {
    name: "Dr. Panchami V",
    phone: "+91 (0) 482-2202151",
    email: "panchamam036@iiitkottayam.ac.in",
    linkedin: "",
    researchAreas: ["Quantum Cryptography", "Post-Quantum Cryptography"],
    image: facultyPhotos.panchami,
  },
  {
    name: "Dr. R. Tharaniya Sairaj",
    phone: "2202227",
    email: "sairaj@iiitkottayam.ac.in",
    linkedin: "https://www.linkedin.com/in/dr-r-tharaniya-sairaj-2a515b111/",
    researchAreas: ["Mathematics for Quantum Computing", "Quantum Machine Learning", "Quantum Agentic AI", "Quantum Transformers", "Quantum NLP", "Deep Learning", "Fuzzy Multi-Criteria Decision Making"],
    image: facultyPhotos.sairaj,
  },
  {
    name: "Dr. Balasubramanian P",
    phone: "0482-2202258",
    email: "pbala@iiitkottayam.ac.in",
    linkedin: "https://www.linkedin.com/in/balasubramanian-p-3bb380148?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    researchAreas: ["Quantum Machine Learning", "Quantum NLP"],
    image: facultyPhotos.bala,
  },
  {
    name: "Dr. Suriyapriya K",
    phone: "91 04822202254",
    email: "suriyapriya@iiitkottayam.ac.in",
    linkedin: "https://www.linkedin.com/in/suriyapriya-k-7452a2299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    researchAreas: ["Fuzzy Rule-Based Systems for Explainable AI", "Fuzzy Multi-Criteria Decision Making", "Type-2 Fuzzy Systems in Machine Learning", "Fuzzy Uncertainty Modeling in Data Science", "Fuzzy Risk Assessment Models"],
    image: facultyPhotos.suriyapriya,
  },
  {
    name: "Dr. Santhos Kumar A.",
    phone: "+91 (0) 482-2202177",
    email: "santhos@iiitkottayam.ac.in",
    linkedin: "https://www.linkedin.com/in/dr-santhos-kumar-a-",
    researchAreas: ["Quantum AI", "Quantum Machine Learning", "Quantum Agentic AI", "Quantum Transformers", "Quantum NLP", "Computer Vision", "Deep Learning"],
    image: facultyPhotos.santhos,
  },
  {
    name: "Dr. Riyasudheen TK",
    phone: "04822202256",
    email: "riyasudheen@iiitkottayam.ac.in",
    linkedin: "https://www.linkedin.com/in/riaztk",
    researchAreas: ["Quantum Computing", "Mathematics for Quantum Computing", "Quantum PDE", "Quantum Finance"],
    image: facultyPhotos.riyasudheen,
  },
  {
    name: "Dr. Mirothali Chand C",
    phone: "+91 (0) 482-2202369",
    email: "mirothalichand@iiitkottayam.ac.in",
    linkedin: "https://www.linkedin.com/in/mirothalichand/",
    researchAreas: ["Time Series Forecasting", "Reinforcement Learning", "Machine Learning for Geohazards & Climate Change", "Machine Learning for Sustainability", "Multimodal Machine Learning & Data Fusion", "Combinatorial Optimization"],
    image: facultyPhotos.mirothali,
  },
  {
    name: "Dr. Binu M",
    phone: "4822202276",
    email: "binum@iiitkottayam.ac.in",
    linkedin: "https://www.linkedin.com/in/binu-m-8779a6193",
    researchAreas: ["Mathematics for Quantum Computing", "Graph Neural Networks", "Graph Foundational Models"],
    image: facultyPhotos.binu,
  },
  {
    name: "Dr. A V Prajeesh",
    phone: "914822202371",
    email: "prajeesh@iiitkottayam.ac.in",
    linkedin: "https://www.linkedin.com/in/dr-a-v-prajeesh-9b6b0262/",
    researchAreas: ["Computer Vision", "Time Series Forecasting", "Graph Neural Networks", "Graph Foundational Models", "Deep Learning"],
    image: facultyPhotos.prajeesh,
  },
  {
    name: "Dr. Christina Terese Joseph",
    phone: "04822202173",
    email: "christina@iiitkottayam.ac.in",
    linkedin: "https://www.linkedin.com/in/christina-joseph-74b5213b/",
    researchAreas: ["Quantum AI", "Quantum Machine Learning", "Quantum Agentic AI", "Edge-ready Quantum AI for Smart Medical Devices", "Hybrid Quantum Learning for Edge Intelligence Systems", "Edge Computing", "Distributed Computing", "Cloud Computing", "Containers", "DevOps", "Graph Foundational Models", "Deep Learning", "Reinforcement Learning", "Quantum Reinforcement Learning"],
    image: facultyPhotos.christina,
  },
  {
    name: "Dr. Della Thomas",
    phone: "04822202183",
    email: "della@iiitkottayam.ac.in",
    linkedin: "https://www.linkedin.com/in/della-thomas-2a9a9566/",
    researchAreas: ["Quantum Photonic Sensors for Biological Applications", "Environmental Monitoring & Materials Characterization", "Quantum Spectrometer (Light Property Measurement)", "Quantum Light Spectroscopy"],
    image: facultyPhotos.della,
  },
  {
    name: "Dr. John Paul Martin",
    phone: "04822202202",
    email: "johnpaul@iiitkottayam.ac.in",
    linkedin: "https://in.linkedin.com/in/john-martin-6658ab28",
    researchAreas: ["Quantum Computing", "Edge-ready Quantum AI for Smart Medical Devices", "Hybrid Quantum Learning for Edge Intelligence Systems", "Edge Computing", "Distributed Computing", "Cloud Computing", "Containers", "DevOps", "Time Series Forecasting", "Reinforcement Learning", "Quantum Reinforcement Learning"],
    image: facultyPhotos.johnPaul,
  },
  {
    name: "Dr. Selvi C",
    phone: "+91 (0) 482-2202212",
    email: "selvi@iiitkottayam.ac.in",
    linkedin: "",
    researchAreas: ["Computer Vision", "Quantum Neural Networks"],
    image: facultyPhotos.selvi,
  },
];

const researchers = [
  {
    name: "Ms. Sheba Elizabth Thomas",
    role: "PhD Scholar",
    focus: "Doctoral researcher in quantum computing initiatives under QuDAIS mentorship.",
    image: fallbackPhoto,
  },
  {
    name: "Ms. Parvathy Gopakumar",
    role: "PhD Scholar",
    focus: "Doctoral researcher in quantum computing initiatives under QuDAIS mentorship.",
    image: fallbackPhoto,
  },
  {
    name: "Ms. Fathima Nihla Latheef",
    role: "PhD Scholar",
    focus: "Doctoral researcher in quantum computing initiatives under QuDAIS mentorship.",
    image: fallbackPhoto,
  },
  {
    name: "Ms. Gopikrishna P B",
    role: "PhD Scholar",
    focus: "Doctoral researcher in quantum computing initiatives under QuDAIS mentorship.",
    image: fallbackPhoto,
  },
  {
    name: "Ms. Janaki M",
    role: "PhD Scholar",
    focus: "Student contributor in graph and quantum-related computational research.",
    image: fallbackPhoto,
  },
  {
    name: "Arunima B Krishnan",
    role: "PhD Scholar (2024PHD13001)",
    focus: "Doctoral researcher in quantum computing initiatives under QuDAIS mentorship.",
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

      <SectionWrapper className="bg-slate-50/50 py-16 border-b border-slate-100">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {peopleMetrics.map((item) => (
            <Card key={item.label} className="p-6 md:p-8 flex flex-col items-start bg-white shadow-sm border border-slate-100/60">
              <p className="text-4xl font-bold text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm md:text-base text-slate-600">{item.label}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <SectionHeader
          eyebrow="Leadership"
          title="Faculty leadership"
          description="QuDAIS faculty members collectively shape the scientific vision, mentoring ecosystem, and interdisciplinary roadmap across quantum computing, AI, FinTech, communication, and sensing."
        />
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <Card className="lg:col-span-2 p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-900 mb-3">
                QuDAIS Faculty
              </p>
              <h3 className="text-2xl font-semibold text-gray-900">
                Grounded research, collaborative execution, and societal relevance.
              </h3>
              <p className="mt-5 text-gray-600 leading-relaxed">
                Faculty members contribute specialized expertise across quantum computing, quantum AI, post-quantum cryptography, sensing systems, fuzzy logic, graph learning, and systems engineering to support student and researcher development.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/research" variant="secondary">
                Explore Research
              </Button>
            </div>
          </Card>

          <FacultyCard
            name={faculty[0].name}
            phone={faculty[0].phone}
            email={faculty[0].email}
            linkedin={faculty[0].linkedin}
            researchAreas={faculty[0].researchAreas}
            image={faculty[0].image}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="Faculty"
          title="Faculty members"
          description="QuDAIS faculty with expertise across quantum technologies, artificial intelligence, communication, and sensing with contact information and research specializations."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <FacultyCard
              key={member.name}
              name={member.name}
              phone={member.phone}
              email={member.email}
              linkedin={member.linkedin}
              researchAreas={member.researchAreas}
              image={member.image}
            />
          ))}
        </div>
      </SectionWrapper>

      <PeopleSection
        eyebrow="Researchers"
        title="Listed student researchers"
        description="Current student contributors explicitly nominated for QuDAIS participation."
        entries={researchers}
        striped
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Student Pathways"
          title="Student pathways"
          description="Structured student pathways and cohort programs are currently being developed. Detailed information will be updated soon."
        />
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <SectionHeader
          eyebrow="Alumni"
          title="Alumni and transition pathways"
          description="Alumni network and transition pathways are currently under development. Updates will be available soon."
        />
      </SectionWrapper>

      <SectionWrapper>
        <div className="glass-surface rounded-3xl p-10 text-center md:p-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Join The Community
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Build your quantum research journey with QuDAIS
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Explore student admissions, collaborative research programs, and opportunities to contribute to high-impact interdisciplinary initiatives.
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
