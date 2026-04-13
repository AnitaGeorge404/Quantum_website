import Card from "./Card";

export default function ResearchCard({ title, summary, tag }) {
  return (
    <Card className="h-full p-8 flex flex-col">
      <div>
        {tag ? (
          <p className="mb-5 inline-flex text-xs font-bold uppercase tracking-widest text-secondary-500">
            {tag}
          </p>
        ) : null}
        <h3 className="text-2xl font-bold text-primary-900 transition-colors mb-4">{title}</h3>
        <p className="leading-relaxed text-slate-500 md:text-lg">{summary}</p>
      </div>
    </Card>
  );
}
