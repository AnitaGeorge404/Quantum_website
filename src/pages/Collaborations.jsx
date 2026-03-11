import CollaborationCard from '../components/collaborationcard.jsx';
import '../styles/Collaboration.css';

export default function Collaborations() {
  return (
    <div className="collaborations-page">
      <h1 className="page-title">Collaborations</h1>

      <div className="collaboration-section">
        <h2 className="section-title">Partner Institutions</h2>
        <div className="collaboration-grid">
          <CollaborationCard
            title="National Quantum Research Centre"
            description="Collaborative research on quantum algorithms and quantum information theory."
          />
          <CollaborationCard
            title="Photonics and Quantum Systems Lab"
            description="Joint work on photonic quantum computing and experimental quantum devices."
          />
          <CollaborationCard
            title="Quantum Materials Group"
            description="Interdisciplinary work on materials and devices for emerging quantum systems."
          />
        </div>
      </div>

      <div className="collaboration-section">
        <h2 className="section-title">Industry Collaborations</h2>
        <div className="collaboration-grid">
          <CollaborationCard
            title="QubitX Technologies"
            description="Exploring practical applications of quantum optimization and hybrid quantum-classical workflows."
          />
          <CollaborationCard
            title="Quantum Software Initiative"
            description="Industry collaboration focused on scalable quantum programming tools."
          />
          <CollaborationCard
            title="NextGen Compute Labs"
            description="Research partnership on benchmarking and applied quantum software development."
          />
        </div>
      </div>

      <div className="collaboration-section">
        <h2 className="section-title">Funded Projects</h2>
        <div className="collaboration-grid">
          <CollaborationCard
            title="Quantum Communication Networks"
            description="A funded project investigating secure quantum communication protocols."
          />
          <CollaborationCard
            title="Error Mitigation in Quantum Circuits"
            description="Research project studying error mitigation techniques for near-term quantum devices."
          />
        </div>
      </div>

      <div className="collaboration-section">
        <h2 className="section-title">Academic Partnerships</h2>
        <div className="collaboration-grid">
          <CollaborationCard
            title="International Quantum Computing Consortium"
            description="Partnership with global universities to advance interdisciplinary quantum research."
          />
          <CollaborationCard
            title="Quantum Education Initiative"
            description="Academic collaboration supporting student research and curriculum development."
          />
        </div>
      </div>

      <div className="collaboration-cta">
        <h2>Interested in collaborating or joining us?</h2>
        <p>
          We welcome students, researchers, institutions, and industry partners
          interested in quantum computing research.
        </p>
        <a href="/join" className="cta-link">Join Us / Contact</a>
      </div>
    </div>
  );
}