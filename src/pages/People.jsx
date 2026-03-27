import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import PersonCard from "../components/ui/PersonCard";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const peopleMetrics = [
  { label: "Faculty", value: "12" },
  { label: "Researchers", value: "24" },
  { label: "Doctoral Scholars", value: "35" },
  { label: "Alumni Network", value: "180+" },
];

const faculty = [
  {
    name: "Dr. Sarah Chen",
    role: "Principal Investigator",
    focus: "Fault-tolerant quantum computation and complexity theory.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dr. Rajesh Iyer",
    role: "Associate Professor",
    focus: "Quantum error correction and robust architecture design.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
];

const researchers = [
  {
    name: "Dr. Emily Nakamura",
    role: "Research Scientist",
    focus: "Hybrid quantum-classical machine learning systems.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "David Kim",
    role: "Research Associate",
    focus: "Photonic quantum control and instrumentation.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  },
];

const students = [
  {
    name: "Anika Patel",
    role: "PhD Scholar",
    focus: "Optimization algorithms for near-term quantum hardware.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "James Liu",
    role: "PhD Scholar",
    focus: "Calibration strategies for superconducting qubits.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
];

const alumni = [
  {
    name: "Dr. Fatima Al-Rashid",
    role: "Alumni · Quantum Systems Engineer",
    focus: "Leading scalable architecture teams in industry research laboratories.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Carlos Rivera",
    role: "Alumni · Research Engineer",
    focus: "Contributing to quantum compiler development and deployment.",
    image:
      "https://images.unsplash.com/photo-1564564295391-7f24f26f568b?auto=format&fit=crop&w=900&q=80",
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
        description="Our institute brings together faculty, researchers, students, and alumni shaping the future of quantum science."
        accent="Research Community"
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
          description="Institute leadership provides scientific vision, mentorship culture, and long-term research direction."
        />
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <Card className="lg:col-span-2 p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-900 mb-3">
                Director’s Note
              </p>
              <h3 className="text-2xl font-semibold text-gray-900">
                “Rigorous science, open collaboration, and long-horizon vision
                define our institute.”
              </h3>
              <p className="mt-5 text-gray-600 leading-relaxed">
                Our people-first model combines deep theoretical research,
                advanced infrastructure, and mentoring pathways that help young
                researchers become future leaders in quantum technology.
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
        title="Academic leadership"
        description="Faculty members guide long-term scientific strategy and institute direction."
        entries={faculty}
      />

      <PeopleSection
        eyebrow="Researchers"
        title="Core research staff"
        description="Postdoctoral and research scientists driving active programs."
        entries={researchers}
        striped
      />

      <PeopleSection
        eyebrow="Students"
        title="Doctoral and graduate scholars"
        description="Emerging researchers contributing across algorithm, systems, and hardware tracks."
        entries={students}
      />

      <PeopleSection
        eyebrow="Alumni"
        title="Global alumni network"
        description="Our alumni continue to lead in academia, industry, and innovation ecosystems."
        entries={alumni}
        striped
      />

      <SectionWrapper>
        <div className="glass-surface rounded-3xl p-10 text-center md:p-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Join The Community
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Build your research career with us
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Explore open roles, doctoral admissions, and visiting researcher
            opportunities across our institute.
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
