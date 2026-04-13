import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const internshipDetails = {
  mode: "Offline internship at IIIT Kottayam",
  duration: "8 to 12 weeks (with a 2-week option)",
  deadline: "25 April 2026",
  startDate: "01 May 2026",
  benefits: [
    "E-certificate",
    "Patent and publication opportunities",
    "Interns can extend research activity up to 3 months with mentor approval",
  ],
  eligibility: "B.Tech / B.E / M.Tech / M.E / MCA / MSc / BS-MS",
  links: {
    apply: "https://qudais.iiitkottayam.ac.in",
    payment: "https://onlinesbi.sbi.bank.in/sbicollect/",
    registration: "https://forms.gle/B1RaONAlXWpDgG9S8",
    moreInfo: "https://qudais.iiitkottayam.ac.in",
  },
};

const thrustAreas = [
  "Quantum Computing and Quantum AI",
  "Quantum Machine Learning and Hybrid Quantum-Classical Models",
  "Quantum PDE and Scientific Systems",
  "Agentic AI and AI-Enhanced Quantum Workflows",
  "Quantum NLP and Quantum Transformers",
  "Edge-ready AI and Distributed Computing",
  "Cloud Computing, Containers, and DevOps",
  "Cryptography and Cyber Security",
  "Time-Series Forecasting and Financial Modeling",
  "Quantum Photonic Sensors and Spectrometry",
  "Graph Neural Networks and Fuzzy Rule-Based Systems",
  "Type-2 Fuzzy Systems and Risk Assessment Models",
];

const facultyMentors = [
  "Dr. Rubell Marion Lincy G",
  "Dr. Binu M",
  "Dr. Asha Sebastian",
  "Dr. Prajeesh A V",
  "Dr. Panchami V",
  "Dr. Mirothali Chand",
  "Dr. Delia Thomas",
  "Dr. Santhos Kumar",
  "Dr. Christine Terece Joseph",
  "Dr. Balesundaramanian",
  "Dr. Suriyapriya",
  "Dr. R. Tharaneia Sairaj",
  "Dr. John Paul Martin",
  "Dr. Selvi C",
  "Dr. Riyasudheen T K",
];

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

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <SectionHeader
          eyebrow="Call for Applications"
          title="Summer Internship 2026"
          description="Quantum Technology Developments in AI Systems Research Lab (QuDAIS) invites applications for focused summer research training."
        />

        <Card className="p-8 lg:p-10 border border-sky-100/80 bg-gradient-to-br from-sky-50/80 via-white to-pink-50/70">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Program Snapshot</h3>
              <div className="mt-4 space-y-2 text-slate-700">
                <p><strong>Mode:</strong> {internshipDetails.mode}</p>
                <p><strong>Duration:</strong> {internshipDetails.duration}</p>
                <p><strong>Eligibility:</strong> {internshipDetails.eligibility}</p>
                <p><strong>Application Deadline:</strong> {internshipDetails.deadline}</p>
                <p><strong>Internship Commencement:</strong> {internshipDetails.startDate}</p>
              </div>

              <h4 className="mt-6 text-lg font-semibold text-slate-900">Benefits</h4>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
                {internshipDetails.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-7 space-y-2 text-sky-800 font-medium break-all">
                <p>
                  Apply: <a className="underline decoration-sky-300 underline-offset-4 hover:text-sky-900" href={internshipDetails.links.apply} target="_blank" rel="noreferrer">{internshipDetails.links.apply}</a>
                </p>
                <p>
                  Payment: <a className="underline decoration-sky-300 underline-offset-4 hover:text-sky-900" href={internshipDetails.links.payment} target="_blank" rel="noreferrer">{internshipDetails.links.payment}</a>
                </p>
                <p>
                  Registration: <a className="underline decoration-sky-300 underline-offset-4 hover:text-sky-900" href={internshipDetails.links.registration} target="_blank" rel="noreferrer">{internshipDetails.links.registration}</a>
                </p>
              </div>
            </div>

            <div className="space-y-7">
              <div>
                <h4 className="text-lg font-semibold text-slate-900">Thrust Areas</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {thrustAreas.map((area) => (
                    <span key={area} className="rounded-full border border-sky-200 bg-white px-3 py-1.5 text-sm text-slate-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900">Faculty Mentors</h4>
                <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
                  {facultyMentors.map((name) => (
                    <p key={name} className="rounded-lg bg-white/70 px-3 py-2 border border-sky-100">
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-base font-medium text-slate-800">
            More info: <a className="text-sky-800 underline decoration-sky-300 underline-offset-4 hover:text-sky-900" href={internshipDetails.links.moreInfo} target="_blank" rel="noreferrer">{internshipDetails.links.moreInfo}</a>
          </p>
        </Card>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="Current Opportunities"
          title="Current opportunities"
          description="QuDAIS invites applications for its Summer Internship Programme."
        />
        <Card className="max-w-3xl mx-auto p-8 border border-sky-100/80 bg-gradient-to-br from-sky-50/80 via-white to-pink-50/70">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">Summer Internship 2026</h3>
          <div className="space-y-4 text-slate-700">
            <div>
              <p className="font-semibold text-gray-900">Duration:</p>
              <p>8 to 12 weeks</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Offline Component:</p>
              <p>2 weeks at IIIT Kottayam</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Benefits:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>E-certificate</li>
                <li>Patent & Publication opportunities</li>
                <li>Extension up to 6 months (with mentor approval)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Eligibility:</p>
              <p>B.Tech / B.E / M.Tech / M.E / MCA / MSc / BS-MS</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Deadline:</p>
              <p>25 April 2026</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Start Date:</p>
              <p>01 May 2026</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-sky-100">
            <Button to="/internship" variant="secondary">Learn More</Button>
          </div>
        </Card>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <SectionHeader
          eyebrow="Contact Information"
          title="Connect with QuDAIS"
          description="For all enquiries related to QuDAIS Lab, please contact:"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-8 border border-sky-100/80 bg-white/70">
            <h3 className="text-xl font-semibold text-slate-900">Dr. Rubell Marion Lincy G.</h3>
            <p className="mt-2 text-sm text-slate-600 font-medium">Faculty Coordinator, QuDAIS Lab</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                <a href="mailto:lincy@iiitkottayam.ac.in" className="text-sky-700 hover:text-sky-900 underline">
                  lincy@iiitkottayam.ac.in
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">Phone:</span> 0482-2202152
              </p>
            </div>
          </Card>

          <Card className="p-8 border border-sky-100/80 bg-white/70">
            <h3 className="text-xl font-semibold text-slate-900">Dr. A V Prajeesh</h3>
            <p className="mt-2 text-sm text-slate-600 font-medium">Internship Coordinator</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                <a href="mailto:prajeesh@iiitkottayam.ac.in" className="text-sky-700 hover:text-sky-900 underline">
                  prajeesh@iiitkottayam.ac.in
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">Phone:</span> 91 482 2202371
              </p>
              <p>
                <span className="font-semibold text-slate-900">LinkedIn:</span>{" "}
                <a href="#" className="text-sky-700 hover:text-sky-900 underline">
                  Profile
                </a>
              </p>
            </div>
          </Card>
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