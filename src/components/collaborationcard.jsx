const CollaborationCard = ({ category, title, description }) => {
  return (
    <div className="collaboration-card">
      <h2 className="collab-category">{category}</h2>

      <h3 className="collab-title">
        {title}
      </h3>

      <p className="collab-description">
        {description}
      </p>
    </div>
  );
};

export default CollaborationCard;