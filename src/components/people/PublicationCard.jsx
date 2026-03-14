import { motion } from "framer-motion";

export const cardVariants = {
  hidden:   { opacity: 0, y: 18 },
  visible:  { opacity: 1, y: 0  },
};

export default function PublicationCard({ publication, index = 0 }) {
  const { title, authors, journal, year, link } = publication;

  return (
    <motion.div
      className="card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.07 }}
      whileHover={{
        y: -4,
        boxShadow: "0 8px 24px rgba(0,0,0,0.09)",
        borderColor: "#c5cfe0",
        transition: { duration: 0.2 },
      }}
    >
      <span className="card-year">{year}</span>
      <motion.h3
        className="card-title"
        whileHover={{ color: "#1a3a6b" }}
        transition={{ duration: 0.15 }}
      >
        {title}
      </motion.h3>
      <p className="card-authors">{authors.join(", ")}</p>
      <p className="card-journal">{journal}</p>
      {link && (
        <motion.a
          className="card-link"
          href={link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 4, opacity: 0.8 }}
          transition={{ duration: 0.15 }}
        >
          View Publication →
        </motion.a>
      )}
    </motion.div>
  );
}
