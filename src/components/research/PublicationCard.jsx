export default function PublicationCard({ publication }) {
  const { title, authors, journal, year, link } = publication;

  return (
    <div className="card">
      <span className="card-year">{year}</span>
      <h3 className="card-title">{title}</h3>
      <p className="card-authors">{authors.join(", ")}</p>
      <p className="card-journal">{journal}</p>
      {link && (
        <a className="card-link" href={link} target="_blank" rel="noreferrer">
          View Publication →
        </a>
      )}
    </div>
  );
}
