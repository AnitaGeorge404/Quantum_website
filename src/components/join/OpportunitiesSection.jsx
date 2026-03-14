export default function OpportunitySection({
  title,
  category,
  type,
  eligibility,
  description,
  
}) {
  return (
    <div className="opportunity-card" data-category={category}>
      <span className="opportunity-category">{category}</span>
      <h3>{title}</h3>
      <div className="opportunity-details">
        <p><strong>Type:</strong> {type}</p>
        <p><strong>Eligibility:</strong> {eligibility}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}