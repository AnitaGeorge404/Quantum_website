import "./Facilities.css";
import Photo from "../components/gallery/Images/fakeImage.jpg";

export default function FacilitiesSection() {
  return (
    <div className="facilities-container">
      <h2 className="facilities-title">Facilities</h2>

      <div className="facilities-grid">

        <div className="facility-card">
          <img src={Photo} alt="Quantum Hardware" />
          <h3>Quantum Hardware</h3>
          <p>
            Access to cutting-edge quantum hardware platforms used for
            experimentation and research in quantum algorithms,
            control systems, and hardware-level optimization.
          </p>
        </div>

        <div className="facility-card">
          <img src={Photo} alt="Lab Infrastructure" />
          <h3>Lab Infrastructure</h3>
          <p>
            Modern laboratory environments equipped with advanced
            instrumentation and experimental setups to support
            quantum technology research and development.
          </p>
        </div>

        <div className="facility-card">
          <img src={Photo} alt="Simulation Resources" />
          <h3>Simulation Resources</h3>
          <p>
            Powerful simulation tools and frameworks that allow
            researchers to model and test quantum systems before
            running them on real hardware.
          </p>
        </div>

        <div className="facility-card">
          <img src={Photo} alt="Computing Clusters" />
          <h3>Computing Clusters</h3>
          <p>
            High-performance computing clusters designed for
            large-scale simulations, data processing, and
            computational research in quantum science.
          </p>
        </div>

        <div className="facility-card">
          <img src={Photo} alt="Quantum Software Tools" />
          <h3>Quantum Software Tools</h3>
          <p>
            Access to modern quantum software development frameworks
            and toolkits used to design, simulate, and test quantum
            circuits and algorithms efficiently.
          </p>
        </div>

        <div className="facility-card">
          <img src={Photo} alt="Collaborative Research Spaces" />
          <h3>Collaborative Research Spaces</h3>
          <p>
            Dedicated research spaces designed to foster collaboration,
            idea exchange, and interdisciplinary innovation in
            quantum science and technology.
          </p>
        </div>

      </div>
    </div>
  );
}