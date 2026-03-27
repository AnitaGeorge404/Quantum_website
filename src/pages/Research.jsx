import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { publications, projects } from "../data/researchData";
import PublicationCard from "../components/research/PublicationCard";
import ProjectCard from "../components/research/ProjectCard";
import PageHero from "../components/ui/PageHero";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const TABS = ["Publications", "Projects"];

const researchMetrics = [
  { label: "Peer-Reviewed Papers", value: `${publications.length}+` },
  { label: "Active Projects", value: `${projects.length}` },
  { label: "Research Tracks", value: "4" },
  { label: "Industry Collaborations", value: "15+" },
];

const pageVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const tabContentVariants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.18, ease: "easeIn" } },
};

export default function Research() {
  const [activeTab, setActiveTab] = useState("Publications");

  return (
    <>
      <PageHero
        title="Research"
        description="Explore our active projects and latest peer-reviewed publications across quantum algorithms, systems, and fault-tolerant architectures."
        accent="Scientific Programs"
      />

      <SectionWrapper>
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {researchMetrics.map((item) => (
            <Card key={item.label} className="p-6">
              <p className="text-3xl font-semibold text-gray-900">{item.value}</p>
              <p className="mt-2 text-sm text-gray-600">{item.label}</p>
            </Card>
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper className="soft-section border-y border-sky-100/80">
        <SectionHeader
          eyebrow="Research Portfolio"
          title="Programs and publications"
          description="Switch between research outputs and project programs to explore our institute's ongoing work."
        />

        <div className="inline-flex flex-wrap items-center gap-2 rounded-lg border border-gray-200 bg-white p-2">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                className={`relative rounded-md px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-900 text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {activeTab === "Publications" && (
              <motion.div
                key="publications"
                className="grid md:grid-cols-2 gap-6"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {publications.map((publication, i) => (
                  <PublicationCard key={publication.id} publication={publication} index={i} />
                ))}
              </motion.div>
            )}

            {activeTab === "Projects" && (
              <motion.div
                key="projects"
                className="grid md:grid-cols-2 gap-6"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {projects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="glass-surface rounded-3xl p-10 text-center md:p-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Collaborate
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Build the next generation of quantum systems
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            We welcome cross-disciplinary collaborations from academia, industry,
            and mission-focused research organizations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/collaborations">Explore Collaborations</Button>
            <Button to="/join" variant="secondary">
              Join Research Programs
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}