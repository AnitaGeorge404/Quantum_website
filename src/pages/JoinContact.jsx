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

      <SectionWrapper className="bg-gray-50 border-y border-gray-200">
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

        <form className="max-w-3xl rounded-xl border border-gray-200 bg-white shadow-sm p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input id="name" type="text" className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input id="email" type="email" className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900" placeholder="your.email@domain.com" />
          </div>
          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Interest Area</label>
            <select id="interest" className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900">
              <option>PhD Admissions</option>
              <option>Internship</option>
              <option>Research Collaboration</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea id="message" rows="5" className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900" placeholder="Write your message" />
          </div>
          <Button type="submit">Send Inquiry</Button>
        </form>
      </SectionWrapper>
    </>
  );
}