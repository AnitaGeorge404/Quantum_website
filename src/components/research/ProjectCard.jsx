import { motion } from "framer-motion";
import Card from "../ui/Card";

const STATUS_STYLES = {
  Active: "bg-emerald-100 text-emerald-800",
  Completed: "bg-blue-100 text-blue-800",
  Proposed: "bg-amber-100 text-amber-800",
};

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, facultyLead, status } = project;
  const badgeClass = STATUS_STYLES[status] ?? "bg-gray-100 text-gray-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.07 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <Card className="h-full p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-gray-900 leading-snug">{title}</h3>
          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${badgeClass}`}
          >
            {status}
          </span>
        </div>
        <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>
        <p className="mt-5 text-sm text-gray-700">
          <span className="font-semibold text-gray-900">Faculty Lead:</span> {facultyLead}
        </p>
      </Card>
    </motion.div>
  );
}
