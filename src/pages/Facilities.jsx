<<<<<<< Vamsi
﻿import "./Facilities.css";
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
=======
﻿import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import GalleryCard from "../components/ui/GalleryCard";
import Button from "../components/ui/Button";

const facilityCards = [
  {
    title: "Quantum Hardware Laboratory",
    subtitle:
      "Cryogenic and electronic control systems for superconducting qubit experiments.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab10380cb48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Photonics and Optics Suite",
    subtitle:
      "Integrated setup for photonic quantum information processing and precision measurement.",
    image:
      "https://images.unsplash.com/photo-1582719478185-0c4f6dd2f3e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Simulation Infrastructure",
    subtitle:
      "Large-scale simulation resources for algorithm validation and circuit performance studies.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Computing Clusters",
    subtitle:
      "High-performance compute nodes supporting reproducible scientific workloads.",
    image:
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Facilities() {
  return (
    <>
      <PageHero
        title="Facilities"
        description="Our institute combines specialized laboratory environments and computational infrastructure to support world-class quantum research."
        accent="Institute Infrastructure"
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Infrastructure"
          title="Built for high-quality experimental and computational science"
          description="From hardware characterization to algorithm simulation, our facilities support full-stack quantum research."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {facilityCards.map((item) => (
            <GalleryCard key={item.title} title={item.title} subtitle={item.subtitle} image={item.image} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50 border-y border-gray-200">
        <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Need access through collaboration?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We support approved academic and industry collaborations through structured facility access programs.</p>
          <div className="mt-8">
            <Button to="/collaborations">Request Collaboration</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
>>>>>>> main
  );
}