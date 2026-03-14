export default function PersonCard({ person }) {
  const { name, role, researchArea, email, image } = person;

  return (
    <div className="card person-card">
      <div className="person-card__image-wrap">
        <img
          className="person-card__image"
          src={image}
          alt={`Portrait of ${name}`}
        />
      </div>
      <div className="person-card__body">
        <h3 className="card-title person-card__name">{name}</h3>
        <span className="person-card__role">{role}</span>
        <p className="card-description person-card__area">{researchArea}</p>
        <a className="card-link" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </div>
  );
}
