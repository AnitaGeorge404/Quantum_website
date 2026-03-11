export default function OpportunitySection({
  title,
  category,
  type,
  eligibility,
  description,
  
}) {
  return (
    <div className="opportunity-card">
      <h2 className="opportunity-category"><b>{category}</b></h2>
      <h3>{title}</h3>
      <p><strong>Type:</strong> {type}</p>
      <p><strong>Eligibility:</strong> {eligibility}</p>
      <p>{description}</p>
    </div>
  );
}