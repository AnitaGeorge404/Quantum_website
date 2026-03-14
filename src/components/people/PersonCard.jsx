import { motion } from "framer-motion";

export default function PersonCard({ person, index = 0 }) {
  const { name, role, researchArea, email, image } = person;

  return (
    <motion.div
      className="card person-card"
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
      {/* Image with zoom on card hover */}
      <div className="person-card__image-wrap">
        <motion.img
          className="person-card__image"
          src={image}
          alt={`Portrait of ${name}`}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      <div className="person-card__body">
        <motion.h3
          className="card-title person-card__name"
          whileHover={{ color: "#1a3a6b" }}
          transition={{ duration: 0.15 }}
        >
          {name}
        </motion.h3>
        <span className="person-card__role">{role}</span>
        <p className="card-description person-card__area">{researchArea}</p>
        <motion.a
          className="card-link"
          href={`mailto:${email}`}
          whileHover={{ x: 3, opacity: 0.8 }}
          transition={{ duration: 0.15 }}
        >
          {email}
        </motion.a>
      </div>
    </motion.div>
  );
}
