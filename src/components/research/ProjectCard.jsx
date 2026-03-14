const STATUS_STYLES = {
  Active: { backgroundColor: "#e6f4ea", color: "#2d6a4f" },
  Completed: { backgroundColor: "#eaf0fb", color: "#1a3a6b" },
  Proposed: { backgroundColor: "#fef9e7", color: "#7d5a00" },
};

export default function ProjectCard({ project }) {
  const { title, description, facultyLead, status } = project;
  const badgeStyle = STATUS_STYLES[status] ?? { backgroundColor: "#f0f0f0", color: "#333" };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className="card-badge" style={badgeStyle}>
          {status}
        </span>
      </div>
      <p className="card-description">{description}</p>
      <p className="card-faculty">
        <strong>Faculty Lead:</strong> {facultyLead}
      </p>
    </div>
  );
}
