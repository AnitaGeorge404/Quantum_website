import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import ResearchCard from "../components/ui/ResearchCard";
import NewsCard from "../components/ui/NewsCard";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import PosterPopup from "../components/ui/PosterPopup";
import AboutLabBrandSection from "../components/home/AboutLabBrandSection";

const labOverview = [
  {
    title: "About QuDAIS Lab",
    summary:
      "QuDAIS Lab is a Quantum Technology developments research lab at the Indian Institute of Information Technology Kottayam that focuses on spearheading the developments in quantum computing and technologies that aid in interdisciplinary research. The major fields that QuDAIS Lab concentrates on are the intersection of Quantum Technology developments in Artificial Intelligence, FinTech, Communication and Sensing.",
    tag: "Lab Overview",
  },
  {
    title: "Vision",
    summary:
      "To create a hub for developments in Quantum Computing and associated technologies that leads to innovation in the interdisciplinary fields of Artificial Intelligence, FinTech, Communication and Sensing, etc. To educate and train professionals in this emerging field in the mission to upskill the community.",
    tag: "Lab Overview",
  },
  {
    title: "Mission",
    summary:
      "QuDAIS Lab is dedicated to pioneering ground breaking research at the confluence of Quantum Computing with FinTech, Artificial Intelligence, Communication and Sensing. Our mission is to explore innovative solutions that leverage the synergies between the said fields, aiming to address complex challenges and extend our insights to various application areas. Through a collaborative approach that combines academic rigor and industry expertise, we strive to push the boundaries of these fields, fostering transformative developments that redefine the financial landscape and beyond.",
    tag: "Lab Overview",
  },
];

const researchHighlights = [
  {
    title: "Quantum AI and Machine Learning",
    summary:
      "Hybrid deep learning with quantum layers, quantum transformers, quantum NLP, and edge-ready quantum AI systems.",
    tag: "Research Highlights",
  },
  {
    title: "Quantum FinTech and Security",
    summary:
      "Quantum financial systems, quantum cryptography, and post-quantum cryptography for secure and resilient digital ecosystems.",
    tag: "Research Highlights",
  },
  {
    title: "Quantum Communication and Sensing",
    summary:
      "Quantum photonic sensors, spectroscopy systems, and interdisciplinary sensing applications for healthcare and environment.",
    tag: "Research Highlights",
  },
];

const latestUpdates = [
  {
    title: "Summer Internship 2026 Announced",
    date: "April 2026",
    summary:
      "Duration: 8–12 weeks with 2 weeks offline component at IIIT Kottayam. Application Deadline: 25 April 2026. Start Date: 01 May 2026.",
  },
  {
    title: "Internship Eligibility",
    date: "April 2026",
    summary:
      "Open to B.Tech / B.E / M.Tech / M.E / MCA / MSc / BS-MS students. Benefits include E-certificate and Patent & Publication opportunities.",
  },
  {
    title: "Research Thrust Areas",
    date: "April 2026",
    summary:
      "Internship focuses on quantum computing, quantum AI, quantum machine learning, quantum cryptography, sensing, fuzzy systems, and graph learning.",
  },
];

export default function Home() {
  return (
    <AnimatePresence>
      <>
      <PageHero
        title="QuDAIS Lab"
        description="Quantum Technology Developments in Artificial Intelligence Systems Research Lab at IIIT Kottayam, focused on accelerating interdisciplinary quantum innovation."
        accent="IIIT Kottayam"
        brandLogo="/brand/qudais_logo.jpeg"
        brandName="Quantum Technology Developments in Artificial Intelligence Systems Research Lab"
        ctaText="Explore Research"
        ctaTo="/research"
      />

      <AboutLabBrandSection />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Lab Overview"
          title="Purpose-driven research across quantum and intelligent systems"
          description="QuDAIS aligns foundational science with application-focused outcomes for national and global impact."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {labOverview.map((item) => (
            <ResearchCard
              key={item.title}
              title={item.title}
              summary={item.summary}
              tag={item.tag}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="Latest Updates"
          title="Summer Internship 2026"
          description="Join QuDAIS for focused research training in quantum technologies and interdisciplinary applications."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {latestUpdates.map((item) => (
            <NewsCard
              key={item.title}
              title={item.title}
              date={item.date}
              summary={item.summary}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <SectionHeader
          eyebrow="Research Highlights"
          title="Major interdisciplinary focus areas"
          description="Selected domains where QuDAIS is building long-term capability, talent, and translational outcomes."
        />
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center bg-gradient-to-br from-sky-50/80 via-white to-pink-50/70 border border-sky-100/80">
            <p className="text-lg text-slate-600 mb-6">
              Explore our comprehensive research portfolio across 15+ thrust areas spanning quantum computing, AI, cryptography, sensing, and related technologies.
            </p>
            <Button to="/research" variant="secondary">
              View All Research Areas
            </Button>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="People Preview"
          title="A vibrant academic research community"
          description="Our faculty, researchers, and scholars collaborate globally to produce high-impact outcomes."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-surface rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900">People</h3>
            <p className="mt-3 text-gray-600">
              Meet faculty members and researchers driving QuDAIS programs
              across quantum computing, AI, FinTech, communication, and sensing.
            </p>
            <Button to="/people" variant="secondary" className="mt-6">
              Explore People
            </Button>
          </div>
          <div className="glass-surface rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Collaborations Preview
            </h3>
            <p className="mt-3 text-gray-600">
              Explore institutional, academic, and industry collaborations that
              support high-impact and socially relevant quantum initiatives.
            </p>
            <Button to="/collaborations" variant="secondary" className="mt-6">
              View Collaborations
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <div className="glass-surface rounded-3xl p-10 text-center md:p-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Join The Lab
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Join QuDAIS programs and build quantum-ready expertise
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            We welcome BTech, MTech, iMTech, and PhD students, along with
            collaborators committed to rigorous and socially relevant research.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/join">Apply or Contact</Button>
            <Button to="/research" variant="secondary">
              Explore Research
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <PosterPopup />
      </>
    </AnimatePresence>
  );
}
