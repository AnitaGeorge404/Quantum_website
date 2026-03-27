import { motion } from "framer-motion";
import Card from "../ui/Card";

export const cardVariants = {
  hidden:   { opacity: 0, y: 18 },
  visible:  { opacity: 1, y: 0  },
};

export default function PublicationCard({ publication, index = 0 }) {
  const { title, authors, journal, year, link } = publication;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.07 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <Card className="h-full p-7 flex flex-col">
        <span className="inline-flex w-fit rounded-full border border-blue-700 bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
          {year}
        </span>
        <h3 className="mt-4 text-xl font-semibold text-slate-900 leading-snug">{title}</h3>
        <p className="mt-4 text-slate-600 leading-relaxed">{authors.join(", ")}</p>
        <p className="mt-2 text-sm text-slate-500">{journal}</p>
        {link && (
          <motion.a
            className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-pink-500"
            href={link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.15 }}
          >
            View Publication <span className="ml-1">&rarr;</span>
          </motion.a>
        )}
      </Card>
    </motion.div>
  );
}
