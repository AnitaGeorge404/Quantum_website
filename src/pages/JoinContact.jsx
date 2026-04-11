import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const opportunities = [
  {
    title: "Student Research Participation",
    detail:
      "Research pathways for BTech, MTech, iMTech, and PhD students in quantum computing and related technologies.",
  },
  {
    title: "Workshops and Training Programs",
    detail:
      "Structured courses and workshops to demystify quantum computing, AI integration, and applied domains.",
  },
  {
    title: "Socially Relevant Project Initiatives",
    detail:
      "Collaborative projects focused on high-quality publications, technology deliverables, and societal impact.",
  },
];

const contacts = [
  {
    label: "General Enquiries",
    email: "asha@iiitkottayam.ac.in",
    phone: "+91 94953 93573",
  },
  {
    label: "Research Collaborations",
    email: "johnpaul@iiitkottayam.ac.in",
    phone: "+91 0482 2202202",
  },
  {
    label: "Admissions & Opportunities",
    email: "riyasudheen@iiitkottayam.ac.in",
    phone: "+91 0482 2202256",
  },
];

export default function JoinContact() {
  return (
    <>
      <PageHero
        title="Join / Contact"
        description="Connect with QuDAIS for student participation, collaborative research, workshops, and interdisciplinary initiatives."
        accent="Opportunities and Outreach"
        ctaText="See Opportunities"
        ctaTo="/join"
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Open Positions"
          title="Current opportunities"
          description="QuDAIS welcomes motivated students and collaborators committed to rigorous and meaningful research."
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
          title="Connect with QuDAIS"
          description="Direct channels for programs, partnerships, and research communication."
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
            <input id="name" type="text" className="w-full rounded-xl border border-sky-100 bg-white/80 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-pink-300" placeholder="e.g., Ananya Nair" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input id="email" type="email" className="w-full rounded-xl border border-sky-100 bg-white/80 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-pink-300" placeholder="e.g., learner@example.com" />
          </div>
          <div>
            <label htmlFor="interest" className="mb-2 block text-sm font-medium text-slate-700">Interest Area</label>
            <select id="interest" className="w-full rounded-xl border border-sky-100 bg-white/80 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-pink-300">
              <option>PhD Admissions</option>
              <option>BTech / MTech Project Participation</option>
              <option>Workshop or Training Program</option>
              <option>Research Collaboration</option>
              <option>Outreach Activity</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
            <textarea id="message" rows="5" className="w-full rounded-xl border border-sky-100 bg-white/80 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-pink-300" placeholder="Share your research interest, background, and how you would like to engage with QuDAIS." />
          </div>
          <Button type="submit">Send Inquiry</Button>
        </form>
      </SectionWrapper>
    </>
  );
}