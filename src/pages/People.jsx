import { motion } from "framer-motion";
import { people } from "../data/peopleData";
import PersonCard from "../components/people/PersonCard";
import "../styles/People.css";

const SECTIONS = [
  { key: "head", label: "Head of Department" },
  { key: "faculty", label: "Faculty Members" },
  { key: "phd", label: "PhD Scholars" },
  { key: "assistant", label: "Research Assistants" },
  { key: "student", label: "Students" },
];

const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function People() {
  return (
    <motion.div
      className="container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <h1>Our People</h1>
      <p>
        Meet the researchers, scholars, and students driving quantum science
        at our lab.
      </p>

      {SECTIONS.map(({ key, label }, sectionIndex) => {
        const members = people.filter((p) => p.category === key);
        if (members.length === 0) return null;

        return (
          <motion.section
            key={key}
            className="section people-section"
            custom={sectionIndex}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <h2>{label}</h2>

            <div className={`people-grid people-grid--${key}`}>
              {members.map((person, i) => (
                <PersonCard key={person.id} person={person} index={i} />
              ))}
            </div>
          </motion.section>
        );
      })}
    </motion.div>
  );
}