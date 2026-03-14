import { motion } from "framer-motion";

const STATUS_STYLES = {
  Active:    { backgroundColor: "#e6f4ea", color: "#2d6a4f" },
  Completed: { backgroundColor: "#eaf0fb", color: "#1a3a6b" },
  Proposed:  { backgroundColor: "#fef9e7", color: "#7d5a00" },
};

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, facultyLead, status } = project;
  const badgeStyle = STATUS_STYLES[status] ?? { backgroundColor: "#f0f0f0", color: "#333" };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.07 }}
      whileHover={{
        y: -4,
        boxShadow: "0 8px 24px rgba(0,0,0,0.09)",
        borderColor: "#c5cfe0",
        transition: { duration: 0.2 },
      }}
    >
      <div className="card-header">
        <motion.h3
          className="card-title"
          whileHover={{ color: "#1a3a6b" }}
          transition={{ duration: 0.15 }}
        >
          {title}
        </motion.h3>
        <span className="card-badge" style={badgeStyle}>
          {status}
        </span>
      </div>
      <p className="card-description">{description}</p>
      <p className="card-faculty">
        <strong>Faculty Lead:</strong> {facultyLead}
      </p>
    </motion.div>
  );
}

