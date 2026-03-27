import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const opportunities = [
  {
    title: "Doctoral Positions",
    detail:
      "Funded PhD opportunities in quantum algorithms, error correction, and quantum systems engineering.",
  },
  {
    title: "Research Internships",
    detail:
      "Semester and summer internship tracks for graduate and advanced undergraduate students.",
  },
  {
    title: "Research Associate Roles",
    detail:
      "Early-career roles for researchers contributing across theory, hardware, and software programs.",
  },
];

const contacts = [
  {
    label: "General Enquiries",
    email: "quantumlab@institute.edu",
    phone: "+91 98765 43210",
  },
  {
    label: "Research Collaborations",
    email: "collaborations@institute.edu",
    phone: "+91 98765 43211",
  },
  {
    label: "Admissions & Opportunities",
    email: "join@institute.edu",
    phone: "+91 98765 43212",
  },
];

export default function JoinContact() {
  return (
    <>
      <PageHero
        title="Join / Contact"
        description="Explore open opportunities and connect with our team for admissions, collaborations, or general institute enquiries."
        accent="Opportunities"
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Open Positions"
          title="Current opportunities"
          description="We seek motivated researchers and scholars committed to rigorous quantum science."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((item) => (
            <Card key={item.title} className="p-7">
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{item.detail}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <SectionHeader
          eyebrow="Contact Information"
          title="Connect with the institute"
          description="Direct channels for enquiries related to programs, partnerships, and communication."
        />
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {contacts.map((item) => (
            <Card key={item.label} className="p-7">
              <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
              <p className="mt-3 text-gray-600">{item.email}</p>
              <p className="mt-1 text-gray-600">{item.phone}</p>
            </Card>
          ))}
        </div>

        <form className="glass-surface max-w-3xl rounded-3xl p-8 space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
            <input id="name" type="text" className="w-full rounded-xl border border-sky-100 bg-white/80 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-pink-300" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input id="email" type="email" className="w-full rounded-xl border border-sky-100 bg-white/80 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-pink-300" placeholder="your.email@domain.com" />
          </div>
          <div>
            <label htmlFor="interest" className="mb-2 block text-sm font-medium text-slate-700">Interest Area</label>
            <select id="interest" className="w-full rounded-xl border border-sky-100 bg-white/80 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-pink-300">
              <option>PhD Admissions</option>
              <option>Internship</option>
              <option>Research Collaboration</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
            <textarea id="message" rows="5" className="w-full rounded-xl border border-sky-100 bg-white/80 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-pink-300" placeholder="Write your message" />
          </div>
          <Button type="submit">Send Inquiry</Button>
        </form>
      </SectionWrapper>
    </>
  );
}