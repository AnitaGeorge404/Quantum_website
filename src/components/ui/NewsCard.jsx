import Card from "./Card";

export default function NewsCard({ title, date, summary }) {
  return (
    <Card className="h-full p-7 md:p-8">
      <p className="inline-flex rounded-full border border-pink-100 bg-pink-50/70 px-3 py-1 text-xs font-semibold tracking-wide text-pink-500">
        {date}
      </p>
      <h3 className="mt-4 text-xl font-semibold text-slate-900 md:text-2xl">{title}</h3>
      <p className="mt-4 leading-relaxed text-slate-600">{summary}</p>
    </Card>
  );
}
