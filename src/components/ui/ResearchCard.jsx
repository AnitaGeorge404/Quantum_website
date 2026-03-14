import Card from "./Card";

export default function ResearchCard({ title, summary, tag }) {
  return (
    <Card className="p-7">
<<<<<<< HEAD
      {tag ? (
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-900 mb-3">
          {tag}
        </p>
      ) : null}
=======
      {tag ? <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-900 mb-3">{tag}</p> : null}
>>>>>>> Vamsi
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600 leading-relaxed">{summary}</p>
    </Card>
  );
}
