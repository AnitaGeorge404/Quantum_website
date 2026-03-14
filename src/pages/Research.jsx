import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { publications, projects } from "../data/researchData";
import PublicationCard from "../components/people/PublicationCard";
import ProjectCard from "../components/people/ProjectCard";

const TABS = ["Publications", "Projects"];

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
    <motion.div
      className="container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <h1>Quantum Research Lab</h1>
      <p>Explore our latest publications and ongoing research projects.</p>

      {/* Tab Bar */}
      <div className="tab-bar">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "tab-btn--active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {/* Animated active underline */}
            {activeTab === tab && (
              <motion.span
                layoutId="tab-underline"
                style={{
                  position: "absolute",
                  bottom: -1,
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: "#1a3a6b",
                  borderRadius: 1,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content with AnimatePresence for exit animations */}
      <div className="tab-content">
        <AnimatePresence mode="wait">
          {activeTab === "Publications" && (
            <motion.div
              key="publications"
              className="card-list"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {publications.map((pub, i) => (
                <PublicationCard key={pub.id} publication={pub} index={i} />
              ))}
            </motion.div>
          )}

          {activeTab === "Projects" && (
            <motion.div
              key="projects"
              className="card-list"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {projects.map((proj, i) => (
                <ProjectCard key={proj.id} project={proj} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}