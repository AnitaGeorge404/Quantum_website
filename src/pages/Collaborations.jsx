import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const partnerUniversities = [
  "Massachusetts Institute of Technology",
  "University of Oxford",
  "ETH Zurich",
  "Indian Institute of Science",
  "Stanford University",
  "National University of Singapore",
];

const industryPartners = [
  "IBM Research",
  "Google Quantum AI",
  "Microsoft Quantum",
  "NVIDIA Research",
  "Intel Labs",
  "Tata Research Development",
];

const fundingAgencies = [
  "National Science Foundation",
  "Department of Science and Technology",
  "European Research Council",
  "Quantum Technology Mission",
  "Industry Innovation Consortia",
  "International Research Funds",
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
        description="Our institute works with leading universities, industry laboratories, and funding organizations to accelerate quantum innovation."
        accent="Global Partnerships"
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Partner Universities"
          title="Academic collaboration network"
          description="Joint research programs, scholar exchanges, and co-authored publications across global institutions."
        />
        <LogoGrid title="Universities" items={partnerUniversities} />
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <SectionHeader
          eyebrow="Industry Collaborations"
          title="Translational research alliances"
          description="Co-development with industry partners to bridge fundamental science and deployable systems."
        />
        <LogoGrid title="Industry" items={industryPartners} />
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="Funding Agencies"
          title="Strategic supported programs"
          description="National and international grants sustaining long-horizon scientific excellence."
        />
        <LogoGrid title="Funding" items={fundingAgencies} />
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <div className="glass-surface rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Build impact with us</h2>
          <p className="mt-4 text-lg text-slate-600">We welcome co-funded projects, visiting scholar programs, and long-term institutional partnerships.</p>
          <div className="mt-8">
            <Button to="/join">Initiate Collaboration</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}