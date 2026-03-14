import { useState } from "react";
import { publications, projects } from "../data/researchData";
import PublicationCard from "../components/research/PublicationCard";
import ProjectCard from "../components/research/ProjectCard";
import "../styles/research.css";

const TABS = ["Publications", "Projects"];

export default function Research() {
  const [activeTab, setActiveTab] = useState("Publications");

  return (
    <div className="container">
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
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "Publications" && (
          <div className="card-list">
            {publications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        )}

        {activeTab === "Projects" && (
          <div className="card-list">
            {projects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}