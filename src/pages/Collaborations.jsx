import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const partnerUniversities = [
  "IIIT Kottayam Academic Departments",
  "Indian Institute of Science (IISc)",
  "IIT Madras",
  "IIT Bombay",
  "IISER Research Community",
  "National Academic Research Networks",
];

const industryPartners = [
  "Applied AI and FinTech Organizations",
  "Quantum-Safe Cybersecurity Partners",
  "Cloud and Edge Infrastructure Providers",
  "Advanced Computing and Semiconductor Partners",
  "Healthcare Technology Collaborators",
  "Sensing and Instrumentation Stakeholders",
];

const fundingAgencies = [
  "Department of Science and Technology (DST)",
  "Ministry of Electronics and Information Technology (MeitY)",
  "Anusandhan National Research Foundation (ANRF)",
  "National Quantum Mission",
  "Industry Co-funded Research Consortia",
  "Interdisciplinary Innovation Grants",
];

function LogoGrid({ title, items }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item} className="p-6 flex items-center justify-center text-center min-h-[112px]">
            <span className="text-sm font-semibold tracking-wide text-blue-900">{item}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function Collaborations() {
  return (
    <>
      <PageHero
        title="Collaborations"
        description="QuDAIS engages with academic, industry, and funding partners to accelerate impactful quantum technology development."
        accent="Partnership Ecosystem"
        ctaText="Contact QuDAIS"
        ctaTo="/join"
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Partner Universities"
          title="Academic collaboration network"
          description="Joint research programs, knowledge exchange, and interdisciplinary publication efforts."
        />
        <LogoGrid title="Universities" items={partnerUniversities} />
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <SectionHeader
          eyebrow="Industry Collaborations"
          title="Translational research alliances"
          description="Co-development initiatives to bridge laboratory research with deployable technologies."
        />
        <LogoGrid title="Industry" items={industryPartners} />
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="Funding Agencies"
          title="Strategically supported programs"
          description="National and international grants sustaining long-horizon scientific excellence."
        />
        <LogoGrid title="Funding" items={fundingAgencies} />
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <div className="glass-surface rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Build impact with us</h2>
          <p className="mt-4 text-lg text-slate-600">We welcome co-funded projects, shared infrastructure initiatives, and long-term institutional partnerships.</p>
          <div className="mt-8">
            <Button to="/join">Initiate Collaboration</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}