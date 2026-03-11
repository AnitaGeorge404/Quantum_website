export default function ContactSection({ title, email, phone }) {
  return (
    <div className="contact-card">
      <h3>{title}</h3>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Phone:</strong> {phone}
      </p>
    </div>
  );
}