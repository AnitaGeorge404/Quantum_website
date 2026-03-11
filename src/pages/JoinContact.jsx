import OpportunitiesSection from '../components/join/OpportunitiesSection';
import ContactSection from '../components/join/ContactSection';
import '../styles/join.css';

const opportunities = [
  {
    title: "AI Research Fellowship",
    category: "Research",
    type: "Fellowship · 12 months",
    eligibility: "Grad students & postdocs",
    description: "Work alongside leading researchers on frontier AI problems.",
  },
  {
    title: "Open Source Infrastructure Grant",
    category: "Engineering",
    type: "Grant · Up to $50k",
    eligibility: "Individuals & small teams",
    description: "Funding for open-source tooling that improves developer productivity.",
  },
  {
    title: "Community Builder Microgrant",
    category: "Community",
    type: "Grant · Up to $5k",
    eligibility: "Open to all",
    description: "Bootstrap a local chapter or create learning resources.",
  },
];

const contacts = [
  {
    title: "General Enquiries",
    email: "quantumlab@university.edu",
    phone: "+91 98765 43210"
  },
  {
    title: "Research Collaborations",
    email: "research.quantum@university.edu",
    phone: "+91 98765 43211"
  },
  {
    title: "Student Opportunities",
    email: "join.quantum@university.edu",
    phone: "+91 98765 43212"
  }
];

export default function JoinMePage() {
  return (
    <div className="join-page">
      <section>
        <h1>Join Us</h1>
        <p>Find the opportunity that fits you.</p>
        <div className="opportunity-list">
          {opportunities.map((opp, i) => (
            <OpportunitiesSection key={i} {...opp} />
          ))}
        </div>
      </section>

      <section>
        <h2>About the lab Contact</h2>
        <div className="contact-list">
          {contacts.map((contact, index) => (
            <ContactSection key={index} {...contact} />
          ))}
        </div>
      </section>
    </div>
  );
}